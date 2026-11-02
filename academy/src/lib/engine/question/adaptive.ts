import type { Difficulty, IndexedQuestion, ThinkingSkill } from "@/lib/types/content";

export const LEVELS: Difficulty[] = ["beginner", "intermediate", "advanced"];

export const LEVEL_LABEL: Record<Difficulty, string> = {
  beginner: "Cơ bản",
  intermediate: "Trung bình",
  advanced: "Nâng cao",
};

/** One answered question, persisted in the learner's history. */
export interface AttemptRecord {
  questionId: string;
  lessonId: string;
  conceptId: string;
  fingerprint: string;
  semanticKey: string;
  difficulty: Difficulty;
  correct: boolean;
  score: number;
  at: string;
  sessionId: string;
  /** False when the learner re-answers in review mode (no XP). */
  firstTime: boolean;
}

export interface QuizSession {
  sessionId: string;
  lessonId: string;
  startedAt: string;
  target: number;
  level: Difficulty;
  correctStreak: number;
  wrongStreak: number;
  askedIds: string[];
  answers: { questionId: string; correct: boolean; score: number }[];
  remediation?: { conceptId: string; thinkingSkill: ThinkingSkill };
  /** Question currently on screen (survives reload). */
  currentId?: string;
  currentReason?: string;
  finishedAt?: string;
}

export type Selection =
  | { kind: "question"; question: IndexedQuestion; reason: "new" | "remediation" | "nearest-level" }
  | { kind: "complete" }
  | { kind: "exhausted"; remediationMissed?: boolean };

export function newSession(lessonId: string, target: number, level: Difficulty = "beginner", now = new Date()): QuizSession {
  return {
    sessionId: `${lessonId}:${now.getTime().toString(36)}`,
    lessonId,
    startedAt: now.toISOString(),
    target,
    level,
    correctStreak: 0,
    wrongStreak: 0,
    askedIds: [],
    answers: [],
  };
}

/**
 * Questions the learner has never seen, by id AND by fingerprint AND by
 * concept/objective/skill key — so an edited copy of an old question, or a
 * new question testing exactly the same idea, is not served as "new".
 */
export function unseenQuestions(bank: IndexedQuestion[], history: AttemptRecord[], session?: QuizSession): IndexedQuestion[] {
  const ids = new Set(history.map((h) => h.questionId));
  const fps = new Set(history.map((h) => h.fingerprint));
  const keys = new Set(history.map((h) => `${h.lessonId}|${h.semanticKey}`));
  for (const id of session?.askedIds ?? []) ids.add(id);
  return bank.filter(
    (q) => !ids.has(q.questionId) && !fps.has(q.canonicalFingerprint) && !keys.has(`${q.lessonId}|${q.semanticKey}`),
  );
}

function levelOrder(level: Difficulty): Difficulty[] {
  const i = LEVELS.indexOf(level);
  return [...LEVELS].sort((a, b) => {
    const da = Math.abs(LEVELS.indexOf(a) - i);
    const db = Math.abs(LEVELS.indexOf(b) - i);
    return da !== db ? da - db : LEVELS.indexOf(a) - LEVELS.indexOf(b);
  });
}

function pick<T>(items: T[], rng: () => number): T {
  return items[Math.floor(rng() * items.length)];
}

/** Choose the next question for an adaptive session. Pure and deterministic given `rng`. */
export function selectNext(
  bank: IndexedQuestion[],
  session: QuizSession,
  history: AttemptRecord[],
  rng: () => number,
): Selection {
  if (session.answers.length >= session.target) return { kind: "complete" };
  const pool = unseenQuestions(bank, history, session);
  if (pool.length === 0) return { kind: "exhausted", remediationMissed: Boolean(session.remediation) };

  const askedConcepts = new Set(
    session.askedIds.map((id) => bank.find((q) => q.questionId === id)?.conceptId).filter(Boolean),
  );
  const preferFresh = (qs: IndexedQuestion[]) => {
    const fresh = qs.filter((q) => !askedConcepts.has(q.conceptId));
    return fresh.length ? fresh : qs;
  };

  let remediationMissed = false;
  if (session.remediation) {
    const { conceptId, thinkingSkill } = session.remediation;
    const maxLevel = LEVELS.indexOf(session.level);
    const sameConcept = pool.filter((q) => q.conceptId === conceptId);
    const sameSkill = pool.filter((q) => q.thinkingSkill === thinkingSkill && LEVELS.indexOf(q.difficulty) <= maxLevel);
    const candidates = sameConcept.length ? sameConcept : sameSkill;
    if (candidates.length) {
      const easiest = Math.min(...candidates.map((q) => LEVELS.indexOf(q.difficulty)));
      return {
        kind: "question",
        question: pick(candidates.filter((q) => LEVELS.indexOf(q.difficulty) === easiest), rng),
        reason: "remediation",
      };
    }
    remediationMissed = true;
  }

  for (const level of levelOrder(session.level)) {
    const group = pool.filter((q) => q.difficulty === level);
    if (group.length) {
      return {
        kind: "question",
        question: pick(preferFresh(group), rng),
        reason: level === session.level ? "new" : "nearest-level",
      };
    }
  }
  return { kind: "exhausted", remediationMissed };
}

export interface AnswerOutcome {
  session: QuizSession;
  levelChange?: "up" | "down";
}

/** Update streaks, level and remediation after an answer. */
export function applyAnswer(session: QuizSession, q: IndexedQuestion, correct: boolean, score: number): AnswerOutcome {
  const s: QuizSession = {
    ...session,
    askedIds: session.askedIds.includes(q.questionId) ? session.askedIds : [...session.askedIds, q.questionId],
    answers: [...session.answers, { questionId: q.questionId, correct, score }],
    currentId: undefined,
    currentReason: undefined,
  };
  const idx = LEVELS.indexOf(s.level);
  let levelChange: AnswerOutcome["levelChange"];
  if (correct) {
    s.correctStreak += 1;
    s.wrongStreak = 0;
    s.remediation = undefined;
    if (s.correctStreak >= 2 && idx < LEVELS.length - 1) {
      s.level = LEVELS[idx + 1];
      s.correctStreak = 0;
      levelChange = "up";
    }
  } else {
    s.correctStreak = 0;
    s.wrongStreak += 1;
    s.remediation = { conceptId: q.conceptId, thinkingSkill: q.thinkingSkill };
    if (s.wrongStreak >= 2 && idx > 0) {
      s.level = LEVELS[idx - 1];
      s.wrongStreak = 0;
      levelChange = "down";
    }
  }
  if (s.answers.length >= s.target) s.finishedAt = new Date().toISOString();
  return { session: s, levelChange };
}

/** Questions whose latest attempt was wrong — offered as optional review (no XP). */
export function reviewQueue(bank: IndexedQuestion[], history: AttemptRecord[]): IndexedQuestion[] {
  const latest = new Map<string, AttemptRecord>();
  for (const h of history) latest.set(h.questionId, h);
  return bank.filter((q) => latest.get(q.questionId)?.correct === false);
}

export function bankStatus(bank: IndexedQuestion[], history: AttemptRecord[]) {
  const unseen = unseenQuestions(bank, history).length;
  const answered = new Set(history.filter((h) => bank.some((q) => q.questionId === h.questionId)).map((h) => h.questionId));
  const correct = new Set(history.filter((h) => h.correct).map((h) => h.questionId));
  return {
    total: bank.length,
    unseen,
    answered: answered.size,
    correct: [...answered].filter((id) => correct.has(id)).length,
  };
}
