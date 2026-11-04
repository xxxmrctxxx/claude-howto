import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/ung-dung-thuc-te";
const LESSONS_CH10 = [
  ["quan-ly-cong-viec", "ch10-l01"],
  ["dashboard-qa", "ch10-l02"],
  ["phan-tich-excel", "ch10-l03"],
  ["xu-ly-pdf", "ch10-l04"],
  ["kiem-tra-loi-hinh-anh", "ch10-l05"],
  ["quan-ly-du-an-ky-thuat", "ch10-l06"],
] as const;

for (const [slug] of LESSONS_CH10) {
  test(`chapter 10 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 10 data simulations are solvable as authored (classify, highlight, verify, choose)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH10) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  await expect.poll(() => xp(page)).toBe(LESSONS_CH10.length * 15);
});
