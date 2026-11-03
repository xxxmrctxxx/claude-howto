import type { Chapter } from "@/lib/types/content";
import { course } from "./course";

/**
 * Lightweight, client-safe view of the course built only from the outline in
 * course.ts. Client components import this instead of the registry so that
 * lesson bodies and question banks are not shipped in every page's bundle.
 * Content tests guarantee the outline matches the registered lessons (same
 * ids, slugs and titles), so nothing here can drift silently.
 */

export interface LessonRef {
  id: string;
  chapterId: string;
  chapterSlug: string;
  slug: string;
  title: string;
  href: string;
}

export function getChapterById(id: string): Chapter | undefined {
  return course.chapters.find((c) => c.id === id);
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return course.chapters.find((c) => c.slug === slug);
}

export function lessonHref(lesson: { chapterId: string; slug: string }): string {
  return `/hoc/${getChapterById(lesson.chapterId)?.slug}/${lesson.slug}/`;
}

/** Published lesson ids of a chapter, in outline order. */
export function publishedLessonIds(chapter: Chapter): string[] {
  return chapter.outline.flatMap((o) => (o.lessonId ? [o.lessonId] : []));
}

export const LESSON_REFS: Record<string, LessonRef> = Object.fromEntries(
  course.chapters.flatMap((c) =>
    c.outline.flatMap((o) =>
      o.lessonId ? [[o.lessonId, { id: o.lessonId, chapterId: c.id, chapterSlug: c.slug, slug: o.slug, title: o.title, href: `/hoc/${c.slug}/${o.slug}/` }]] : [],
    ),
  ),
);

/** Published lessons in curriculum order. */
export function publishedLessonRefs(): LessonRef[] {
  return course.chapters.flatMap((c) => publishedLessonIds(c).map((id) => LESSON_REFS[id]));
}

export function totalPlannedLessons(): number {
  return course.chapters.reduce((s, c) => s + c.outline.length, 0);
}

/** Every lesson uses the same 12 section ids (checked by a content test). */
export const SECTION_LABELS: Record<string, string> = {
  "muc-tieu": "Mục tiêu bài học",
  "giai-thich": "Giải thích",
  "hinh-minh-hoa": "Hình minh hoạ",
  "so-do": "Sơ đồ nguyên lý",
  "vi-du": "Ví dụ sai và đúng",
  "mo-phong": "Mô phỏng",
  "tung-buoc": "Hướng dẫn từng bước",
  "bai-tap": "Bài tập thực hành",
  "kiem-tra": "Câu hỏi kiểm tra",
  "giai-thich-dap-an": "Giải thích đáp án",
  "tom-tat": "Tóm tắt",
  "nhiem-vu": "Nhiệm vụ thực tế",
};
