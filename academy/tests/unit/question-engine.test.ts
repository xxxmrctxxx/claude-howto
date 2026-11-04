import { describe, expect, it } from "vitest";
import { allQuestions, bankFor, LESSONS, QUESTION_BANKS } from "@/content/registry";
import {
  applyAnswer,
  bankStatus,
  newSession,
  reviewQueue,
  selectNext,
  unseenQuestions,
  type AttemptRecord,
  type QuizSession,
} from "@/lib/engine/question/adaptive";
import { computeFingerprint, indexQuestion } from "@/lib/engine/question/fingerprint";
import { createRng, lexicalSimilarity, profileSimilarity, similarityProfile } from "@/lib/engine/question/text";
import { checkCandidate, validateBank } from "@/lib/engine/question/validate";
import type { IndexedQuestion, Question, SingleChoiceQuestion } from "@/lib/types/content";

const lessons = Object.values(LESSONS);
const bank = bankFor("ch03-l01");
const base = QUESTION_BANKS["ch03-l01"].find((q) => q.questionId === "ch03-l01-q11") as SingleChoiceQuestion;

function attempt(q: IndexedQuestion, correct: boolean, sessionId = "old"): AttemptRecord {
  return {
    questionId: q.questionId,
    lessonId: q.lessonId,
    conceptId: q.conceptId,
    fingerprint: q.canonicalFingerprint,
    semanticKey: q.semanticKey,
    difficulty: q.difficulty,
    correct,
    score: correct ? 1 : 0,
    at: new Date().toISOString(),
    sessionId,
    firstTime: true,
  };
}

describe("question banks", () => {
  it("every published lesson has at least 15 questions", () => {
    for (const lesson of lessons) expect(QUESTION_BANKS[lesson.id]?.length ?? 0).toBeGreaterThanOrEqual(15);
  });

  it("all banks pass the multi-layer duplicate check with no errors and no unreviewed warnings", () => {
    const report = validateBank(allQuestions(), lessons);
    expect(report.errors).toEqual([]);
    expect(report.warnings).toEqual([]);
  });

  it("every question carries the required metadata", () => {
    for (const q of bank) {
      expect(q.questionId).toBeTruthy();
      expect(q.lessonId).toBeTruthy();
      expect(q.conceptId).toBeTruthy();
      expect(q.difficulty).toMatch(/beginner|intermediate|advanced/);
      expect(q.questionType).toBeTruthy();
      expect(q.canonicalFingerprint).toMatch(/^[0-9a-f]{14}$/);
      expect(q.learningObjective).toBeTruthy();
      expect(q.explanation.length).toBeGreaterThan(20);
    }
  });

  it("covers all three difficulty levels", () => {
    const levels = new Set(bank.map((q) => q.difficulty));
    expect(levels).toEqual(new Set(["beginner", "intermediate", "advanced"]));
  });
});

describe("duplicate detection layers", () => {
  it("layer 1 — rejects a duplicated questionId", () => {
    const dup: Question = { ...base, prompt: "Một câu hỏi hoàn toàn khác về chủ đề khác", conceptId: "task", learningObjective: "o4" };
    const issues = checkCandidate(dup, QUESTION_BANKS["ch03-l01"], lessons);
    expect(issues.some((i) => i.layer === "id")).toBe(true);
  });

  it("layer 2 — rejects the same stem with only punctuation/case/filler changes", () => {
    const dup: Question = {
      ...base,
      questionId: "x-1",
      conceptId: "task",
      learningObjective: "o4",
      prompt: "VÌ SAO thêm câu “Bạn là kỹ sư QA có 10 năm kinh nghiệm về máy biến áp” thường giúp kết quả tốt hơn vậy???",
    };
    const issues = checkCandidate(dup, QUESTION_BANKS["ch03-l01"], lessons);
    expect(issues.some((i) => i.layer === "content")).toBe(true);
  });

  it("layer 3 — same fingerprint when only the answer order is shuffled", () => {
    const shuffled: SingleChoiceQuestion = { ...base, questionId: "x-2", options: [...base.options].reverse() };
    expect(computeFingerprint(shuffled)).toBe(computeFingerprint(base));
    const issues = checkCandidate(shuffled, QUESTION_BANKS["ch03-l01"], lessons);
    expect(issues.some((i) => i.layer === "fingerprint")).toBe(true);
  });

  it("layer 3 — a genuinely different correct answer changes the fingerprint", () => {
    const changed: SingleChoiceQuestion = { ...base, answer: "b" };
    expect(computeFingerprint(changed)).not.toBe(computeFingerprint(base));
  });

  it("layer 4 — rejects a reworded question testing the same concept + objective + skill", () => {
    const sameIdea: SingleChoiceQuestion = {
      ...base,
      questionId: "x-3",
      prompt: "Lợi ích chính của việc giao cho Claude một vai trò chuyên môn ở đầu prompt?",
      options: [
        { id: "a", text: "Giúp câu trả lời dùng đúng góc nhìn và thuật ngữ chuyên ngành" },
        { id: "b", text: "Mở khoá tính năng trả phí" },
        { id: "c", text: "Giúp Claude nhớ mọi cuộc hội thoại trước đây" },
      ],
    };
    const issues = checkCandidate(sameIdea, QUESTION_BANKS["ch03-l01"], lessons);
    expect(issues.some((i) => i.layer === "semantic-key")).toBe(true);
  });

  it("layer 5 — the pruned bank-wide comparison agrees with the exact similarity", () => {
    const stems = allQuestions().slice(0, 120).map((q) => q.prompt);
    const profiles = stems.map(similarityProfile);
    for (let i = 0; i < stems.length; i += 7) {
      for (let j = i + 1; j < stems.length; j += 5) {
        const exact = lexicalSimilarity(stems[i], stems[j]);
        const pruned = profileSimilarity(profiles[i], profiles[j], 0.72);
        // Above the floor the value is exact; below it, it may be an upper bound that still stays below.
        expect(pruned >= 0.72).toBe(exact >= 0.72);
        if (exact >= 0.72) expect(pruned).toBeCloseTo(exact, 10);
      }
    }
  });

  it("layer 5 — lexical similarity flags a reworded stem even with different metadata", () => {
    const sim = lexicalSimilarity(
      "Vì sao thêm câu vai trò kỹ sư QA giúp kết quả tốt hơn?",
      "Tại sao thêm câu vai trò kỹ sư QA lại giúp kết quả tốt hơn?",
    );
    expect(sim).toBeGreaterThan(0.72);
    expect(lexicalSimilarity("Prompt là gì?", "Sắp xếp các bước cải tiến prompt")).toBeLessThan(0.5);
  });

  it("layer 5 — warns on similar wording and can be acknowledged by a reviewer", () => {
    const near: Question = {
      ...base,
      questionId: "x-4",
      conceptId: "task",
      learningObjective: "o4",
      thinkingSkill: "apply",
      prompt: "Tại sao thêm câu “Bạn là kỹ sư QA 10 năm kinh nghiệm về máy biến áp” lại giúp kết quả tốt hơn?",
      options: [
        { id: "a", text: "Phương án A khác" },
        { id: "b", text: "Phương án B khác" },
        { id: "c", text: "Phương án C khác" },
      ],
    };
    const flagged = checkCandidate(near, QUESTION_BANKS["ch03-l01"], lessons);
    expect(flagged.some((i) => i.layer === "similarity")).toBe(true);
  });

  it("does not over-claim: different vocabulary, same idea is NOT caught lexically (layer 4 is the guard)", () => {
    const sim = lexicalSimilarity(
      "Vì sao gán vai trò chuyên môn giúp kết quả tốt hơn?",
      "Câu mở đầu “Bạn là kế toán trưởng” có tác dụng gì?",
    );
    expect(sim).toBeLessThan(0.72);
  });
});

describe("adaptive selection", () => {
  it("never serves the same question twice in a session and prefers unseen questions", () => {
    let session = newSession("ch03-l01", 15);
    const rng = createRng(42);
    const served = new Set<string>();
    for (let i = 0; i < 15; i++) {
      const sel = selectNext(bank, session, [], rng);
      expect(sel.kind).toBe("question");
      if (sel.kind !== "question") break;
      expect(served.has(sel.question.questionId)).toBe(false);
      served.add(sel.question.questionId);
      session = applyAnswer(session, sel.question, true, 1).session;
    }
    expect(served.size).toBe(15);
  });

  it("starts at beginner and levels up after two correct answers in a row", () => {
    let session = newSession("ch03-l01", 8);
    const rng = createRng(1);
    const first = selectNext(bank, session, [], rng);
    expect(first.kind === "question" && first.question.difficulty).toBe("beginner");
    if (first.kind !== "question") return;
    session = applyAnswer(session, first.question, true, 1).session;
    const second = selectNext(bank, session, [], rng);
    if (second.kind !== "question") throw new Error("expected question");
    const out = applyAnswer(session, second.question, true, 1);
    expect(out.levelChange).toBe("up");
    expect(out.session.level).toBe("intermediate");
    const third = selectNext(bank, out.session, [], rng);
    expect(third.kind === "question" && third.question.difficulty).toBe("intermediate");
  });

  it("after a wrong answer serves a DIFFERENT question on the same concept or skill", () => {
    let session = newSession("ch03-l01", 8);
    const q = bank.find((x) => x.questionId === "ch03-l01-q02")!; // specificity, understand
    session = { ...session, askedIds: [] };
    const out = applyAnswer(session, q, false, 0);
    expect(out.session.remediation).toEqual({ conceptId: "specificity", thinkingSkill: "understand" });
    const next = selectNext(bank, out.session, [attempt(q, false)], createRng(3));
    expect(next.kind).toBe("question");
    if (next.kind !== "question") return;
    expect(next.reason).toBe("remediation");
    expect(next.question.questionId).not.toBe(q.questionId);
    expect(next.question.conceptId).toBe("specificity");
  });

  it("lowers the level after two wrong answers in a row", () => {
    let session: QuizSession = { ...newSession("ch03-l01", 8), level: "intermediate" };
    session = applyAnswer(session, bank[5], false, 0).session;
    const out = applyAnswer(session, bank[6], false, 0);
    expect(out.levelChange).toBe("down");
    expect(out.session.level).toBe("beginner");
  });

  it("reports an exhausted bank instead of repeating old questions", () => {
    const history = bank.map((q) => attempt(q, true));
    const sel = selectNext(bank, newSession("ch03-l01", 8), history, createRng(9));
    expect(sel.kind).toBe("exhausted");
    expect(bankStatus(bank, history).unseen).toBe(0);
  });

  it("treats an edited copy of a seen question (same fingerprint, new id) as already seen", () => {
    const seen = bank[0];
    const copy = indexQuestion({ ...QUESTION_BANKS["ch03-l01"][0], questionId: "renamed-id" });
    expect(copy.canonicalFingerprint).toBe(seen.canonicalFingerprint);
    expect(unseenQuestions([copy], [attempt(seen, true)])).toEqual([]);
  });

  it("restores a session from persisted JSON (reload) and continues without repeats", () => {
    let session = newSession("ch03-l01", 8);
    const rng = createRng(7);
    const history: AttemptRecord[] = [];
    for (let i = 0; i < 3; i++) {
      const sel = selectNext(bank, session, history, rng);
      if (sel.kind !== "question") throw new Error("expected question");
      history.push(attempt(sel.question, i !== 1, session.sessionId));
      session = applyAnswer(session, sel.question, i !== 1, 1).session;
    }
    const restored = JSON.parse(JSON.stringify({ session, history }));
    const next = selectNext(bank, restored.session, restored.history, createRng(8));
    expect(next.kind).toBe("question");
    if (next.kind === "question") expect(session.askedIds).not.toContain(next.question.questionId);
    expect(restored.session.answers).toHaveLength(3);
  });

  it("completes the session once the target is reached", () => {
    const session = { ...newSession("ch03-l01", 1), answers: [{ questionId: "a", correct: true, score: 1 }] };
    expect(selectNext(bank, session, [], createRng(1)).kind).toBe("complete");
  });

  it("review queue lists only questions whose latest attempt was wrong", () => {
    const [a, b] = bank;
    const queue = reviewQueue(bank, [attempt(a, false), attempt(b, false), attempt(b, true)]);
    expect(queue.map((q) => q.questionId)).toEqual([a.questionId]);
  });
});
