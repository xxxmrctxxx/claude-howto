import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/toi-uu-token";
const LESSONS_CH8 = [
  ["token-la-gi", "ch08-l01"],
  ["context-window", "ch08-l02"],
  ["vi-sao-ton-token", "ch08-l03"],
  ["chia-cong-viec", "ch08-l04"],
  ["tai-lieu-du-an", "ch08-l05"],
  ["tranh-doc-file-thua", "ch08-l06"],
  ["so-sanh-phuong-phap", "ch08-l07"],
  ["theo-doi-chi-phi", "ch08-l08"],
] as const;

for (const [slug] of LESSONS_CH8) {
  test(`chapter 8 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 8 data simulations are solvable as authored (classify, verify, highlight, choose)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH8) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  // Every solved simulation awards XP once: 8 × 15.
  await expect.poll(() => xp(page)).toBe(120);
});

test("data sim — highlight (vì sao tốn token): a wrong pick is flagged before the right set passes", async ({ page }) => {
  await open(page, `${BASE}/vi-sao-ton-token/#mo-phong`);
  const sim = simOf("ch08-l03");
  if (sim.kind !== "highlight") throw new Error();
  const w = page.getByTestId("sim-highlight");
  const wrong = sim.segments.find((s) => !s.target)!;
  await w.getByTestId(`hl-${wrong.id}`).click();
  await w.getByTestId("sim-check").click();
  await expect(w.getByTestId("sim-result")).toContainText("Chưa đúng hết");
});
