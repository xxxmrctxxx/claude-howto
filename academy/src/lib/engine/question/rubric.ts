import type { CriterionResult, RubricCriterion, RuleCheck } from "@/lib/types/content";
import { foldVietnamese } from "@/lib/utils";
import { normalizeText } from "./text";

function hasKeyword(normText: string, keyword: string): boolean {
  const k = normalizeText(keyword);
  if (!k) return false;
  // Match on word boundaries so "ai" does not match inside "sai".
  return ` ${normText} `.includes(` ${k} `);
}

const folded = (raw: string) => foldVietnamese(raw.toLowerCase());

export function runCheck(check: RuleCheck, raw: string): boolean {
  const text = normalizeText(raw);
  switch (check.kind) {
    case "anyKeyword":
      return check.keywords.some((k) => hasKeyword(text, k));
    case "allGroups":
      return check.groups.every((g) => g.some((k) => hasKeyword(text, k)));
    case "noKeyword":
      return !check.keywords.some((k) => hasKeyword(text, k));
    case "minChars":
      return raw.trim().length >= check.value;
    // Regex checks run on lower-cased, diacritic-folded text so a learner
    // typing "toi da" (no accents) passes the same check as "tối đa".
    case "minMatches":
      return (folded(raw).match(new RegExp(foldVietnamese(check.pattern), "gmu")) ?? []).length >= check.value;
    case "regex":
      return new RegExp(foldVietnamese(check.pattern), "mu").test(folded(raw));
  }
}

export interface RubricOutcome {
  score: number;
  passed: boolean;
  details: CriterionResult[];
}

/**
 * Rule-based rubric scoring. Each criterion is a deterministic text check
 * (keywords with diacritics folded, length, regex). This is NOT an AI grader:
 * it can miss valid answers phrased in unexpected words, so the UI always
 * shows the per-criterion reasons and a reference answer.
 */
export function scoreRubric(rubric: RubricCriterion[], answer: string, passScore: number): RubricOutcome {
  const details = rubric.map<CriterionResult>((c) => {
    const passed = runCheck(c.check, answer);
    return { id: c.id, label: c.label, passed, feedback: passed ? c.pass : c.fail, weight: c.weight };
  });
  const total = rubric.reduce((s, c) => s + c.weight, 0) || 1;
  const got = details.reduce((s, d) => s + (d.passed ? d.weight : 0), 0);
  const score = got / total;
  return { score, passed: score >= passScore, details };
}
