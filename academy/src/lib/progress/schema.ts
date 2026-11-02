import type { AttemptRecord, QuizSession } from "@/lib/engine/question/adaptive";

export const STORAGE_KEY = "cha:progress:v1";
export const SCHEMA_VERSION = 1;

export type LessonStatus = "in-progress" | "completed";

export interface LessonProgress {
  status: LessonStatus;
  startedAt: string;
  lastVisitedAt: string;
  completedAt?: string;
  lastSectionId?: string;
  sectionsSeen: string[];
  simulationDone?: boolean;
  exerciseScore?: number;
  missionChecklist?: number[];
  missionNote?: string;
}

export interface LabRecord {
  labId: string;
  itemId: string;
  score: number;
  passed: boolean;
  at: string;
  summary: string;
}

export interface XpEvent {
  /** Idempotency key: the same key never awards XP twice. */
  key: string;
  amount: number;
  reason: string;
  at: string;
}

export interface PlacementResult {
  completedAt: string;
  score: number;
  areaScores: Record<string, number>;
  level: "beginner" | "intermediate" | "advanced";
  recommendedChapterId: string;
}

export interface ProgressState {
  version: typeof SCHEMA_VERSION;
  createdAt: string;
  lessons: Record<string, LessonProgress>;
  attempts: AttemptRecord[];
  sessions: Record<string, QuizSession>;
  labs: LabRecord[];
  /** Free-form per-lab saved state (e.g. Project Builder checklist ticks). */
  labState: Record<string, unknown>;
  xpEvents: XpEvent[];
  badges: Record<string, string>;
  activityDays: string[];
  bookmarks: string[];
  notes: Record<string, { text: string; updatedAt: string }>;
  placement?: PlacementResult;
}

export function emptyState(now = new Date(0)): ProgressState {
  return {
    version: SCHEMA_VERSION,
    createdAt: now.toISOString(),
    lessons: {},
    attempts: [],
    sessions: {},
    labs: [],
    labState: {},
    xpEvents: [],
    badges: {},
    activityDays: [],
    bookmarks: [],
    notes: {},
  };
}

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
const arr = <T>(v: unknown, guard: (x: unknown) => boolean): T[] => (Array.isArray(v) ? (v.filter(guard) as T[]) : []);

/**
 * Parse persisted JSON defensively. Unknown or malformed fields fall back to
 * defaults instead of crashing the app; a non-object payload returns null so
 * the caller can back it up and start fresh.
 */
export function parseState(raw: string | null): ProgressState | null {
  if (raw === null) return emptyState(new Date());
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!isObj(data) || data.version !== SCHEMA_VERSION) return null;
  const base = emptyState(new Date());
  return {
    version: SCHEMA_VERSION,
    createdAt: typeof data.createdAt === "string" ? data.createdAt : base.createdAt,
    lessons: isObj(data.lessons) ? (data.lessons as ProgressState["lessons"]) : {},
    attempts: arr<AttemptRecord>(data.attempts, (a) => isObj(a) && typeof a.questionId === "string"),
    sessions: isObj(data.sessions) ? (data.sessions as ProgressState["sessions"]) : {},
    labs: arr<LabRecord>(data.labs, (l) => isObj(l) && typeof l.labId === "string"),
    labState: isObj(data.labState) ? data.labState : {},
    xpEvents: arr<XpEvent>(data.xpEvents, (x) => isObj(x) && typeof x.key === "string" && typeof x.amount === "number"),
    badges: isObj(data.badges) ? (data.badges as Record<string, string>) : {},
    activityDays: arr<string>(data.activityDays, (d) => typeof d === "string"),
    bookmarks: arr<string>(data.bookmarks, (b) => typeof b === "string"),
    notes: isObj(data.notes) ? (data.notes as ProgressState["notes"]) : {},
    placement: isObj(data.placement) ? (data.placement as unknown as PlacementResult) : undefined,
  };
}
