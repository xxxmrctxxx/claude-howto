import { expect, test } from "@playwright/test";
import { open, xp } from "./helpers";
import { simOf, solveSim } from "./sim-helpers";

const BASE = "/hoc/workflow-tu-dong-hoa";
const LESSONS_CH11 = [
  ["ket-noi-api", "ch11-l01"],
  ["xu-ly-du-lieu", "ch11-l02"],
  ["tao-bao-cao", "ch11-l03"],
  ["workflow-nhieu-buoc", "ch11-l04"],
  ["tu-dong-kiem-thu", "ch11-l05"],
  ["ai-agent", "ch11-l06"],
  ["an-toan-phan-quyen", "ch11-l07"],
] as const;

for (const [slug] of LESSONS_CH11) {
  test(`chapter 11 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("chapter 11 data simulations are solvable as authored (verify, highlight, choose, classify, sequence, terminal)", async ({ page }) => {
  for (const [slug, id] of LESSONS_CH11) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    await solveSim(page, simOf(id));
  }
  await expect.poll(() => xp(page)).toBe(LESSONS_CH11.length * 15);
});

test("data sim — terminal (an toàn): settings.json deny rules committed", async ({ page }) => {
  await open(page, `${BASE}/an-toan-phan-quyen/#mo-phong`);
  await solveSim(page, simOf("ch11-l07"));
  const term = page.getByTestId("sim-terminal").getByTestId("terminal");
  await expect(term).toContainText("chore: cau hinh an toan");
});
