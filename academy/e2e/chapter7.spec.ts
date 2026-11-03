import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/skills-mcp";
const LESSONS_CH7 = [
  ["skill-la-gi", "ch07-l01"],
  ["mcp-la-gi", "ch07-l02"],
  ["khi-nao-dung", "ch07-l03"],
  ["cai-dat", "ch07-l04"],
  ["cau-hinh", "ch07-l05"],
  ["kiem-tra-ket-noi", "ch07-l06"],
  ["loi-pho-bien", "ch07-l07"],
  ["vi-du-thuc-te", "ch07-l08"],
] as const;

for (const [slug] of LESSONS_CH7) {
  test(`chapter 7 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 7 data simulations are solvable as authored (verify, choose, classify, terminal, highlight, sequence)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH7) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  await expect.poll(() => xp(page)).toBe(LESSONS_CH7.length * 15);
});

test("data sim — terminal (cài skill): SKILL.md gets a closed frontmatter and an instruction", async ({ page }) => {
  await open(page, `${BASE}/cai-dat/#mo-phong`);
  await solveSim(page, simOf("ch07-l04"));
  const term = page.getByTestId("sim-terminal").getByTestId("terminal");
  await expect(term).toContainText("description: Viet bao cao loi theo mau QA.");
  await expect(term).toContainText("1. Tieu de: [Khu vuc] Hien tuong");
});
