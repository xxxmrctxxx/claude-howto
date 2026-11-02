import { describe, expect, it } from "vitest";
import { DEBUG_CHALLENGES } from "@/content/labs/debug-challenges";
import { PROMPT_SCENARIOS } from "@/content/labs/prompt-scenarios";
import { workflowA, workflowB } from "@/content/labs/token-scenario";
import { PLACEMENT_QUESTIONS, recommend } from "@/content/placement";
import { WORKER_SOURCE, type TestResult } from "@/lib/engine/code/runner";
import { detectBlocks, evaluatePrompt, RECOMMENDED_ORDER } from "@/lib/engine/prompt/evaluate";
import { conversationCost, estimateTokens, illustrativeTokens } from "@/lib/engine/tokens/estimate";

/** Execute the exact worker harness in Node with a fake `self`. */
function runHarness(code: string, tests: { name: string; call: string; expected: unknown }[]): TestResult[] {
  let out: TestResult[] = [];
  const self: { postMessage: (r: TestResult[]) => void; onmessage?: (e: { data: unknown }) => void } = { postMessage: (r) => (out = r) };
  new Function("self", WORKER_SOURCE)(self);
  self.onmessage!({ data: { code, tests } });
  return out;
}

describe("prompt evaluator", () => {
  it("scores the reference prompts ≥ 80% and the starters < 50%", () => {
    for (const s of PROMPT_SCENARIOS) {
      expect(evaluatePrompt(s.reference, RECOMMENDED_ORDER, s.expectations).overall, s.id).toBeGreaterThanOrEqual(0.8);
      expect(evaluatePrompt(s.starter, RECOMMENDED_ORDER, s.expectations).overall, s.id).toBeLessThan(0.5);
    }
  });

  it("flags vague words and a bad block order", () => {
    const s = PROMPT_SCENARIOS[0];
    const vague = { ...s.reference, constraints: `${s.reference.constraints} Viết thật hay.` };
    const clarity = evaluatePrompt(vague, RECOMMENDED_ORDER, s.expectations).criteria.find((c) => c.id === "clarity")!;
    expect(clarity.findings.some((f) => !f.ok && f.text.includes("thật hay"))).toBe(true);
    // The imperative "Hãy …" must NOT be mistaken for the vague word "hay".
    expect(evaluatePrompt(s.reference, RECOMMENDED_ORDER, s.expectations).overall).toBe(1);
    const badOrder = evaluatePrompt(s.reference, ["task", "role", "context", "constraints", "output"], s.expectations);
    expect(badOrder.criteria.find((c) => c.id === "clarity")!.score).toBeLessThan(1);
  });

  it("detects blocks in a free-form prompt", () => {
    const b = detectBlocks("Bạn là kế toán trưởng. Hãy tóm tắt báo cáo thuế quý 3. Tối đa 100 từ. Trình bày dạng bảng 2 cột.");
    expect(b.role).toMatch(/kế toán/);
    expect(b.task).toMatch(/tóm tắt/);
    expect(b.constraints).toMatch(/100 từ/);
    expect(b.output).toMatch(/bảng/);
  });
});

describe("debug challenges (real execution harness)", () => {
  it("buggy code fails at least one test and the solution passes all", () => {
    for (const c of DEBUG_CHALLENGES) {
      expect(runHarness(c.code, c.tests).every((r) => r.passed), `${c.id} buggy`).toBe(false);
      expect(runHarness(c.solution, c.tests).every((r) => r.passed), `${c.id} solution`).toBe(true);
      expect(c.fixOptions.filter((f) => f.correct)).toHaveLength(1);
      expect(c.code.split("\n").length).toBeGreaterThanOrEqual(c.buggyLine);
    }
  });

  it("reports syntax errors per test instead of crashing", () => {
    const r = runHarness("function f( {", [{ name: "t", call: "f()", expected: 1 }]);
    expect(r[0].passed).toBe(false);
    expect(r[0].error).toMatch(/SyntaxError/);
  });
});

describe("token estimates", () => {
  it("estimates are positive and grow with text", () => {
    expect(estimateTokens("")).toBe(0);
    expect(estimateTokens("hello world")).toBeGreaterThan(0);
    expect(estimateTokens("Xin chào các bạn")).toBeGreaterThan(estimateTokens("Xin chao cac ban") - 1);
    expect(illustrativeTokens("Prompt engineering").join("")).toBe("Prompt engineering");
  });

  it("conversation cost re-sends history each turn", () => {
    const c = conversationCost([
      { label: "1", sentChars: 100, replyChars: 100 },
      { label: "2", sentChars: 100, replyChars: 0 },
    ], 1);
    expect(c.perTurn[0].input).toBe(100);
    expect(c.perTurn[1].input).toBe(300);
  });

  it("the targeted workflow is cheaper for any slider setting", () => {
    for (const files of [5, 40, 100]) for (const followUps of [1, 6]) {
      const p = { files, linesPerFile: 50, followUps };
      expect(conversationCost(workflowA(p)).total).toBeGreaterThan(conversationCost(workflowB(p)).total);
    }
  });
});

describe("placement", () => {
  it("has unique ids and valid answers", () => {
    expect(new Set(PLACEMENT_QUESTIONS.map((q) => q.id)).size).toBe(PLACEMENT_QUESTIONS.length);
    for (const q of PLACEMENT_QUESTIONS) expect(q.options.some((o) => o.id === q.answer)).toBe(true);
  });
  it("recommends the first weak area in curriculum order", () => {
    expect(recommend({ "ai-basics": 0.5, prompting: 0 }, 0.2)).toEqual({ level: "beginner", chapter: "ch01" });
    expect(recommend({ "ai-basics": 1, prompting: 0.5, "claude-code": 1, tools: 1, tokens: 1 }, 0.9).chapter).toBe("ch03");
    expect(recommend({ "ai-basics": 1, prompting: 1, "claude-code": 1, tools: 1, tokens: 1 }, 1)).toEqual({ level: "advanced", chapter: "ch06" });
  });
});
