import { expect, test } from "@playwright/test";
import { answer, currentQuestion, LESSON_URL, open, xp } from "./helpers";

test("adaptive quiz: no repeats, difficulty rises, survives reload, exhausts honestly, XP once", async ({ page }) => {
  await open(page, `${LESSON_URL}#kiem-tra`);
  await page.getByTestId("quiz-start-button").click();
  const seen = new Set<string>();
  const difficulties: string[] = [];

  for (let session = 0; session < 2; session++) {
    if (session === 1) {
      await expect(page.getByTestId("quiz-summary")).toContainText("8/8");
      await expect(page.getByTestId("unseen-count")).toContainText("7");
      await page.getByTestId("quiz-start-button").click();
    }
    const total = session === 0 ? 8 : 7;
    for (let i = 0; i < total; i++) {
      const q = await currentQuestion(page);
      expect(seen.has(q.questionId), `repeat ${q.questionId}`).toBe(false);
      seen.add(q.questionId);
      difficulties.push(q.difficulty);
      if (session === 0 && i === 3) {
        // Reload in the middle of a session: same question must come back.
        await page.reload();
        const again = await currentQuestion(page);
        expect(again.questionId).toBe(q.questionId);
      }
      await answer(page, q, true);
      const fb = page.getByTestId("quiz-feedback");
      await expect(fb).toContainText(q.explanation.slice(0, 30));
      await page.getByTestId("quiz-next").click();
    }
  }
  expect(seen.size).toBe(15);
  expect(difficulties[0]).toBe("beginner");
  expect(difficulties[2]).toBe("intermediate");
  await expect(page.getByTestId("quiz-exhausted")).toContainText("Bạn đã làm hết câu hỏi mới");
  // 5 beginner × 10 + 6 intermediate × 15 + 4 advanced × 20
  expect(await xp(page)).toBe(220);
  await page.reload();
  await expect(page.getByTestId("quiz-exhausted")).toBeVisible();
  expect(await xp(page)).toBe(220);
});

test("wrong answer: explanation, then a different question on the same concept or skill", async ({ page }) => {
  await open(page, `${LESSON_URL}#kiem-tra`);
  await page.getByTestId("quiz-start-button").click();
  const first = await currentQuestion(page);
  await answer(page, first, false);
  const fb = page.getByTestId("quiz-feedback");
  await expect(fb).toContainText("Giải thích");
  await expect(fb).toContainText(first.explanation.slice(0, 30));
  await expect(fb).toContainText("luyện lại kỹ năng");
  await page.getByTestId("quiz-next").click();
  const next = await currentQuestion(page);
  expect(next.questionId).not.toBe(first.questionId);
  expect(next.conceptId === first.conceptId || next.thinkingSkill === first.thinkingSkill).toBe(true);
  await expect(page.getByTestId("quiz-runner")).toContainText("Luyện lại kỹ năng");
  // Wrong answers earn no XP.
  expect(await page.getByTestId("xp-value").textContent()).toBe("0");
});

test("review mode re-asks wrong questions without XP", async ({ page }) => {
  await open(page, `${LESSON_URL}#kiem-tra`);
  await page.getByTestId("quiz-start-button").click();
  const q = await currentQuestion(page);
  await answer(page, q, false);
  await page.getByText("Dừng lượt này").click();
  await page.getByRole("button", { name: /Ôn lại 1 câu từng sai/ }).click();
  await expect(page.getByTestId("quiz-review")).toContainText("không tính XP");
});
