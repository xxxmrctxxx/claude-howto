import type { IndexedQuestion, Lesson, Question } from "@/lib/types/content";
import { indexQuestion, stemText } from "./fingerprint";
import { lexicalSimilarity } from "./text";

export interface BankIssue {
  layer: "id" | "content" | "fingerprint" | "semantic-key" | "similarity" | "schema";
  questionIds: string[];
  message: string;
}

export interface BankReport {
  questions: IndexedQuestion[];
  errors: BankIssue[];
  warnings: BankIssue[];
}

/** Similarity above this is treated as a duplicate (hard error). */
export const SIMILARITY_ERROR = 0.9;
/** Similarity above this needs human review (warning, can be acknowledged). */
export const SIMILARITY_WARNING = 0.72;

function schemaIssues(q: Question, lesson?: Lesson): string[] {
  const issues: string[] = [];
  if (!q.explanation || q.explanation.trim().length < 20) issues.push("explanation quá ngắn hoặc thiếu");
  if (lesson) {
    if (q.lessonId !== lesson.id) issues.push(`lessonId '${q.lessonId}' không khớp bài '${lesson.id}'`);
    if (!lesson.concepts.some((c) => c.id === q.conceptId)) issues.push(`conceptId '${q.conceptId}' không có trong bài`);
    if (!lesson.objectives.some((o) => o.id === q.learningObjective))
      issues.push(`learningObjective '${q.learningObjective}' không có trong bài`);
  }
  switch (q.questionType) {
    case "single-choice":
    case "scenario":
    case "predict-output":
      if (!q.options.some((o) => o.id === q.answer)) issues.push("đáp án không nằm trong lựa chọn");
      if (new Set(q.options.map((o) => o.id)).size !== q.options.length) issues.push("trùng id lựa chọn");
      if (q.options.length < 3) issues.push("cần ít nhất 3 lựa chọn");
      break;
    case "multiple-choice":
      if (q.answer.length < 2) issues.push("câu nhiều đáp án cần ít nhất 2 đáp án đúng");
      if (!q.answer.every((a) => q.options.some((o) => o.id === a))) issues.push("đáp án không nằm trong lựa chọn");
      break;
    case "fill-blank":
      for (const b of q.blanks) {
        if (!q.template.includes(`[[${b.id}]]`)) issues.push(`thiếu ô trống [[${b.id}]] trong template`);
        if (b.accepted.length === 0) issues.push(`ô ${b.id} không có đáp án chấp nhận`);
      }
      break;
    case "ordering":
      if (q.items.length < 3) issues.push("câu sắp xếp cần ít nhất 3 mục");
      break;
    case "matching":
      if (q.pairs.length < 3) issues.push("câu ghép cặp cần ít nhất 3 cặp");
      break;
    case "find-error":
      if (!q.segments.some((s) => s.isError)) issues.push("không có đoạn lỗi nào");
      if (!q.segments.some((s) => !s.isError)) issues.push("cần có đoạn không lỗi để phân biệt");
      break;
    case "fix-prompt":
    case "real-task": {
      const total = q.rubric.reduce((s, r) => s + r.weight, 0);
      if (q.rubric.length < 3) issues.push("rubric cần ít nhất 3 tiêu chí");
      if (q.passScore <= 0 || q.passScore > 1) issues.push("passScore phải trong (0, 1]");
      if (total <= 0) issues.push("tổng trọng số rubric phải > 0");
      if (!q.referenceAnswer.trim()) issues.push("thiếu đáp án tham khảo");
      break;
    }
    case "terminal-task":
      if (q.checks.length === 0) issues.push("cần ít nhất 1 điều kiện kiểm tra");
      break;
  }
  return issues;
}

/**
 * Multi-layer duplicate check for a question bank:
 *  1. questionId unique
 *  2. canonical (normalised) stem unique within the same question type
 *  3. canonical fingerprint unique (catches reshuffled options / punctuation)
 *  4. concept + learning objective + thinking skill unique (same idea asked twice)
 *  5. lexical similarity — heuristic flag for reworded duplicates
 */
export function validateBank(questions: Question[], lessons: Lesson[] = []): BankReport {
  const errors: BankIssue[] = [];
  const warnings: BankIssue[] = [];
  const indexed = questions.map(indexQuestion);
  const lessonById = new Map(lessons.map((l) => [l.id, l]));

  const seen = {
    id: new Map<string, string>(),
    stem: new Map<string, string>(),
    fp: new Map<string, string>(),
    key: new Map<string, string>(),
  };

  for (const q of indexed) {
    const lesson = lessonById.get(q.lessonId);
    for (const msg of schemaIssues(q, lessons.length ? lesson : undefined)) {
      errors.push({ layer: "schema", questionIds: [q.questionId], message: msg });
    }
    if (lessons.length && !lesson) {
      errors.push({ layer: "schema", questionIds: [q.questionId], message: `bài '${q.lessonId}' không tồn tại` });
    }

    const checks: [keyof typeof seen, string, BankIssue["layer"], string][] = [
      ["id", q.questionId, "id", "Trùng questionId"],
      ["stem", `${q.questionType}|${q.normalizedStem}`, "content", "Trùng nội dung câu hỏi sau chuẩn hoá"],
      ["fp", q.canonicalFingerprint, "fingerprint", "Trùng canonical fingerprint (cùng câu hỏi, chỉ đổi thứ tự/cách viết)"],
      ["key", `${q.lessonId}|${q.semanticKey}`, "semantic-key", "Cùng khái niệm + mục tiêu + dạng tư duy — hỏi lặp cùng một ý"],
    ];
    for (const [bucket, key, layer, message] of checks) {
      const prev = seen[bucket].get(key);
      if (prev !== undefined) errors.push({ layer, questionIds: [prev, q.questionId], message });
      else seen[bucket].set(key, q.questionId);
    }
  }

  for (let i = 0; i < indexed.length; i++) {
    for (let j = i + 1; j < indexed.length; j++) {
      const a = indexed[i];
      const b = indexed[j];
      if (a.questionId === b.questionId) continue;
      const sim = lexicalSimilarity(stemText(a), stemText(b));
      const acknowledged =
        a.reviewedDistinctFrom?.includes(b.questionId) || b.reviewedDistinctFrom?.includes(a.questionId);
      const pct = Math.round(sim * 100);
      if (sim >= SIMILARITY_ERROR && a.questionType === b.questionType) {
        errors.push({
          layer: "similarity",
          questionIds: [a.questionId, b.questionId],
          message: `Câu hỏi gần như giống hệt (độ tương đồng từ vựng ${pct}%)`,
        });
      } else if (sim >= SIMILARITY_WARNING && !acknowledged) {
        warnings.push({
          layer: "similarity",
          questionIds: [a.questionId, b.questionId],
          message: `Có thể trùng ý (độ tương đồng từ vựng ${pct}%) — cần người duyệt`,
        });
      }
    }
  }

  return { questions: indexed, errors, warnings };
}

/**
 * Check a candidate against an existing bank before adding it.
 * Returns the issues that would appear if it were added.
 */
export function checkCandidate(candidate: Question, bank: Question[], lessons: Lesson[] = []): BankIssue[] {
  const report = validateBank([...bank, candidate], lessons);
  return [...report.errors, ...report.warnings].filter((i) => i.questionIds.includes(candidate.questionId));
}
