import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/claude-code-nang-cao";
const LESSONS_CH6 = [
  ["quan-ly-context", "ch06-l01"],
  ["lap-ke-hoach", "ch06-l02"],
  ["nhieu-file", "ch06-l03"],
  ["debug", "ch06-l04"],
  ["git-github", "ch06-l05"],
  ["kiem-thu-tu-dong", "ch06-l06"],
  ["refactoring", "ch06-l07"],
  ["code-review", "ch06-l08"],
  ["phan-chia-tac-vu", "ch06-l09"],
] as const;

for (const [slug] of LESSONS_CH6) {
  test(`chapter 6 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 6 data simulations are solvable as authored (choose, sequence, highlight, terminal, classify)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH6) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  await expect.poll(() => xp(page)).toBe(LESSONS_CH6.length * 15);
});

test("data sim — terminal (git và GitHub): branch, commit and log on the simulated repo", async ({ page }) => {
  await open(page, `${BASE}/git-github/#mo-phong`);
  await solveSim(page, simOf("ch06-l05"));
  const term = page.getByTestId("sim-terminal").getByTestId("terminal");
  await expect(term).toContainText("Switched to a new branch 'them-cot-ca'");
  await expect(term).toContainText("(HEAD -> them-cot-ca)");
});
