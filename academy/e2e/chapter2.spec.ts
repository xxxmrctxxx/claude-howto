import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/bat-dau-voi-claude";
const LESSONS_CH2 = [
  ["tao-tai-khoan", "ch02-l01"],
  ["tim-hieu-giao-dien", "ch02-l02"],
  ["tao-hoi-thoai", "ch02-l03"],
  ["tai-file-hinh-anh", "ch02-l04"],
  ["su-dung-projects", "ch02-l05"],
  ["su-dung-artifacts", "ch02-l06"],
  ["quan-ly-ngu-canh", "ch02-l07"],
] as const;

for (const [slug] of LESSONS_CH2) {
  test(`chapter 2 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 2 data simulations are solvable as authored (choose, verify, classify)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH2) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  await expect.poll(() => xp(page)).toBe(LESSONS_CH2.length * 15);
});
