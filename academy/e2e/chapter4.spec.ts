import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/claude-artifacts";
const LESSONS_CH4 = [
  ["artifacts-la-gi", "ch04-l01"],
  ["tao-website", "ch04-l02"],
  ["tao-ung-dung-tuong-tac", "ch04-l03"],
  ["tao-bieu-do", "ch04-l04"],
  ["tao-dashboard", "ch04-l05"],
  ["chinh-sua-kiem-tra", "ch04-l06"],
  ["xuat-chia-se", "ch04-l07"],
] as const;

for (const [slug] of LESSONS_CH4) {
  test(`chapter 4 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 4 data simulations are solvable as authored (choose, highlight, classify, verify, sequence)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH4) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  await expect.poll(() => xp(page)).toBe(LESSONS_CH4.length * 15);
});
