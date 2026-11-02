import { expect, test } from "@playwright/test";
import { CAPABILITY_BINS, CAPABILITY_TASKS, CONTEXT_DOCS, FACT_CLAIMS, FACT_VERDICTS, MODEL_SCENARIOS } from "../src/content/widgets/chapter1";
import { open, xp } from "./helpers";

const BASE = "/hoc/claude-ai-la-gi";
const LESSONS = ["ai-hoat-dong-nhu-the-nao", "claude-khac-chatbot", "cac-phien-ban-claude", "claude-lam-duoc-gi", "gioi-han-cua-ai", "loi-thuong-gap-cua-ai"];

for (const slug of LESSONS) {
  test(`chapter 1 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("next-word simulation: context changes probabilities, sampling completes it", async ({ page }) => {
  await open(page, `${BASE}/ai-hoat-dong-nhu-the-nao/#mo-phong`);
  const w = page.getByTestId("next-word");
  await w.getByRole("button", { name: "dầu", exact: true }).first().click();
  await w.getByTestId("sample-mba").click();
  await w.getByRole("button", { name: "nước", exact: true }).nth(1).click();
  await w.getByTestId("sample-bep").click();
  await expect(page.getByTestId("next-word-done")).toBeVisible();
  await expect.poll(() => xp(page)).toBe(15);
});

test("bot-compare: the real keyword bot misfires on 'giờ'", async ({ page }) => {
  await open(page, `${BASE}/claude-khac-chatbot/#mo-phong`);
  const w = page.getByTestId("bot-compare");
  await w.getByTestId("bot-input").fill("Máy tôi mua năm ngoái giờ bị hỏng, có được sửa miễn phí không?");
  await w.getByRole("button", { name: "Gửi", exact: true }).click();
  await expect(w).toContainText("Chúng tôi làm việc 8h–17h");
  await expect(w).toContainText("từ khoá “giờ”");
  await w.getByTestId("bot-input").fill("Hàng gửi sai loại rồi, xử lý sao?");
  await w.getByRole("button", { name: "Gửi", exact: true }).click();
  await expect(w).toContainText("Xin lỗi, tôi không hiểu");
  await w.getByTestId("flag-0").click();
  await w.getByTestId("flag-1").click();
  await expect.poll(() => xp(page)).toBe(15);
});

test("model picker gives official reasoning", async ({ page }) => {
  await open(page, `${BASE}/cac-phien-ban-claude/#mo-phong`);
  await page.getByTestId("pick-s1-fable").click();
  await expect(page.getByTestId("model-picker")).toContainText("Chưa phù hợp nhất");
  for (const s of MODEL_SCENARIOS) await page.getByTestId(`pick-${s.id}-${s.answer}`).click();
  await expect(page.getByTestId("model-picker-done")).toBeVisible();
});

test("capability sorter checks every task", async ({ page }) => {
  await open(page, `${BASE}/claude-lam-duoc-gi/#mo-phong`);
  for (const t of CAPABILITY_TASKS) {
    await page.getByLabel(t.text).selectOption(CAPABILITY_BINS.find((b) => b.id === t.bin)!.id);
  }
  await page.getByTestId("capability-check").click();
  const vals = await page.getByTestId("capability-sorter").locator("select").evaluateAll((els) => els.map((e) => (e as HTMLSelectElement).value));
  expect(vals).toEqual(CAPABILITY_TASKS.map((t) => t.bin));
  await expect(page.getByTestId("capability-result")).toContainText(`Đúng ${CAPABILITY_TASKS.length}/${CAPABILITY_TASKS.length}`);
});

test("context window: overflow warning, then a curated selection passes", async ({ page }) => {
  await open(page, `${BASE}/gioi-han-cua-ai/#mo-phong`);
  const w = page.getByTestId("context-window");
  for (const d of CONTEXT_DOCS) await w.getByLabel(d.name).check();
  await expect(w.getByRole("alert")).toContainText("Vượt giới hạn");
  for (const d of CONTEXT_DOCS.filter((x) => !x.relevant)) await w.getByLabel(d.name).uncheck();
  await w.getByTestId("context-check").click();
  await expect(w.getByTestId("context-result")).toContainText("Tuyệt vời");
});

test("fact checker distinguishes wrong vs unsupported claims", async ({ page }) => {
  await open(page, `${BASE}/loi-thuong-gap-cua-ai/#mo-phong`);
  const w = page.getByTestId("fact-checker");
  for (const [i, c] of FACT_CLAIMS.entries()) {
    const label = FACT_VERDICTS.find((v) => v.id === c.verdict)!.label;
    await w.getByRole("group", { name: `Khẳng định ${i + 1}` }).getByLabel(label).check();
  }
  await w.getByTestId("fact-check").click();
  await expect(w.getByTestId("fact-result")).toContainText(`Đúng ${FACT_CLAIMS.length}/${FACT_CLAIMS.length}`);
});

test("completing every lesson of chapter 1 awards the chapter milestone and badge", async ({ page }) => {
  for (const slug of LESSONS) {
    await page.goto(`${BASE}/${slug}/`);
    await page.getByTestId("complete-button").click();
    await expect(page.getByTestId("reopen-button")).toBeVisible();
  }
  // 6 lessons × 50 XP + 100 XP chapter milestone
  await expect.poll(() => xp(page)).toBe(400);
  await page.goto("/tien-do/");
  await expect(page.getByTestId("progress-dashboard")).toContainText("Hoàn thành một chương");
});
