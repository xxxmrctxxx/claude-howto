import type { AttemptRecord, QuizSession } from "@/lib/engine/question/adaptive";
import { todayKey } from "@/lib/utils";
import { BADGES, computeStreak } from "./gamification";
import type { LabRecord, LessonProgress, PlacementResult, ProgressState } from "./schema";

/* Pure state transitions. Each returns a NEW state object (never mutates). */

export function awardXp(s: ProgressState, key: string, amount: number, reason: string, now = new Date()): ProgressState {
  if (amount <= 0 || s.xpEvents.some((e) => e.key === key)) return s;
  return { ...s, xpEvents: [...s.xpEvents, { key, amount, reason, at: now.toISOString() }] };
}

export function touchActivity(s: ProgressState, now = new Date()): ProgressState {
  const day = todayKey(now);
  return s.activityDays.includes(day) ? s : { ...s, activityDays: [...s.activityDays, day].slice(-400) };
}

function lessonOf(s: ProgressState, lessonId: string, now: Date): LessonProgress {
  return (
    s.lessons[lessonId] ?? {
      status: "in-progress",
      startedAt: now.toISOString(),
      lastVisitedAt: now.toISOString(),
      sectionsSeen: [],
    }
  );
}

export function patchLesson(
  s: ProgressState,
  lessonId: string,
  patch: Partial<LessonProgress>,
  now = new Date(),
): ProgressState {
  const current = lessonOf(s, lessonId, now);
  return { ...s, lessons: { ...s.lessons, [lessonId]: { ...current, ...patch } } };
}

export function visitLesson(s: ProgressState, lessonId: string, now = new Date()): ProgressState {
  return touchActivity(patchLesson(s, lessonId, { lastVisitedAt: now.toISOString() }, now), now);
}

export function markSection(s: ProgressState, lessonId: string, sectionId: string, now = new Date()): ProgressState {
  const current = lessonOf(s, lessonId, now);
  if (current.lastSectionId === sectionId && current.sectionsSeen.includes(sectionId)) return s;
  return patchLesson(
    s,
    lessonId,
    {
      lastSectionId: sectionId,
      sectionsSeen: current.sectionsSeen.includes(sectionId) ? current.sectionsSeen : [...current.sectionsSeen, sectionId],
    },
    now,
  );
}

/**
 * Mark a lesson complete. `chapter` lets us award the chapter milestone when
 * every published lesson of that chapter is done.
 */
export function completeLesson(
  s: ProgressState,
  lessonId: string,
  xp: number,
  chapter?: { id: string; title: string; lessonIds: string[]; xp: number },
  now = new Date(),
): ProgressState {
  let next = patchLesson(s, lessonId, { status: "completed", completedAt: now.toISOString() }, now);
  next = awardXp(next, `lesson:${lessonId}`, xp, "Hoàn thành bài học", now);
  if (chapter && chapter.lessonIds.every((id) => next.lessons[id]?.status === "completed")) {
    next = awardXp(next, `chapter:${chapter.id}`, chapter.xp, `Hoàn thành chương: ${chapter.title}`, now);
  }
  return touchActivity(next, now);
}

export function reopenLesson(s: ProgressState, lessonId: string, now = new Date()): ProgressState {
  return patchLesson(s, lessonId, { status: "in-progress", completedAt: undefined }, now);
}

/** XP is only granted for the FIRST correct answer to a question — no farming by repetition. */
export function recordAttempt(s: ProgressState, attempt: AttemptRecord, xp: number, now = new Date()): ProgressState {
  let next: ProgressState = { ...s, attempts: [...s.attempts, attempt].slice(-5000) };
  if (attempt.correct && attempt.firstTime) {
    next = awardXp(next, `q:${attempt.questionId}`, xp, "Trả lời đúng câu hỏi mới", now);
  }
  return touchActivity(next, now);
}

export function saveSession(s: ProgressState, session: QuizSession): ProgressState {
  return { ...s, sessions: { ...s.sessions, [session.lessonId]: session } };
}

export function clearSession(s: ProgressState, lessonId: string): ProgressState {
  const sessions = { ...s.sessions };
  delete sessions[lessonId];
  return { ...s, sessions };
}

export function recordLab(
  s: ProgressState,
  record: LabRecord,
  xp?: { key: string; amount: number; reason: string },
  now = new Date(),
): ProgressState {
  let next: ProgressState = { ...s, labs: [...s.labs, record].slice(-500) };
  if (xp && record.passed) next = awardXp(next, xp.key, xp.amount, xp.reason, now);
  return touchActivity(next, now);
}

export function setLabState(s: ProgressState, key: string, value: unknown): ProgressState {
  return { ...s, labState: { ...s.labState, [key]: value } };
}

export function toggleBookmark(s: ProgressState, lessonId: string): ProgressState {
  return {
    ...s,
    bookmarks: s.bookmarks.includes(lessonId) ? s.bookmarks.filter((b) => b !== lessonId) : [...s.bookmarks, lessonId],
  };
}

export function saveNote(s: ProgressState, lessonId: string, text: string, now = new Date()): ProgressState {
  const notes = { ...s.notes };
  if (text.trim()) notes[lessonId] = { text, updatedAt: now.toISOString() };
  else delete notes[lessonId];
  return { ...s, notes };
}

export function setPlacement(s: ProgressState, result: PlacementResult, xp: number, now = new Date()): ProgressState {
  return touchActivity(awardXp({ ...s, placement: result }, "placement", xp, "Hoàn thành kiểm tra đầu vào", now), now);
}

/** Add any newly earned badges. Returns the state and the ids just earned. */
export function syncBadges(s: ProgressState, now = new Date()): { state: ProgressState; earned: string[] } {
  const streak = computeStreak(s.activityDays, todayKey(now));
  const earned = BADGES.filter((b) => !s.badges[b.id] && b.earned(s, { streak })).map((b) => b.id);
  if (!earned.length) return { state: s, earned };
  const badges = { ...s.badges };
  for (const id of earned) badges[id] = now.toISOString();
  return { state: { ...s, badges }, earned };
}
