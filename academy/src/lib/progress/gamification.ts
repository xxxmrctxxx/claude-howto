import type { ProgressState } from "./schema";

export const XP = {
  questionByDifficulty: { beginner: 10, intermediate: 15, advanced: 20 },
  lessonComplete: 50,
  simulation: 15,
  exercise: 25,
  mission: 40,
  labPass: 40,
  placement: 30,
  chapterComplete: 100,
} as const;

/** Cumulative XP needed to reach each level (index = level - 1). */
export const LEVEL_THRESHOLDS = [0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200];
export const LEVEL_TITLES = [
  "Người mới bắt đầu",
  "Học viên tò mò",
  "Người đặt câu hỏi tốt",
  "Thợ viết prompt",
  "Người dùng Claude thành thạo",
  "Kỹ sư prompt",
  "Người làm chủ Claude Code",
  "Kiến trúc sư workflow",
  "Chuyên gia tự động hoá",
  "Bậc thầy Claude",
];

export function totalXp(state: ProgressState): number {
  return state.xpEvents.reduce((s, e) => s + e.amount, 0);
}

export function levelInfo(xp: number) {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
  const current = LEVEL_THRESHOLDS[level - 1];
  const next = LEVEL_THRESHOLDS[level] ?? null;
  return {
    level,
    title: LEVEL_TITLES[level - 1],
    current,
    next,
    progress: next === null ? 100 : ((xp - current) / (next - current)) * 100,
  };
}

/** Consecutive active days ending today (or yesterday, so the streak is not lost before you study today). */
export function computeStreak(days: string[], today: string): number {
  const set = new Set(days);
  const d = new Date(`${today}T12:00:00`);
  if (!set.has(today)) d.setDate(d.getDate() - 1);
  let streak = 0;
  for (;;) {
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    if (!set.has(key)) break;
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

export interface BadgeDef {
  id: string;
  title: string;
  description: string;
  icon: "footprints" | "flame" | "target" | "bug" | "terminal" | "blocks" | "brain" | "compass" | "trophy" | "coins";
  earned: (s: ProgressState, ctx: { streak: number }) => boolean;
}

export const BADGES: BadgeDef[] = [
  {
    id: "first-step",
    title: "Bước chân đầu tiên",
    description: "Hoàn thành bài học đầu tiên.",
    icon: "footprints",
    earned: (s) => Object.values(s.lessons).some((l) => l.status === "completed"),
  },
  {
    id: "compass",
    title: "Biết mình ở đâu",
    description: "Hoàn thành bài kiểm tra trình độ đầu vào.",
    icon: "compass",
    earned: (s) => Boolean(s.placement),
  },
  {
    id: "sharp-mind",
    title: "Đầu óc sắc bén",
    description: "Trả lời đúng 10 câu hỏi (lần đầu).",
    icon: "brain",
    earned: (s) => s.attempts.filter((a) => a.correct && a.firstTime).length >= 10,
  },
  {
    id: "prompt-architect",
    title: "Kiến trúc sư Prompt",
    description: "Đạt từ 80% trong Prompt Builder.",
    icon: "blocks",
    earned: (s) => s.labs.some((l) => l.labId === "prompt-builder" && l.score >= 0.8),
  },
  {
    id: "terminal-explorer",
    title: "Nhà thám hiểm Terminal",
    description: "Hoàn thành một nhiệm vụ trong Terminal Simulator.",
    icon: "terminal",
    earned: (s) => s.labs.some((l) => l.labId === "terminal" && l.passed),
  },
  {
    id: "bug-hunter",
    title: "Thợ săn bug",
    description: "Sửa thành công một Debug Challenge (mọi test đều qua).",
    icon: "bug",
    earned: (s) => s.labs.some((l) => l.labId === "debug" && l.passed),
  },
  {
    id: "token-saver",
    title: "Người tiết kiệm token",
    description: "Hoàn thành phân tích trong Token Optimization Lab.",
    icon: "coins",
    earned: (s) => s.labs.some((l) => l.labId === "token" && l.passed),
  },
  {
    id: "streak-3",
    title: "Chuỗi 3 ngày",
    description: "Học 3 ngày liên tiếp.",
    icon: "flame",
    earned: (_s, ctx) => ctx.streak >= 3,
  },
  {
    id: "persistent",
    title: "Không bỏ cuộc",
    description: "Trả lời đúng một câu ôn tập ngay sau khi trả lời sai cùng khái niệm.",
    icon: "target",
    earned: (s) =>
      s.attempts.some((a, i) => {
        const prev = s.attempts[i - 1];
        return Boolean(prev && !prev.correct && a.correct && prev.conceptId === a.conceptId && prev.sessionId === a.sessionId);
      }),
  },
  {
    id: "chapter-master",
    title: "Hoàn thành một chương",
    description: "Hoàn thành mọi bài đã phát hành của một chương.",
    icon: "trophy",
    earned: (s) => s.xpEvents.some((e) => e.key.startsWith("chapter:")),
  },
];
