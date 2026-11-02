import { describe, expect, it } from "vitest";
import { awardXp, completeLesson, recordAttempt, saveNote, syncBadges, toggleBookmark, visitLesson } from "@/lib/progress/actions";
import { computeStreak, levelInfo, totalXp } from "@/lib/progress/gamification";
import { emptyState, parseState, SCHEMA_VERSION } from "@/lib/progress/schema";
import type { AttemptRecord } from "@/lib/engine/question/adaptive";

const attempt = (id: string, correct: boolean, firstTime = true): AttemptRecord => ({
  questionId: id,
  lessonId: "ch03-l01",
  conceptId: "role",
  fingerprint: "f",
  semanticKey: "k",
  difficulty: "beginner",
  correct,
  score: correct ? 1 : 0,
  at: new Date().toISOString(),
  sessionId: "s",
  firstTime,
});

describe("XP and anti-farming", () => {
  it("awards XP once per key", () => {
    let s = emptyState();
    s = awardXp(s, "k", 10, "x");
    s = awardXp(s, "k", 10, "x");
    expect(totalXp(s)).toBe(10);
  });

  it("re-answering a question (review) never earns XP again", () => {
    let s = recordAttempt(emptyState(), attempt("q1", true), 10);
    s = recordAttempt(s, attempt("q1", true, false), 10);
    s = recordAttempt(s, attempt("q1", true, true), 10);
    expect(totalXp(s)).toBe(10);
    expect(s.attempts).toHaveLength(3);
  });

  it("wrong answers give no XP", () => {
    expect(totalXp(recordAttempt(emptyState(), attempt("q1", false), 10))).toBe(0);
  });

  it("chapter milestone only when all published lessons are done", () => {
    const ch = { id: "ch03", title: "Prompt", lessonIds: ["a", "b"], xp: 100 };
    let s = completeLesson(emptyState(), "a", 50, ch);
    expect(s.xpEvents.some((e) => e.key === "chapter:ch03")).toBe(false);
    s = completeLesson(s, "b", 50, ch);
    expect(s.xpEvents.some((e) => e.key === "chapter:ch03")).toBe(true);
    expect(totalXp(s)).toBe(200);
  });
});

describe("levels, streaks, badges", () => {
  it("levels", () => {
    expect(levelInfo(0).level).toBe(1);
    expect(levelInfo(100).level).toBe(2);
    expect(levelInfo(99999).next).toBeNull();
  });
  it("streak counts consecutive days ending today or yesterday", () => {
    expect(computeStreak(["2026-10-30", "2026-10-31", "2026-11-01"], "2026-11-02")).toBe(3);
    expect(computeStreak(["2026-10-30", "2026-11-01", "2026-11-02"], "2026-11-02")).toBe(2);
    expect(computeStreak(["2026-10-01"], "2026-11-02")).toBe(0);
  });
  it("first-step badge after completing a lesson", () => {
    const { earned } = syncBadges(completeLesson(emptyState(), "a", 50));
    expect(earned).toContain("first-step");
  });
});

describe("persistence", () => {
  it("round-trips through JSON (reload)", () => {
    let s = visitLesson(emptyState(), "ch03-l01");
    s = toggleBookmark(s, "ch03-l01");
    s = saveNote(s, "ch03-l01", "ghi chú");
    s = recordAttempt(s, attempt("q1", true), 10);
    const restored = parseState(JSON.stringify(s))!;
    expect(restored.bookmarks).toEqual(["ch03-l01"]);
    expect(restored.notes["ch03-l01"].text).toBe("ghi chú");
    expect(restored.attempts).toHaveLength(1);
    expect(totalXp(restored)).toBe(10);
  });

  it("rejects corrupt or incompatible data, drops malformed entries", () => {
    expect(parseState("{not json")).toBeNull();
    expect(parseState(JSON.stringify({ version: 999 }))).toBeNull();
    const partial = parseState(JSON.stringify({ version: SCHEMA_VERSION, attempts: [{ bad: true }, attempt("q", true)], bookmarks: [1, "x"] }))!;
    expect(partial.attempts).toHaveLength(1);
    expect(partial.bookmarks).toEqual(["x"]);
    expect(parseState(null)).not.toBeNull();
  });

  it("empty note removes it", () => {
    expect(saveNote(saveNote(emptyState(), "a", "x"), "a", "  ").notes.a).toBeUndefined();
  });
});
