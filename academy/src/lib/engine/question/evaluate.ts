import type { EvaluationResult, Question, QuestionResponse } from "@/lib/types/content";
import { scoreRubric } from "./rubric";
import { normalizeText } from "./text";

const RIGHT = "Chính xác!";

function verdict(correct: boolean, partial = false): string {
  if (correct) return RIGHT;
  return partial ? "Đúng một phần — xem chi tiết bên dưới." : "Chưa đúng — xem giải thích để hiểu vì sao.";
}

function mismatch(kind: QuestionResponse["kind"], q: Question): EvaluationResult {
  return {
    correct: false,
    score: 0,
    summary: `Câu trả lời dạng '${kind}' không phù hợp với câu hỏi '${q.questionType}'.`,
    details: [],
    method: "exact",
  };
}

/** Deterministic evaluator for every question type. */
export function evaluate(q: Question, r: QuestionResponse): EvaluationResult {
  switch (q.questionType) {
    case "single-choice":
    case "scenario":
    case "predict-output": {
      if (r.kind !== "choice") return mismatch(r.kind, q);
      const picked = q.options.find((o) => o.id === r.optionId);
      const correct = r.optionId === q.answer;
      return {
        correct,
        score: correct ? 1 : 0,
        summary: verdict(correct),
        details: [],
        optionFeedback: picked?.feedback ? [picked.feedback] : undefined,
        method: "exact",
      };
    }
    case "multiple-choice": {
      if (r.kind !== "multi") return mismatch(r.kind, q);
      const chosen = new Set(r.optionIds);
      const details = q.options.map((o) => {
        const shouldPick = q.answer.includes(o.id);
        const passed = shouldPick === chosen.has(o.id);
        return {
          id: o.id,
          label: o.text,
          passed,
          weight: 1,
          feedback: o.feedback ?? (shouldPick ? "Đây là một đáp án đúng." : "Đây không phải đáp án đúng."),
        };
      });
      const right = details.filter((d) => d.passed).length;
      const correct = right === details.length;
      return {
        correct,
        score: right / details.length,
        summary: verdict(correct, right > 0),
        details,
        method: "exact",
      };
    }
    case "true-false": {
      if (r.kind !== "boolean") return mismatch(r.kind, q);
      const correct = r.value === q.answer;
      return { correct, score: correct ? 1 : 0, summary: verdict(correct), details: [], method: "exact" };
    }
    case "fill-blank": {
      if (r.kind !== "blanks") return mismatch(r.kind, q);
      const details = q.blanks.map((b) => {
        const given = normalizeText(r.values[b.id] ?? "");
        const passed = b.accepted.some((a) => normalizeText(a) === given);
        return {
          id: b.id,
          label: `Ô trống: "${r.values[b.id] ?? ""}"`,
          passed,
          weight: 1,
          feedback: passed ? "Đúng." : `Đáp án chấp nhận: ${b.accepted.join(" / ")}`,
        };
      });
      const right = details.filter((d) => d.passed).length;
      const correct = right === details.length;
      return { correct, score: right / details.length, summary: verdict(correct, right > 0), details, method: "exact" };
    }
    case "ordering": {
      if (r.kind !== "order") return mismatch(r.kind, q);
      const details = q.items.map((item, idx) => {
        const passed = r.ids[idx] === item.id;
        return {
          id: item.id,
          label: `Vị trí ${idx + 1}: ${item.text}`,
          passed,
          weight: 1,
          feedback: passed ? "Đúng vị trí." : "Mục này phải đứng ở vị trí này.",
        };
      });
      const right = details.filter((d) => d.passed).length;
      const correct = right === details.length;
      return { correct, score: right / details.length, summary: verdict(correct, right > 0), details, method: "exact" };
    }
    case "matching": {
      if (r.kind !== "match") return mismatch(r.kind, q);
      const details = q.pairs.map((p) => {
        const passed = r.pairs[p.id] === p.id;
        return {
          id: p.id,
          label: p.left,
          passed,
          weight: 1,
          feedback: passed ? "Ghép đúng." : `Ghép đúng là: ${p.right}`,
        };
      });
      const right = details.filter((d) => d.passed).length;
      const correct = right === details.length;
      return { correct, score: right / details.length, summary: verdict(correct, right > 0), details, method: "exact" };
    }
    case "find-error": {
      if (r.kind !== "segments") return mismatch(r.kind, q);
      const chosen = new Set(r.ids);
      const details = q.segments.map((s) => {
        const passed = s.isError === chosen.has(s.id);
        return {
          id: s.id,
          label: s.text,
          passed,
          weight: 1,
          feedback: s.isError
            ? s.why ?? "Đây là một lỗi."
            : chosen.has(s.id)
              ? "Đoạn này không có lỗi."
              : "Không có lỗi.",
        };
      });
      const errorsFound = q.segments.filter((s) => s.isError && chosen.has(s.id)).length;
      const correct = details.every((d) => d.passed);
      return {
        correct,
        score: details.filter((d) => d.passed).length / details.length,
        summary: verdict(correct, errorsFound > 0),
        details,
        method: "exact",
      };
    }
    case "fix-prompt":
    case "real-task": {
      if (r.kind !== "text") return mismatch(r.kind, q);
      const out = scoreRubric(q.rubric, r.value, q.passScore);
      return {
        correct: out.passed,
        score: out.score,
        summary: out.passed
          ? `Đạt ${Math.round(out.score * 100)}% theo rubric.`
          : `Đạt ${Math.round(out.score * 100)}% — cần ${Math.round(q.passScore * 100)}% để qua.`,
        details: out.details,
        method: "rule-based",
      };
    }
    case "terminal-task": {
      if (r.kind !== "terminal") return mismatch(r.kind, q);
      const details = q.checks.map((c, i) => {
        const passed = r.results.find((x) => x.id === String(i))?.passed ?? false;
        return { id: String(i), label: c.label, passed, weight: 1, feedback: passed ? "Đã hoàn thành." : "Chưa đạt." };
      });
      const right = details.filter((d) => d.passed).length;
      const correct = right === details.length;
      return { correct, score: right / details.length, summary: verdict(correct, right > 0), details, method: "simulation" };
    }
  }
}
