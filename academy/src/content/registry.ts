import { indexQuestion } from "@/lib/engine/question/fingerprint";
import type { IndexedQuestion, Lesson, Question } from "@/lib/types/content";
import { getChapterById, getChapterBySlug, lessonHref, publishedLessonIds, totalPlannedLessons } from "./catalog";
import { course } from "./course";
import { LESSONS } from "./lesson-registry";

export { getChapterById, getChapterBySlug, lessonHref, LESSONS, publishedLessonIds, totalPlannedLessons };
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
import { questionsCh05L01 } from "./questions/ch05-l01";
import { questionsCh05L02 } from "./questions/ch05-l02";
import { questionsCh05L03 } from "./questions/ch05-l03";
import { questionsCh05L04 } from "./questions/ch05-l04";
import { questionsCh05L05 } from "./questions/ch05-l05";
import { questionsCh05L06 } from "./questions/ch05-l06";
import { questionsCh05L07 } from "./questions/ch05-l07";
import { questionsCh05L08 } from "./questions/ch05-l08";
import { questionsCh05L09 } from "./questions/ch05-l09";
import { questionsCh08L01 } from "./questions/ch08-l01";
import { questionsCh08L02 } from "./questions/ch08-l02";
import { questionsCh08L03 } from "./questions/ch08-l03";
import { questionsCh08L04 } from "./questions/ch08-l04";
import { questionsCh08L05 } from "./questions/ch08-l05";
import { questionsCh08L06 } from "./questions/ch08-l06";
import { questionsCh08L07 } from "./questions/ch08-l07";
import { questionsCh08L08 } from "./questions/ch08-l08";

/**
 * Single place where content is registered. To publish a lesson:
 *   1. add src/content/lessons/<id>.ts and src/content/questions/<id>.ts
 *   2. add the lesson to LESSONS in lesson-registry.ts and the bank to QUESTION_BANKS below
 *   3. set `lessonId` on the matching outline entry in course.ts
 * The UI, search index and tests pick it up automatically.
 */

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
  "ch05-l01": questionsCh05L01,
  "ch05-l02": questionsCh05L02,
  "ch05-l03": questionsCh05L03,
  "ch05-l04": questionsCh05L04,
  "ch05-l05": questionsCh05L05,
  "ch05-l06": questionsCh05L06,
  "ch05-l07": questionsCh05L07,
  "ch05-l08": questionsCh05L08,
  "ch05-l09": questionsCh05L09,
  "ch08-l01": questionsCh08L01,
  "ch08-l02": questionsCh08L02,
  "ch08-l03": questionsCh08L03,
  "ch08-l04": questionsCh08L04,
  "ch08-l05": questionsCh08L05,
  "ch08-l06": questionsCh08L06,
  "ch08-l07": questionsCh08L07,
  "ch08-l08": questionsCh08L08,
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

export function getLessonBySlugs(chapterSlug: string, lessonSlug: string): Lesson | undefined {
  const chapter = getChapterBySlug(chapterSlug);
  const entry = chapter?.outline.find((o) => o.slug === lessonSlug);
  return entry?.lessonId ? LESSONS[entry.lessonId] : undefined;
}

/** Published lessons in curriculum order. */
export function publishedLessons(): Lesson[] {
  return course.chapters.flatMap((c) => publishedLessonIds(c).map((id) => LESSONS[id]));
}

export function neighbours(lessonId: string): { prev?: Lesson; next?: Lesson } {
  const list = publishedLessons();
  const i = list.findIndex((l) => l.id === lessonId);
  return { prev: i > 0 ? list[i - 1] : undefined, next: i >= 0 ? list[i + 1] : undefined };
}
