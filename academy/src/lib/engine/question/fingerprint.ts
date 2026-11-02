import type { IndexedQuestion, Question } from "@/lib/types/content";
import { canonicalStem, hash53, normalizeText } from "./text";

/**
 * The full text a learner reads before answering: the prompt plus the
 * statement / template / situation / source, depending on the type.
 * Used for the normalised-stem and similarity layers.
 */
export function stemText(q: Question): string {
  switch (q.questionType) {
    case "true-false":
      return `${q.prompt} ${q.statement}`;
    case "fill-blank":
      return `${q.prompt} ${q.template.replace(/\[\[[^\]]+\]\]/g, " ")}`;
    case "find-error":
      return `${q.prompt} ${q.segments.map((s) => s.text).join(" ")}`;
    case "fix-prompt":
    case "real-task":
      return `${q.prompt} ${q.source}`;
    case "single-choice":
    case "scenario":
    case "predict-output":
      return `${q.prompt} ${q.context?.content ?? ""}`;
    default:
      return q.prompt;
  }
}

/** Everything that defines what the question asks and what counts as correct. */
function answerSignature(q: Question): string {
  const n = normalizeText;
  switch (q.questionType) {
    case "single-choice":
    case "scenario":
    case "predict-output": {
      const opts = q.options.map((o) => n(o.text)).sort();
      const right = n(q.options.find((o) => o.id === q.answer)?.text ?? "");
      return `${opts.join("~")}=>${right}|${n(q.context?.content ?? "")}`;
    }
    case "multiple-choice": {
      const opts = q.options.map((o) => n(o.text)).sort();
      const right = q.options
        .filter((o) => q.answer.includes(o.id))
        .map((o) => n(o.text))
        .sort();
      return `${opts.join("~")}=>${right.join("~")}`;
    }
    case "true-false":
      return `${canonicalStem(q.statement)}=>${q.answer}`;
    case "fill-blank":
      return `${n(q.template.replace(/\[\[[^\]]+\]\]/g, "_"))}=>${q.blanks
        .map((b) => n(b.accepted[0] ?? ""))
        .join("~")}`;
    case "ordering":
      return q.items.map((i) => n(i.text)).join(">");
    case "matching":
      return q.pairs
        .map((p) => `${n(p.left)}=${n(p.right)}`)
        .sort()
        .join("~");
    case "find-error":
      return q.segments.map((s) => `${s.isError ? "!" : ""}${n(s.text)}`).join("~");
    case "fix-prompt":
    case "real-task":
      return `${n(q.source)}=>${q.rubric.map((r) => r.id).sort().join("~")}`;
    case "terminal-task":
      return `${q.preset}=>${q.checks.map((c) => `${c.kind}:${JSON.stringify(c)}`).sort().join("~")}`;
  }
}

/**
 * Canonical fingerprint (duplicate layer 3). Independent of option order,
 * letter case, diacritics, punctuation and filler words — so reshuffling the
 * answers or re-punctuating a question does not produce a "new" question.
 */
export function computeFingerprint(q: Question): string {
  return hash53(`${q.questionType}#${canonicalStem(stemText(q))}#${answerSignature(q)}`);
}

/** Duplicate layer 4: same concept + same objective + same thinking skill. */
export function semanticKey(q: Question): string {
  return `${q.conceptId}::${q.learningObjective}::${q.thinkingSkill}`;
}

export function indexQuestion(q: Question): IndexedQuestion {
  return {
    ...q,
    canonicalFingerprint: computeFingerprint(q),
    normalizedStem: canonicalStem(stemText(q)),
    semanticKey: semanticKey(q),
  };
}
