import { expect, test, type Page } from "@playwright/test";
import { LESSONS } from "../src/content/registry";
import type { GenericSim } from "../src/lib/types/content";
import { open } from "./helpers";

const BASE = "/hoc/prompt-engineering";
const SLUGS = ["prompt-la-gi", "cau-truc-prompt-tot", "rctco", "few-shot-prompting", "chain-of-thought", "prompt-co-cau-truc", "giam-hieu-nham", "thuc-hanh-toi-uu-prompt"];

function simOf(lessonId: string): GenericSim {
  const b = LESSONS[lessonId].blocks.find((x) => x.type === "simulation");
  if (b?.type !== "simulation" || !b.sim) throw new Error(`no data sim in ${lessonId}`);
  return b.sim;
}

for (const slug of SLUGS) {
  test(`chapter 3 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

async function solveChoose(page: Page, sim: Extract<GenericSim, { kind: "choose" }>) {
  for (const s of sim.scenarios) await page.getByTestId(`choose-${s.id}-${s.answer}`).click();
  await expect(page.getByTestId("sim-choose")).toContainText("Bạn đã chọn đúng tất cả tình huống");
}

async function solveClassify(page: Page, sim: Extract<GenericSim, { kind: "classify" }>) {
  const w = page.getByTestId("sim-classify");
  for (const it of sim.items) await w.getByLabel(it.text, { exact: true }).selectOption(it.bin);
  await w.getByTestId("sim-check").click();
  await expect(w.getByTestId("sim-result")).toContainText(`Đúng ${sim.items.length}/${sim.items.length}`);
}

test("data sim — choose (cấu trúc prompt) and XP for the simulation", async ({ page }) => {
  await open(page, `${BASE}/cau-truc-prompt-tot/#mo-phong`);
  const sim = simOf("ch03-l02");
  if (sim.kind !== "choose") throw new Error();
  await page.getByTestId(`choose-${sim.scenarios[0].id}-${sim.options.find((o) => o.id !== sim.scenarios[0].answer)!.id}`).click();
  await expect(page.getByTestId("sim-choose")).toContainText("Chưa phù hợp nhất");
  await solveChoose(page, sim);
  await expect.poll(async () => Number(await page.getByTestId("xp-value").textContent())).toBe(15);
});

test("data sim — prompt-lab (RCTCO): starter fails, reference passes", async ({ page }) => {
  await open(page, `${BASE}/rctco/#mo-phong`);
  const sim = simOf("ch03-l03");
  if (sim.kind !== "prompt-lab") throw new Error();
  const w = page.getByTestId("sim-prompt-lab");
  await w.getByTestId("sim-check").click();
  expect(parseInt((await w.getByTestId("sim-result").locator("p").first().textContent())!, 10)).toBeLessThan(80);
  for (const id of ["role", "context", "task", "constraints", "output"] as const) await w.getByTestId(`pl-${id}`).fill(sim.reference[id]);
  await w.getByTestId("sim-check").click();
  expect(parseInt((await w.getByTestId("sim-result").locator("p").first().textContent())!, 10)).toBeGreaterThanOrEqual(80);
});

test("data sim — classify (few-shot, prompt có cấu trúc)", async ({ page }) => {
  for (const [slug, id] of [["few-shot-prompting", "ch03-l04"], ["prompt-co-cau-truc", "ch03-l06"]] as const) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    const sim = simOf(id);
    if (sim.kind !== "classify") throw new Error();
    await solveClassify(page, sim);
  }
});

test("data sim — choose (chain-of-thought)", async ({ page }) => {
  await open(page, `${BASE}/chain-of-thought/#mo-phong`);
  const sim = simOf("ch03-l05");
  if (sim.kind !== "choose") throw new Error();
  await solveChoose(page, sim);
});

test("data sim — highlight (giảm hiểu nhầm): wrong pick is flagged, correct set passes", async ({ page }) => {
  await open(page, `${BASE}/giam-hieu-nham/#mo-phong`);
  const sim = simOf("ch03-l07");
  if (sim.kind !== "highlight") throw new Error();
  const w = page.getByTestId("sim-highlight");
  const wrong = sim.segments.find((s) => !s.target)!;
  await w.getByTestId(`hl-${wrong.id}`).click();
  await w.getByTestId("sim-check").click();
  await expect(w.getByTestId("sim-result")).toContainText("Chưa đúng hết");
  await w.getByTestId(`hl-${wrong.id}`).click();
  for (const s of sim.segments.filter((x) => x.target)) await w.getByTestId(`hl-${s.id}`).click();
  await w.getByTestId("sim-check").click();
  await expect(w.getByTestId("sim-result")).toContainText("Chính xác");
});

test("data sim — sequence (tối ưu prompt) reorders with buttons", async ({ page }) => {
  await open(page, `${BASE}/thuc-hanh-toi-uu-prompt/#mo-phong`);
  const sim = simOf("ch03-l08");
  if (sim.kind !== "sequence") throw new Error();
  const w = page.getByTestId("sim-sequence");
  for (let target = 0; target < sim.items.length; target++) {
    const item = sim.items[target];
    const texts = await w.locator("ol > li > span.flex-1").allTextContents();
    let at = texts.indexOf(item.text);
    while (at > target) {
      await w.getByRole("button", { name: `Đưa lên: ${item.text}` }).click();
      at--;
    }
  }
  await w.getByTestId("sim-check").click();
  await expect(w.getByTestId("sim-result")).toContainText("Đúng thứ tự");
});
