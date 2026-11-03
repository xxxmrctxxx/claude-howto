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
import { questionsCh06L01 } from "./questions/ch06-l01";
import { questionsCh06L02 } from "./questions/ch06-l02";
import { questionsCh06L03 } from "./questions/ch06-l03";
import { questionsCh06L04 } from "./questions/ch06-l04";
import { questionsCh06L05 } from "./questions/ch06-l05";
import { questionsCh06L06 } from "./questions/ch06-l06";
import { questionsCh06L07 } from "./questions/ch06-l07";
import { questionsCh06L08 } from "./questions/ch06-l08";
import { questionsCh06L09 } from "./questions/ch06-l09";
import { questionsCh07L01 } from "./questions/ch07-l01";
import { questionsCh07L02 } from "./questions/ch07-l02";
import { questionsCh07L03 } from "./questions/ch07-l03";
import { questionsCh07L04 } from "./questions/ch07-l04";
import { questionsCh07L05 } from "./questions/ch07-l05";
import { questionsCh07L06 } from "./questions/ch07-l06";
import { questionsCh07L07 } from "./questions/ch07-l07";
import { questionsCh07L08 } from "./questions/ch07-l08";
import { questionsCh02L01 } from "./questions/ch02-l01";
import { questionsCh02L02 } from "./questions/ch02-l02";
import { questionsCh02L03 } from "./questions/ch02-l03";
import { questionsCh02L04 } from "./questions/ch02-l04";
import { questionsCh02L05 } from "./questions/ch02-l05";
import { questionsCh02L06 } from "./questions/ch02-l06";
import { questionsCh02L07 } from "./questions/ch02-l07";
import { questionsCh04L01 } from "./questions/ch04-l01";
import { questionsCh04L02 } from "./questions/ch04-l02";
import { questionsCh04L03 } from "./questions/ch04-l03";
import { questionsCh04L04 } from "./questions/ch04-l04";
import { questionsCh04L05 } from "./questions/ch04-l05";
import { questionsCh04L06 } from "./questions/ch04-l06";
import { questionsCh04L07 } from "./questions/ch04-l07";
import { questionsCh09L01 } from "./questions/ch09-l01";
import { questionsCh09L02 } from "./questions/ch09-l02";
import { questionsCh09L03 } from "./questions/ch09-l03";
import { questionsCh09L04 } from "./questions/ch09-l04";
import { questionsCh09L05 } from "./questions/ch09-l05";
import { questionsCh09L06 } from "./questions/ch09-l06";
import { questionsCh09L07 } from "./questions/ch09-l07";
import { questionsCh09L08 } from "./questions/ch09-l08";
import { questionsCh10L01 } from "./questions/ch10-l01";
import { questionsCh10L02 } from "./questions/ch10-l02";
import { questionsCh10L03 } from "./questions/ch10-l03";
import { questionsCh10L04 } from "./questions/ch10-l04";
import { questionsCh10L05 } from "./questions/ch10-l05";
import { questionsCh10L06 } from "./questions/ch10-l06";
import { questionsCh11L01 } from "./questions/ch11-l01";
import { questionsCh11L02 } from "./questions/ch11-l02";
import { questionsCh11L03 } from "./questions/ch11-l03";
import { questionsCh11L04 } from "./questions/ch11-l04";
import { questionsCh11L05 } from "./questions/ch11-l05";
import { questionsCh11L06 } from "./questions/ch11-l06";
import { questionsCh11L07 } from "./questions/ch11-l07";

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
  "ch06-l01": questionsCh06L01,
  "ch06-l02": questionsCh06L02,
  "ch06-l03": questionsCh06L03,
  "ch06-l04": questionsCh06L04,
  "ch06-l05": questionsCh06L05,
  "ch06-l06": questionsCh06L06,
  "ch06-l07": questionsCh06L07,
  "ch06-l08": questionsCh06L08,
  "ch06-l09": questionsCh06L09,
  "ch07-l01": questionsCh07L01,
  "ch07-l02": questionsCh07L02,
  "ch07-l03": questionsCh07L03,
  "ch07-l04": questionsCh07L04,
  "ch07-l05": questionsCh07L05,
  "ch07-l06": questionsCh07L06,
  "ch07-l07": questionsCh07L07,
  "ch07-l08": questionsCh07L08,
  "ch02-l01": questionsCh02L01,
  "ch02-l02": questionsCh02L02,
  "ch02-l03": questionsCh02L03,
  "ch02-l04": questionsCh02L04,
  "ch02-l05": questionsCh02L05,
  "ch02-l06": questionsCh02L06,
  "ch02-l07": questionsCh02L07,
  "ch04-l01": questionsCh04L01,
  "ch04-l02": questionsCh04L02,
  "ch04-l03": questionsCh04L03,
  "ch04-l04": questionsCh04L04,
  "ch04-l05": questionsCh04L05,
  "ch04-l06": questionsCh04L06,
  "ch04-l07": questionsCh04L07,
  "ch09-l01": questionsCh09L01,
  "ch09-l02": questionsCh09L02,
  "ch09-l03": questionsCh09L03,
  "ch09-l04": questionsCh09L04,
  "ch09-l05": questionsCh09L05,
  "ch09-l06": questionsCh09L06,
  "ch09-l07": questionsCh09L07,
  "ch09-l08": questionsCh09L08,
  "ch10-l01": questionsCh10L01,
  "ch10-l02": questionsCh10L02,
  "ch10-l03": questionsCh10L03,
  "ch10-l04": questionsCh10L04,
  "ch10-l05": questionsCh10L05,
  "ch10-l06": questionsCh10L06,
  "ch11-l01": questionsCh11L01,
  "ch11-l02": questionsCh11L02,
  "ch11-l03": questionsCh11L03,
  "ch11-l04": questionsCh11L04,
  "ch11-l05": questionsCh11L05,
  "ch11-l06": questionsCh11L06,
  "ch11-l07": questionsCh11L07,
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
