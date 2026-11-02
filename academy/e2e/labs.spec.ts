import { expect, test, type Page } from "@playwright/test";
import { DEBUG_CHALLENGES } from "../src/content/labs/debug-challenges";
import { PROMPT_SCENARIOS } from "../src/content/labs/prompt-scenarios";
import { TOKEN_QUIZ } from "../src/content/labs/token-scenario";
import { open } from "./helpers";

async function type(page: Page, cmd: string) {
  const input = page.getByTestId("terminal-input");
  await input.fill(cmd);
  await input.press("Enter");
}

test("terminal simulator: labelled as simulation, mission 1 completes", async ({ page }) => {
  await open(page, "/thuc-hanh/terminal/");
  await expect(page.getByTestId("terminal")).toContainText("MÔ PHỎNG");
  for (const c of ["pwd", "ls", "cd du-an-qa", "cat du-lieu.csv", "cd .."]) await type(page, c);
  await expect(page.getByTestId("mission-done")).toBeVisible();
  await expect(page.getByTestId("terminal")).toContainText("/home/hocvien");
  await expect(page.getByTestId("terminal")).toContainText("Cong_doan,So_loi");
});

test("terminal simulator: git mission draws the commit graph", async ({ page }) => {
  await open(page, "/thuc-hanh/terminal/");
  await page.getByTestId("mission-git-dau-tien").click();
  await type(page, "git status");
  await expect(page.getByTestId("terminal")).toContainText("not a git repository");
  for (const c of ["git init", "git status", "git add .", 'git commit -m "Khoi tao"', "git log --oneline"]) await type(page, c);
  await expect(page.getByTestId("mission-done")).toBeVisible();
  await expect(page.getByTestId("git-graph").locator("circle")).toHaveCount(1);
  await expect(page.getByTestId("terminal")).toContainText("(HEAD -> main) Khoi tao");
  // History navigation with the arrow key
  await page.getByTestId("terminal-input").press("ArrowUp");
  await expect(page.getByTestId("terminal-input")).toHaveValue("git log --oneline");
});

test("prompt builder: weak starter fails, reference in the right order passes", async ({ page }) => {
  await open(page, "/thuc-hanh/prompt-builder/");
  await page.getByTestId("pb-evaluate").click();
  const score = page.getByTestId("pb-score");
  await expect(score).toBeVisible();
  expect(parseInt((await score.textContent())!, 10)).toBeLessThan(50);
  const ref = PROMPT_SCENARIOS[0].reference;
  for (const id of ["role", "context", "task", "constraints", "output"] as const) await page.getByTestId(`block-${id}`).fill(ref[id]);
  // Starter order is task, context, role… → reorder to role, context, task.
  await page.getByRole("button", { name: "Đưa khối Role lên" }).click();
  await page.getByRole("button", { name: "Đưa khối Role lên" }).click();
  await page.getByRole("button", { name: "Đưa khối Context lên" }).click();
  await page.getByTestId("pb-evaluate").click();
  await expect(score).toHaveText("100%");
});

test("debug challenge: find line, choose fix, edit in Monaco, run real tests", async ({ page }) => {
  const ch = DEBUG_CHALLENGES[0];
  await open(page, "/thuc-hanh/debug/");
  await page.getByTestId(`code-line-${ch.buggyLine}`).click();
  await expect(page.getByText(ch.lineFeedback)).toBeVisible();
  await page.getByRole("radio", { name: ch.fixOptions.find((f) => f.correct)!.text }).click();
  await page.getByTestId("debug-run").click();
  await expect(page.getByTestId("debug-results")).toContainText("Mong đợi 2.5, nhận được 0.25");
  await expect(page.locator('[data-editor-ready="true"]')).toBeVisible({ timeout: 20_000 });
  await page.evaluate((code) => {
    (window as unknown as { monaco: { editor: { getModels(): { setValue(v: string): void }[] } } }).monaco.editor.getModels()[0].setValue(code);
  }, ch.solution);
  await page.getByTestId("debug-run").click();
  await expect(page.getByTestId("debug-pass")).toBeVisible();
});

test("debug runner stops an infinite loop with a timeout", async ({ page }) => {
  await open(page, "/thuc-hanh/debug/");
  await expect(page.locator('[data-editor-ready="true"]')).toBeVisible({ timeout: 20_000 });
  await page.evaluate(() => {
    (window as unknown as { monaco: { editor: { getModels(): { setValue(v: string): void }[] } } }).monaco.editor.getModels()[0].setValue("function tyLeLoi(){ while(true){} }");
  });
  await page.getByTestId("debug-run").click();
  await expect(page.getByTestId("debug-results")).toContainText("Hết thời gian", { timeout: 10_000 });
});

test("project builder: structural checks on pasted HTML", async ({ page }) => {
  await open(page, "/thuc-hanh/project-builder/");
  await page.getByTestId("project-step-khung").click();
  await page.getByTestId("project-html").fill("<div>chưa có form</div>");
  await page.getByTestId("project-check").click();
  await expect(page.getByTestId("project-results")).toContainText("Tìm thấy 0");
  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head><body>
  <form><input type="date"><input><input><input><select><option>Nhẹ</option><option>Trung bình</option><option>Nghiêm trọng</option></select><button>Thêm lỗi</button></form>
  <table><tr><th>Ngày</th><th>Mã máy</th><th>Công đoạn</th><th>Loại lỗi</th><th>Mức độ</th></tr></table></body></html>`;
  await page.getByTestId("project-html").fill(html);
  await page.getByTestId("project-check").click();
  await expect(page.getByTestId("project-results").locator('[aria-label="chưa đạt"]')).toHaveCount(0);
});

test("token lab: sliders change the simulated totals; conclusion quiz passes", async ({ page }) => {
  await open(page, "/thuc-hanh/token/");
  const before = await page.getByTestId("token-total-a").textContent();
  await page.getByTestId("tok-files").fill("100");
  await expect(page.getByTestId("token-total-a")).not.toHaveText(before!);
  await page.getByTestId("token-text").fill("Xin chào");
  await expect(page.getByTestId("token-estimate")).toContainText("token");
  for (const q of TOKEN_QUIZ) await page.getByLabel(q.options.find((o) => o.correct)!.text).check();
  await page.getByTestId("token-submit").click();
  await expect(page.getByTestId("token-pass")).toBeVisible();
});
