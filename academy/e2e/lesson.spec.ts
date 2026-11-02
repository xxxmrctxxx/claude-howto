import { expect, test } from "@playwright/test";
import { ASSEMBLER_SNIPPETS } from "../src/content/widgets/prompt-assembler";
import { lessonPromptLaGi } from "../src/content/lessons/ch03-l01-prompt-la-gi";
import { LESSON_URL, open, xp } from "./helpers";

test("lesson renders all 12 parts with infographic and Mermaid diagram", async ({ page }) => {
  await open(page, LESSON_URL);
  await expect(page.getByTestId("lesson-title")).toHaveText("Prompt là gì?");
  await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
  await expect(page.getByTestId("prompt-anatomy")).toBeVisible();
  await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
});

test("prompt assembler simulation (tap-to-place) gives analysis and XP", async ({ page }) => {
  await open(page, `${LESSON_URL}#mo-phong`);
  const w = page.getByTestId("prompt-assembler");
  for (const s of ASSEMBLER_SNIPPETS.filter((x) => x.belongsTo)) {
    await w.getByRole("button", { name: `Chọn mảnh: ${s.text}` }).click();
    await w.getByTestId(`place-${s.belongsTo}`).click();
  }
  await w.getByTestId("assembler-check").click();
  await expect(w.getByTestId("assembler-result")).toContainText("Tuyệt vời");
  await expect(w).toContainText("Phân tích so sánh");
  await expect.poll(() => xp(page)).toBe(15);
});

test("assembler shows targeted feedback when a snippet is misplaced", async ({ page }) => {
  await open(page, `${LESSON_URL}#mo-phong`);
  const w = page.getByTestId("prompt-assembler");
  const distractor = ASSEMBLER_SNIPPETS.find((s) => !s.belongsTo)!;
  await w.getByRole("button", { name: `Chọn mảnh: ${distractor.text}` }).click();
  await w.getByTestId("place-role").click();
  await w.getByTestId("assembler-check").click();
  await expect(w.getByTestId("assembler-result")).toContainText(distractor.explain.slice(0, 20));
});

test("exercise is graded by rubric with reference answer", async ({ page }) => {
  await open(page, `${LESSON_URL}#bai-tap`);
  await page.getByTestId("exercise-input").fill("Tóm tắt file Excel này.");
  await page.getByTestId("exercise-submit").click();
  await expect(page.getByTestId("exercise-result")).toContainText("Chưa đạt");
  const ex = lessonPromptLaGi.blocks.find((b) => b.type === "exercise")!;
  if (ex.type !== "exercise") throw new Error();
  await page.getByTestId("exercise-input").fill(ex.referenceAnswer);
  await page.getByTestId("exercise-submit").click();
  await expect(page.getByTestId("exercise-result")).toContainText("Đạt — 100%");
});

test("notes, bookmark and completion persist after reload; resume card points to the lesson", async ({ page }) => {
  await open(page, LESSON_URL);
  await page.getByTestId("tab-notes").click();
  await page.getByTestId("note-input").fill("Nhớ phép thử đồng nghiệp");
  await page.getByTestId("note-save").click();
  await expect(page.getByTestId("note-status")).toContainText("Đã lưu");
  await page.getByTestId("bookmark-button").click();
  await page.locator("#vi-du").scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.reload();
  await page.getByTestId("tab-notes").click();
  await expect(page.getByTestId("note-input")).toHaveValue("Nhớ phép thử đồng nghiệp");
  await expect(page.getByTestId("bookmark-button")).toHaveAttribute("aria-pressed", "true");

  await open(page, "/");
  await expect(page.getByTestId("resume-title")).toHaveText("Prompt là gì?");
  await expect(page.getByTestId("resume-button")).toHaveAttribute("href", /prompt-la-gi\/#/);

  await open(page, LESSON_URL);
  await page.getByTestId("complete-button").click();
  await expect(page.getByTestId("reopen-button")).toBeVisible();
  // 50 XP for the lesson; no chapter milestone while chapter 3 still has unpublished lessons.
  await expect.poll(() => xp(page)).toBe(50);
  await open(page, "/tien-do/");
  await expect(page.getByTestId("bookmarks")).toContainText("Prompt là gì?");
  await expect(page.getByTestId("progress-dashboard")).toContainText("Bước chân đầu tiên");
});
