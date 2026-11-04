import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/xay-dung-website";
const LESSONS_CH9 = [
  ["phan-tich-yeu-cau", "ch09-l01"],
  ["thiet-ke-giao-dien", "ch09-l02"],
  ["tao-project", "ch09-l03"],
  ["frontend", "ch09-l04"],
  ["backend", "ch09-l05"],
  ["kiem-thu", "ch09-l06"],
  ["sua-loi", "ch09-l07"],
  ["deploy", "ch09-l08"],
] as const;

for (const [slug] of LESSONS_CH9) {
  test(`chapter 9 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 9 data simulations are solvable as authored (classify, choose, terminal, highlight, sequence)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH9) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  await expect.poll(() => xp(page)).toBe(LESSONS_CH9.length * 15);
});

test("data sim — terminal (tạo project): skeleton committed with .gitignore and CLAUDE.md", async ({ page }) => {
  await open(page, `${BASE}/tao-project/#mo-phong`);
  await solveSim(page, simOf("ch09-l03"));
  const term = page.getByTestId("sim-terminal").getByTestId("terminal");
  await expect(term).toContainText("chore: khoi tao du an");
});
