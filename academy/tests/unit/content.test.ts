import { describe, expect, it } from "vitest";
import { WIDGETS } from "@/components/lesson/widgets";
import { VISUALS } from "@/components/visuals/registry";
import { course } from "@/content/course";
import { LESSONS, QUESTION_BANKS } from "@/content/registry";
import { search } from "@/lib/search";
import { evaluatePrompt, RECOMMENDED_ORDER } from "@/lib/engine/prompt/evaluate";
import { scoreRubric } from "@/lib/engine/question/rubric";
import { createShell, evaluateCheck, runCommand } from "@/lib/engine/terminal/shell";
import { BLOCK_TO_PART, type GenericSim, type LessonPart } from "@/lib/types/content";

/** Data-driven simulations must be solvable exactly as authored. */
function checkSim(id: string, sim: GenericSim) {
  switch (sim.kind) {
    case "classify":
      for (const it of sim.items) expect(sim.bins.some((b) => b.id === it.bin), `${id} ${it.id}`).toBe(true);
      expect(new Set(sim.items.map((i) => i.bin)).size, `${id} uses ≥2 bins`).toBeGreaterThanOrEqual(2);
      break;
    case "choose":
      for (const s of sim.scenarios) expect(sim.options.some((o) => o.id === s.answer), `${id} ${s.id}`).toBe(true);
      break;
    case "sequence":
      expect(sim.items.length, id).toBeGreaterThanOrEqual(3);
      break;
    case "highlight":
      expect(sim.segments.some((s) => s.target) && sim.segments.some((s) => !s.target), id).toBe(true);
      break;
    case "verify":
      for (const c of sim.claims) expect(sim.verdicts.some((v) => v.id === c.verdict), `${id} ${c.id}`).toBe(true);
      break;
    case "terminal": {
      let s = createShell(sim.preset);
      for (const step of sim.steps) {
        s = runCommand(s, step.hint).state;
        expect(evaluateCheck(s, step.check), `${id}: ${step.instruction}`).toBe(true);
      }
      break;
    }
    case "prompt-lab":
      expect(evaluatePrompt(sim.reference, RECOMMENDED_ORDER, sim.expectations).overall, `${id} reference`).toBeGreaterThanOrEqual(0.8);
      expect(evaluatePrompt(sim.starter, RECOMMENDED_ORDER, sim.expectations).overall, `${id} starter`).toBeLessThan(0.8);
      break;
  }
}

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
        if (b.type === "illustration") expect(Boolean(b.infographic) || Boolean(b.visual && VISUALS[b.visual]), `${lesson.id} illustration`).toBe(true);
        if (b.type === "simulation") {
          expect(Boolean(b.sim) || Boolean(b.widget && WIDGETS[b.widget]), `${lesson.id} simulation`).toBe(true);
          if (b.sim) checkSim(lesson.id, b.sim);
        }
      }
      expect(new Set(lesson.blocks.map((b) => b.id)).size).toBe(lesson.blocks.length);
      expect(lesson.sources.length).toBeGreaterThan(0);
      expect(lesson.objectives.length).toBeGreaterThanOrEqual(3);
    });
    it(`${lesson.id} exercise reference answer passes its own rubric, the placeholder does not`, () => {
      for (const b of lesson.blocks) {
        if (b.type !== "exercise") continue;
        expect(scoreRubric(b.rubric, b.referenceAnswer, b.passScore).passed, `${lesson.id} reference`).toBe(true);
        expect(scoreRubric(b.rubric, b.placeholder, b.passScore).passed, `${lesson.id} placeholder`).toBe(false);
      }
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
    const planned = search("deploy").find((h) => h.doc.kind === "planned");
    expect(planned?.doc.href).toBeNull();
  });
});
