import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/du-an-tot-nghiep";
const LESSONS_CH12 = [
  ["chon-du-an", "ch12-l01"],
  ["viet-yeu-cau", "ch12-l02"],
  ["tao-ke-hoach", "ch12-l03"],
  ["trien-khai", "ch12-l04"],
  ["kiem-thu", "ch12-l05"],
  ["toi-uu", "ch12-l06"],
  ["danh-gia-ket-qua", "ch12-l07"],
] as const;

for (const [slug] of LESSONS_CH12) {
  test(`chapter 12 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 12 data simulations are solvable as authored (classify, highlight, sequence, choose)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH12) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  await expect.poll(() => xp(page)).toBe(LESSONS_CH12.length * 15);
});
