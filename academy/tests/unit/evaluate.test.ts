import { describe, expect, it } from "vitest";
import { QUESTION_BANKS } from "@/content/registry";
import { evaluate } from "@/lib/engine/question/evaluate";
import { runCheck, scoreRubric } from "@/lib/engine/question/rubric";
import type { Question, RubricQuestion } from "@/lib/types/content";

const byId = (id: string) => QUESTION_BANKS["ch03-l01"].find((q) => q.questionId === id) as Question;

describe("evaluate", () => {
  it("single choice returns option feedback", () => {
    const r = evaluate(byId("ch03-l01-q01"), { kind: "choice", optionId: "c" });
    expect(r.correct).toBe(false);
    expect(r.optionFeedback?.[0]).toMatch(/đầu ra/);
    expect(evaluate(byId("ch03-l01-q01"), { kind: "choice", optionId: "a" }).correct).toBe(true);
  });

  it("multiple choice needs the exact set and gives partial score", () => {
    const q = byId("ch03-l01-q04");
    expect(evaluate(q, { kind: "multi", optionIds: ["a", "b", "e"] }).correct).toBe(true);
    const partial = evaluate(q, { kind: "multi", optionIds: ["a", "c"] });
    expect(partial.correct).toBe(false);
    expect(partial.score).toBeGreaterThan(0);
    expect(partial.score).toBeLessThan(1);
  });

  it("true/false", () => {
    expect(evaluate(byId("ch03-l01-q02"), { kind: "boolean", value: false }).correct).toBe(true);
  });

  it("fill-blank is case and diacritic insensitive", () => {
    const q = byId("ch03-l01-q05");
    expect(evaluate(q, { kind: "blanks", values: { b1: "  NHIỆM VỤ " } }).correct).toBe(true);
    expect(evaluate(q, { kind: "blanks", values: { b1: "nhiem vu" } }).correct).toBe(true);
    expect(evaluate(q, { kind: "blanks", values: { b1: "Output" } }).correct).toBe(false);
  });

  it("ordering and matching", () => {
    const o = byId("ch03-l01-q06");
    expect(evaluate(o, { kind: "order", ids: ["s1", "s2", "s3", "s4", "s5"] }).correct).toBe(true);
    expect(evaluate(o, { kind: "order", ids: ["s2", "s1", "s3", "s4", "s5"] }).score).toBeCloseTo(0.6);
    const m = byId("ch03-l01-q03");
    const ok = { role: "role", context: "context", task: "task", constraints: "constraints", output: "output" };
    expect(evaluate(m, { kind: "match", pairs: ok }).correct).toBe(true);
    expect(evaluate(m, { kind: "match", pairs: { ...ok, role: "task", task: "role" } }).correct).toBe(false);
  });

  it("find-error requires all errors and no false positives", () => {
    const q = byId("ch03-l01-q07");
    expect(evaluate(q, { kind: "segments", ids: ["s3", "s4"] }).correct).toBe(true);
    expect(evaluate(q, { kind: "segments", ids: ["s3"] }).correct).toBe(false);
    expect(evaluate(q, { kind: "segments", ids: ["s3", "s4", "s1"] }).correct).toBe(false);
  });

  it("rejects a response of the wrong kind", () => {
    expect(evaluate(byId("ch03-l01-q01"), { kind: "boolean", value: true }).correct).toBe(false);
  });
});

describe("rule-based rubric", () => {
  const q = byId("ch03-l01-q08") as RubricQuestion;

  it("the reference answer passes its own rubric", () => {
    for (const rq of Object.values(QUESTION_BANKS).flat()) {
      if (rq.questionType === "fix-prompt" || rq.questionType === "real-task") {
        const out = scoreRubric(rq.rubric, rq.referenceAnswer, rq.passScore);
        expect(out.passed, rq.questionId).toBe(true);
      }
    }
  });

  it("the original weak prompt fails", () => {
    const out = evaluate(q, { kind: "text", value: q.source });
    expect(out.correct).toBe(false);
    expect(out.method).toBe("rule-based");
    expect(out.details.filter((d) => !d.passed).length).toBeGreaterThanOrEqual(3);
  });

  it("keywords match whole words with diacritics folded", () => {
    expect(runCheck({ kind: "anyKeyword", keywords: ["bảng"] }, "trình bày dạng BANG 3 cột")).toBe(true);
    expect(runCheck({ kind: "anyKeyword", keywords: ["ai"] }, "câu trả lời sai")).toBe(false);
    expect(runCheck({ kind: "regex", pattern: "toi da \\d+" }, "Tối đa 150 từ")).toBe(true);
  });
});
