/**
 * Content schema for Claude HowTo Academy.
 *
 * Content (lessons, questions, labs) is plain typed data. UI components only
 * render these shapes, so a new lesson is added by writing data files and
 * registering them in src/content/registry.ts — no UI code changes.
 */

export type Difficulty = "beginner" | "intermediate" | "advanced";

/** Bloom-style thinking skill ("dạng tư duy") used by the duplicate check. */
export type ThinkingSkill = "remember" | "understand" | "apply" | "analyze" | "evaluate" | "create";

export interface Course {
  id: string;
  title: string;
  tagline: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  number: number;
  slug: string;
  title: string;
  summary: string;
  icon: IconName;
  audience: string;
  estimatedMinutes: number;
  /** Syllabus outline. A lesson with `lessonId` is published; others are planned. */
  outline: LessonOutline[];
}

export interface LessonOutline {
  title: string;
  slug: string;
  lessonId?: string;
}

export interface LearningObjective {
  id: string;
  text: string;
}

export interface Lesson {
  id: string;
  chapterId: string;
  slug: string;
  title: string;
  subtitle: string;
  level: Difficulty;
  estimatedMinutes: number;
  updatedAt: string;
  objectives: LearningObjective[];
  /** Concepts taught; question conceptIds must come from this list. */
  concepts: { id: string; label: string }[];
  blocks: LessonBlock[];
  /** Optional curated hints for the right-hand "Gợi ý" panel. */
  hints?: string[];
  /** Official / repository references used to verify the content. */
  sources: { label: string; href: string }[];
}

export type IconName =
  | "sparkles"
  | "rocket"
  | "message"
  | "layout"
  | "terminal"
  | "wrench"
  | "plug"
  | "coins"
  | "globe"
  | "boxes"
  | "workflow"
  | "graduation";

/* ----------------------------- Lesson blocks ----------------------------- */

/** The 12 mandatory parts of a fully published lesson (see CONTENT_GUIDELINES.md). */
export type LessonPart =
  | "objectives"
  | "explain"
  | "illustration"
  | "diagram"
  | "compare"
  | "simulation"
  | "steps"
  | "exercise"
  | "quiz"
  | "answers"
  | "summary"
  | "mission";

interface BlockBase {
  id: string;
  title: string;
}

export interface ObjectivesBlock extends BlockBase {
  type: "objectives";
}

export interface ExplainBlock extends BlockBase {
  type: "explain";
  paragraphs: string[];
  analogy?: { title: string; text: string };
  terms?: { term: string; definition: string }[];
}

export interface IllustrationBlock extends BlockBase {
  type: "illustration";
  visual: VisualId;
  caption: string;
}

export interface DiagramBlock extends BlockBase {
  type: "diagram";
  mermaid: string;
  caption: string;
  /** Text alternative for screen readers. */
  alt: string;
}

export interface CompareBlock extends BlockBase {
  type: "compare";
  bad: { label: string; content: string; notes: string[] };
  good: { label: string; content: string; notes: string[] };
  takeaway: string;
}

export interface SimulationBlock extends BlockBase {
  type: "simulation";
  widget: WidgetId;
  intro: string;
}

export interface StepsBlock extends BlockBase {
  type: "steps";
  steps: { title: string; detail: string; code?: { lang: string; content: string } }[];
}

export interface ExerciseBlock extends BlockBase {
  type: "exercise";
  instructions: string;
  sampleData?: { name: string; content: string };
  placeholder: string;
  rubric: RubricCriterion[];
  passScore: number;
  referenceAnswer: string;
}

export interface QuizBlock extends BlockBase {
  type: "quiz";
  questionsPerSession: number;
}

export interface AnswersBlock extends BlockBase {
  type: "answers";
}

export interface SummaryBlock extends BlockBase {
  type: "summary";
  points: string[];
}

export interface MissionBlock extends BlockBase {
  type: "mission";
  context: string;
  tasks: string[];
  deliverable: string;
  checklist: string[];
}

export type LessonBlock =
  | ObjectivesBlock
  | ExplainBlock
  | IllustrationBlock
  | DiagramBlock
  | CompareBlock
  | SimulationBlock
  | StepsBlock
  | ExerciseBlock
  | QuizBlock
  | AnswersBlock
  | SummaryBlock
  | MissionBlock;

export const BLOCK_TO_PART: Record<LessonBlock["type"], LessonPart> = {
  objectives: "objectives",
  explain: "explain",
  illustration: "illustration",
  diagram: "diagram",
  compare: "compare",
  simulation: "simulation",
  steps: "steps",
  exercise: "exercise",
  quiz: "quiz",
  answers: "answers",
  summary: "summary",
  mission: "mission",
};

/** Registered SVG infographics (src/components/visuals/registry.tsx). */
export type VisualId =
  | "prompt-anatomy"
  | "prompt-delegation"
  | "ai-prediction"
  | "chatbot-vs-claude"
  | "model-tiers"
  | "capability-map"
  | "ai-limits"
  | "ai-error-types";

/** Registered interactive widgets (src/components/lesson/widgets.tsx). */
export type WidgetId =
  | "prompt-assembler"
  | "next-word"
  | "bot-compare"
  | "model-picker"
  | "capability-sorter"
  | "context-window"
  | "fact-checker";

/* --------------------------- Rubric (rule-based) -------------------------- */

export type RuleCheck =
  | { kind: "anyKeyword"; keywords: string[] }
  | { kind: "allGroups"; groups: string[][] }
  | { kind: "minChars"; value: number }
  | { kind: "minMatches"; pattern: string; value: number }
  | { kind: "regex"; pattern: string }
  | { kind: "noKeyword"; keywords: string[] };

export interface RubricCriterion {
  id: string;
  label: string;
  weight: number;
  check: RuleCheck;
  pass: string;
  fail: string;
}

/* ------------------------------- Questions ------------------------------- */

export type QuestionType =
  | "single-choice"
  | "multiple-choice"
  | "true-false"
  | "fill-blank"
  | "ordering"
  | "matching"
  | "find-error"
  | "fix-prompt"
  | "predict-output"
  | "terminal-task"
  | "scenario"
  | "real-task";

export interface ChoiceOption {
  id: string;
  text: string;
  /** Feedback shown when this option is picked (why it is right or wrong). */
  feedback?: string;
}

interface QuestionCommon {
  questionId: string;
  lessonId: string;
  conceptId: string;
  difficulty: Difficulty;
  thinkingSkill: ThinkingSkill;
  /** Id of a LearningObjective of the lesson. */
  learningObjective: string;
  prompt: string;
  explanation: string;
  hint?: string;
  /**
   * Question ids a human reviewer confirmed are NOT duplicates even though the
   * lexical similarity check flags them. Suppresses that warning only.
   */
  reviewedDistinctFrom?: string[];
}

export interface SingleChoiceQuestion extends QuestionCommon {
  questionType: "single-choice" | "scenario" | "predict-output";
  /** Optional code / prompt / situation shown above the options. */
  context?: { label: string; content: string; lang?: string };
  options: ChoiceOption[];
  answer: string;
}

export interface MultipleChoiceQuestion extends QuestionCommon {
  questionType: "multiple-choice";
  options: ChoiceOption[];
  answer: string[];
}

export interface TrueFalseQuestion extends QuestionCommon {
  questionType: "true-false";
  statement: string;
  answer: boolean;
}

export interface FillBlankQuestion extends QuestionCommon {
  questionType: "fill-blank";
  /** Text with blanks written as [[blankId]]. */
  template: string;
  blanks: { id: string; accepted: string[]; width?: number }[];
}

export interface OrderingQuestion extends QuestionCommon {
  questionType: "ordering";
  /** Items in the CORRECT order; the UI shuffles them. */
  items: { id: string; text: string }[];
}

export interface MatchingQuestion extends QuestionCommon {
  questionType: "matching";
  pairs: { id: string; left: string; right: string }[];
}

export interface FindErrorQuestion extends QuestionCommon {
  questionType: "find-error";
  segments: { id: string; text: string; isError: boolean; why?: string }[];
}

export interface RubricQuestion extends QuestionCommon {
  questionType: "fix-prompt" | "real-task";
  /** For fix-prompt: the weak prompt to rewrite. For real-task: the brief. */
  source: string;
  sampleData?: { name: string; content: string };
  rubric: RubricCriterion[];
  passScore: number;
  referenceAnswer: string;
}

export type TerminalCheck =
  | { kind: "cwd"; path: string; label: string }
  | { kind: "dir"; path: string; label: string }
  | { kind: "file"; path: string; label: string; contains?: string }
  | { kind: "gitInitialized"; path: string; label: string }
  | { kind: "commitCount"; path: string; min: number; label: string }
  | { kind: "cleanTree"; path: string; label: string }
  | { kind: "usedCommand"; command: string; label: string }
  | { kind: "lastCommand"; command: string; label: string }
  | { kind: "gitState"; path: string; label: string; head?: string; stagedMin?: number; unstagedMin?: number };

export interface TerminalTaskQuestion extends QuestionCommon {
  questionType: "terminal-task";
  preset: string;
  checks: TerminalCheck[];
  referenceCommands: string[];
}

export type Question =
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | OrderingQuestion
  | MatchingQuestion
  | FindErrorQuestion
  | RubricQuestion
  | TerminalTaskQuestion;

/** A question after the engine computed its canonical fingerprint. */
export type IndexedQuestion = Question & {
  canonicalFingerprint: string;
  normalizedStem: string;
  semanticKey: string;
};

/* ------------------------------- Responses ------------------------------- */

export type QuestionResponse =
  | { kind: "choice"; optionId: string }
  | { kind: "multi"; optionIds: string[] }
  | { kind: "boolean"; value: boolean }
  | { kind: "blanks"; values: Record<string, string> }
  | { kind: "order"; ids: string[] }
  | { kind: "match"; pairs: Record<string, string> }
  | { kind: "segments"; ids: string[] }
  | { kind: "text"; value: string }
  | { kind: "terminal"; results: { id: string; passed: boolean }[] };

export interface CriterionResult {
  id: string;
  label: string;
  passed: boolean;
  feedback: string;
  weight: number;
}

export interface EvaluationResult {
  correct: boolean;
  /** 0..1 */
  score: number;
  /** Short verdict line. */
  summary: string;
  /** Per-part feedback (rubric criteria, wrong blanks, misplaced items...). */
  details: CriterionResult[];
  /** Feedback of the picked option(s), when the question defines one. */
  optionFeedback?: string[];
  method: "exact" | "rule-based" | "simulation";
}
