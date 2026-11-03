import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = ["/", "/hoc/", "/hoc/prompt-engineering/prompt-la-gi/", "/hoc/claude-ai-la-gi/gioi-han-cua-ai/", "/hoc/claude-ai-la-gi/loi-thuong-gap-cua-ai/", "/hoc/claude-ai-la-gi/claude-lam-duoc-gi/", "/hoc/prompt-engineering/giam-hieu-nham/", "/hoc/prompt-engineering/thuc-hanh-toi-uu-prompt/", "/hoc/prompt-engineering/rctco/", "/thuc-hanh/", "/thuc-hanh/prompt-builder/", "/thuc-hanh/terminal/", "/thuc-hanh/debug/", "/thuc-hanh/project-builder/", "/thuc-hanh/token/", "/tien-do/", "/kiem-tra-dau-vao/"];

for (const theme of ["light", "dark"] as const) {
  for (const path of PAGES) {
    test(`axe (${theme}): ${path}`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme });
      await page.goto(path);
      await page.waitForTimeout(600);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).exclude(".monaco-editor").analyze();
      const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
      expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 3).join(" | ")}`)).toEqual([]);
    });
  }
}
