import { describe, expect, it } from "vitest";
import { WIDGETS } from "@/components/lesson/widgets";
import { VISUALS } from "@/components/visuals/registry";
import { course } from "@/content/course";
import { LESSONS, QUESTION_BANKS } from "@/content/registry";
import { search } from "@/lib/search";
import { BLOCK_TO_PART, type LessonPart } from "@/lib/types/content";

const REQUIRED: LessonPart[] = ["objectives", "explain", "illustration", "diagram", "compare", "simulation", "steps", "exercise", "quiz", "answers", "summary", "mission"];

describe("course structure", () => {
  it("has at least 12 chapters in order", () => {
    expect(course.chapters.length).toBeGreaterThanOrEqual(12);
    course.chapters.forEach((c, i) => expect(c.number).toBe(i + 1));
  });

  it("every outline lessonId resolves to a registered lesson in the right chapter", () => {
    for (const c of course.chapters)
      for (const o of c.outline)
        if (o.lessonId) {
          expect(LESSONS[o.lessonId], o.lessonId).toBeDefined();
          expect(LESSONS[o.lessonId].chapterId).toBe(c.id);
          expect(LESSONS[o.lessonId].slug).toBe(o.slug);
        }
  });

  it("slugs are unique within each chapter", () => {
    for (const c of course.chapters) expect(new Set(c.outline.map((o) => o.slug)).size).toBe(c.outline.length);
  });
});

describe("published lessons are complete (no placeholders)", () => {
  for (const lesson of Object.values(LESSONS)) {
    it(`${lesson.id} has all 12 parts`, () => {
      const parts = new Set(lesson.blocks.map((b) => BLOCK_TO_PART[b.type]));
      for (const p of REQUIRED) expect(parts.has(p), `${lesson.id} missing ${p}`).toBe(true);
    });
    it(`${lesson.id} visuals and widgets exist; ids unique; sources present`, () => {
      for (const b of lesson.blocks) {
        if (b.type === "illustration") expect(VISUALS[b.visual], b.visual).toBeDefined();
        if (b.type === "simulation") expect(WIDGETS[b.widget], b.widget).toBeDefined();
      }
      expect(new Set(lesson.blocks.map((b) => b.id)).size).toBe(lesson.blocks.length);
      expect(lesson.sources.length).toBeGreaterThan(0);
      expect(lesson.objectives.length).toBeGreaterThanOrEqual(3);
    });
    it(`${lesson.id} every objective and concept is exercised by at least one question`, () => {
      const qs = QUESTION_BANKS[lesson.id];
      for (const o of lesson.objectives) expect(qs.some((q) => q.learningObjective === o.id), o.id).toBe(true);
    });
  }
});

describe("search", () => {
  it("is diacritic-insensitive and finds lessons, terms and labs", () => {
    expect(search("prompt la gi")[0].doc.title).toBe("Prompt là gì?");
    expect(search("constraints").some((h) => h.doc.kind === "term")).toBe(true);
    expect(search("terminal").some((h) => h.doc.kind === "lab")).toBe(true);
    expect(search("zzzz-khong-co")).toEqual([]);
  });
  it("planned lessons are findable but have no link", () => {
    const planned = search("few-shot").find((h) => h.doc.kind === "planned");
    expect(planned?.doc.href).toBeNull();
  });
});
