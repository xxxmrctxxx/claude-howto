import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = ["/", "/hoc/", "/hoc/prompt-engineering/prompt-la-gi/", "/hoc/claude-ai-la-gi/gioi-han-cua-ai/", "/hoc/claude-ai-la-gi/loi-thuong-gap-cua-ai/", "/hoc/claude-ai-la-gi/claude-lam-duoc-gi/", "/hoc/prompt-engineering/giam-hieu-nham/", "/hoc/prompt-engineering/thuc-hanh-toi-uu-prompt/", "/hoc/prompt-engineering/rctco/", "/hoc/claude-code-co-ban/terminal-la-gi/", "/hoc/claude-code-co-ban/cai-dat-claude-code/", "/hoc/claude-code-co-ban/file-va-thu-muc/", "/hoc/claude-code-co-ban/lenh-co-ban/", "/hoc/toi-uu-token/vi-sao-ton-token/", "/hoc/toi-uu-token/tai-lieu-du-an/", "/hoc/toi-uu-token/theo-doi-chi-phi/", "/hoc/claude-code-nang-cao/lap-ke-hoach/", "/hoc/claude-code-nang-cao/git-github/", "/hoc/claude-code-nang-cao/phan-chia-tac-vu/", "/hoc/skills-mcp/khi-nao-dung/", "/hoc/skills-mcp/cai-dat/", "/hoc/skills-mcp/loi-pho-bien/", "/hoc/bat-dau-voi-claude/tim-hieu-giao-dien/", "/hoc/bat-dau-voi-claude/tai-file-hinh-anh/", "/hoc/bat-dau-voi-claude/quan-ly-ngu-canh/", "/hoc/claude-artifacts/tao-website/", "/hoc/claude-artifacts/tao-dashboard/", "/hoc/claude-artifacts/xuat-chia-se/", "/hoc/xay-dung-website/thiet-ke-giao-dien/", "/hoc/xay-dung-website/tao-project/", "/hoc/xay-dung-website/deploy/", "/hoc/ung-dung-thuc-te/dashboard-qa/", "/hoc/ung-dung-thuc-te/xu-ly-pdf/", "/hoc/ung-dung-thuc-te/quan-ly-du-an-ky-thuat/", "/hoc/workflow-tu-dong-hoa/ket-noi-api/", "/hoc/workflow-tu-dong-hoa/tu-dong-kiem-thu/", "/hoc/workflow-tu-dong-hoa/an-toan-phan-quyen/", "/thuc-hanh/", "/thuc-hanh/prompt-builder/", "/thuc-hanh/terminal/", "/thuc-hanh/debug/", "/thuc-hanh/project-builder/", "/thuc-hanh/token/", "/tien-do/", "/kiem-tra-dau-vao/"];

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
