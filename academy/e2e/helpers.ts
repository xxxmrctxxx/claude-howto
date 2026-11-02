import { expect, type Page } from "@playwright/test";
import { questionsCh03L01 } from "../src/content/questions/ch03-l01";
import type { Question } from "../src/lib/types/content";

export const LESSON_URL = "/hoc/prompt-engineering/prompt-la-gi/";
export const BANK: Question[] = questionsCh03L01;
export const byId = (id: string) => BANK.find((q) => q.questionId === id)!;

export async function currentQuestion(page: Page): Promise<Question> {
  const el = page.getByTestId("quiz-question");
  await expect(el).toBeVisible();
  return byId((await el.getAttribute("data-question-id"))!);
}

/** Answer the question on screen, correctly or deliberately wrong. */
export async function answer(page: Page, q: Question, correct: boolean) {
  const runner = page.getByTestId("quiz-runner");
  switch (q.questionType) {
    case "single-choice":
    case "scenario":
    case "predict-output": {
      const opt = correct ? q.options.find((o) => o.id === q.answer)! : q.options.find((o) => o.id !== q.answer)!;
      await runner.getByRole("radio", { name: opt.text, exact: false }).first().click();
      break;
    }
    case "multiple-choice": {
      const pick = correct ? q.options.filter((o) => q.answer.includes(o.id)) : [q.options.find((o) => !q.answer.includes(o.id))!];
      for (const o of pick) await runner.getByRole("checkbox", { name: o.text }).click();
      break;
    }
    case "true-false":
      await runner.getByTestId(q.answer === correct ? "tf-true" : "tf-false").click();
      return;
    case "fill-blank":
      for (const b of q.blanks) await runner.getByLabel(`Ô trống ${b.id}`).fill(correct ? b.accepted[0] : "sai");
      break;
    case "ordering":
      if (correct) {
        for (let target = 0; target < q.items.length; target++) {
          const item = q.items[target];
          const ids = await runner.locator('[data-testid^="order-item-"]').evaluateAll((els) => els.map((e) => e.getAttribute("data-testid")!.replace("order-item-", "")));
          let at = ids.indexOf(item.id);
          while (at > target) {
            await runner.getByRole("button", { name: `Đưa lên: ${item.text}` }).click();
            at--;
          }
        }
      }
      break;
    case "matching":
      for (const [i, p] of q.pairs.entries()) {
        const value = correct ? p.id : q.pairs[(i + 1) % q.pairs.length].id;
        await runner.getByLabel(p.left, { exact: true }).selectOption(value);
      }
      break;
    case "find-error": {
      const segs = correct ? q.segments.filter((s) => s.isError) : q.segments.filter((s) => !s.isError).slice(0, 1);
      for (const s of segs) await runner.getByTestId(`segment-${s.id}`).click();
      break;
    }
    case "fix-prompt":
    case "real-task":
      await runner.getByTestId("rubric-input").fill(correct ? q.referenceAnswer : "Viết lại prompt cho tốt hơn đi nhé bạn.");
      break;
    case "terminal-task":
      throw new Error("terminal-task not in this bank");
  }
  await runner.getByTestId("quiz-submit").click();
}

export async function xp(page: Page): Promise<number> {
  return Number(await page.getByTestId("xp-value").textContent());
}

/** Navigate and wait until React has hydrated, so early clicks are not lost. */
export async function open(page: Page, url: string) {
  await page.goto(url);
  await expect(page.locator("html[data-hydrated='true']")).toBeAttached();
}
