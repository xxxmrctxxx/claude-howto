import { indexQuestion } from "@/lib/engine/question/fingerprint";
import type { Chapter, IndexedQuestion, Lesson, Question } from "@/lib/types/content";
import { course } from "./course";
import { lessonAiHoatDong } from "./lessons/ch01-l01-ai-hoat-dong";
import { lessonClaudeKhacChatbot } from "./lessons/ch01-l02-claude-khac-chatbot";
import { lessonCacPhienBan } from "./lessons/ch01-l03-cac-phien-ban-claude";
import { lessonClaudeLamDuocGi } from "./lessons/ch01-l04-claude-lam-duoc-gi";
import { lessonGioiHan } from "./lessons/ch01-l05-gioi-han-cua-ai";
import { lessonLoiThuongGap } from "./lessons/ch01-l06-loi-thuong-gap";
import { lessonPromptLaGi } from "./lessons/ch03-l01-prompt-la-gi";
import { lessonCauTrucPrompt } from "./lessons/ch03-l02-cau-truc-prompt-tot";
import { lessonRctco } from "./lessons/ch03-l03-rctco";
import { lessonFewShot } from "./lessons/ch03-l04-few-shot";
import { lessonChainOfThought } from "./lessons/ch03-l05-chain-of-thought";
import { lessonPromptCoCauTruc } from "./lessons/ch03-l06-prompt-co-cau-truc";
import { lessonGiamHieuNham } from "./lessons/ch03-l07-giam-hieu-nham";
import { lessonToiUuPrompt } from "./lessons/ch03-l08-thuc-hanh-toi-uu";
import { questionsCh01L01 } from "./questions/ch01-l01";
import { questionsCh01L02 } from "./questions/ch01-l02";
import { questionsCh01L03 } from "./questions/ch01-l03";
import { questionsCh01L04 } from "./questions/ch01-l04";
import { questionsCh01L05 } from "./questions/ch01-l05";
import { questionsCh01L06 } from "./questions/ch01-l06";
import { questionsCh03L01 } from "./questions/ch03-l01";
import { questionsCh03L02 } from "./questions/ch03-l02";
import { questionsCh03L03 } from "./questions/ch03-l03";
import { questionsCh03L04 } from "./questions/ch03-l04";
import { questionsCh03L05 } from "./questions/ch03-l05";
import { questionsCh03L06 } from "./questions/ch03-l06";
import { questionsCh03L07 } from "./questions/ch03-l07";
import { questionsCh03L08 } from "./questions/ch03-l08";

/**
 * Single place where content is registered. To publish a lesson:
 *   1. add src/content/lessons/<id>.ts and src/content/questions/<id>.ts
 *   2. add both to the maps below
 *   3. set `lessonId` on the matching outline entry in course.ts
 * The UI, search index and tests pick it up automatically.
 */
export const LESSONS: Record<string, Lesson> = Object.fromEntries(
  [lessonAiHoatDong, lessonClaudeKhacChatbot, lessonCacPhienBan, lessonClaudeLamDuocGi, lessonGioiHan, lessonLoiThuongGap, lessonPromptLaGi, lessonCauTrucPrompt, lessonRctco, lessonFewShot, lessonChainOfThought, lessonPromptCoCauTruc, lessonGiamHieuNham, lessonToiUuPrompt].map((l) => [l.id, l]),
);

export const QUESTION_BANKS: Record<string, Question[]> = {
  "ch01-l01": questionsCh01L01,
  "ch01-l02": questionsCh01L02,
  "ch01-l03": questionsCh01L03,
  "ch01-l04": questionsCh01L04,
  "ch01-l05": questionsCh01L05,
  "ch01-l06": questionsCh01L06,
  "ch03-l01": questionsCh03L01,
  "ch03-l02": questionsCh03L02,
  "ch03-l03": questionsCh03L03,
  "ch03-l04": questionsCh03L04,
  "ch03-l05": questionsCh03L05,
  "ch03-l06": questionsCh03L06,
  "ch03-l07": questionsCh03L07,
  "ch03-l08": questionsCh03L08,
};

const indexedCache = new Map<string, IndexedQuestion[]>();

export function bankFor(lessonId: string): IndexedQuestion[] {
  let bank = indexedCache.get(lessonId);
  if (!bank) {
    bank = (QUESTION_BANKS[lessonId] ?? []).map(indexQuestion);
    indexedCache.set(lessonId, bank);
  }
  return bank;
}

export function allQuestions(): Question[] {
  return Object.values(QUESTION_BANKS).flat();
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return course.chapters.find((c) => c.slug === slug);
}

export function getChapterById(id: string): Chapter | undefined {
  return course.chapters.find((c) => c.id === id);
}

export function getLessonBySlugs(chapterSlug: string, lessonSlug: string): Lesson | undefined {
  const chapter = getChapterBySlug(chapterSlug);
  const entry = chapter?.outline.find((o) => o.slug === lessonSlug);
  return entry?.lessonId ? LESSONS[entry.lessonId] : undefined;
}

export function lessonHref(lesson: Pick<Lesson, "chapterId" | "slug">): string {
  const chapter = getChapterById(lesson.chapterId);
  return `/hoc/${chapter?.slug}/${lesson.slug}/`;
}

export function publishedLessonIds(chapter: Chapter): string[] {
  return chapter.outline.flatMap((o) => (o.lessonId && LESSONS[o.lessonId] ? [o.lessonId] : []));
}

/** Published lessons in curriculum order. */
export function publishedLessons(): Lesson[] {
  return course.chapters.flatMap((c) => publishedLessonIds(c).map((id) => LESSONS[id]));
}

export function totalPlannedLessons(): number {
  return course.chapters.reduce((s, c) => s + c.outline.length, 0);
}

export function neighbours(lessonId: string): { prev?: Lesson; next?: Lesson } {
  const list = publishedLessons();
  const i = list.findIndex((l) => l.id === lessonId);
  return { prev: i > 0 ? list[i - 1] : undefined, next: i >= 0 ? list[i + 1] : undefined };
}
