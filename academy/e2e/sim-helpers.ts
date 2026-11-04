import { expect, type Page } from "@playwright/test";
import { LESSONS } from "../src/content/registry";
import type { GenericSim } from "../src/lib/types/content";

export function simOf(lessonId: string): GenericSim {
  const b = LESSONS[lessonId].blocks.find((x) => x.type === "simulation");
  if (b?.type !== "simulation" || !b.sim) throw new Error(`no data sim in ${lessonId}`);
  return b.sim;
}

/** Solve any data-driven simulation exactly as authored and assert the success message. */
export async function solveSim(page: Page, sim: GenericSim) {
  const w = page.getByTestId(`sim-${sim.kind}`);
  switch (sim.kind) {
    case "choose":
      for (const s of sim.scenarios) await page.getByTestId(`choose-${s.id}-${s.answer}`).click();
      await expect(w).toContainText("Bạn đã chọn đúng tất cả tình huống");
      return;
    case "classify":
      for (const it of sim.items) await w.getByLabel(it.text, { exact: true }).selectOption(it.bin);
      await w.getByTestId("sim-check").click();
      await expect(w.getByTestId("sim-result")).toContainText(`Đúng ${sim.items.length}/${sim.items.length}`);
      return;
    case "verify": {
      const label = (id: string) => sim.verdicts.find((v) => v.id === id)!.label;
      for (const [i, c] of sim.claims.entries()) await w.locator("fieldset").nth(i).getByLabel(label(c.verdict)).check();
      await w.getByTestId("sim-check").click();
      await expect(w.getByTestId("sim-result")).toContainText(`Đúng ${sim.claims.length}/${sim.claims.length}`);
      return;
    }
    case "highlight":
      for (const s of sim.segments.filter((x) => x.target)) await w.getByTestId(`hl-${s.id}`).click();
      await w.getByTestId("sim-check").click();
      await expect(w.getByTestId("sim-result")).toContainText("Chính xác");
      return;
    case "sequence":
      for (let target = 0; target < sim.items.length; target++) {
        const item = sim.items[target];
        const texts = await w.locator("ol > li > span.flex-1").allTextContents();
        let at = texts.indexOf(item.text);
        while (at > target) {
          await w.getByRole("button", { name: `Đưa lên: ${item.text}` }).click();
          at--;
        }
      }
      await w.getByTestId("sim-check").click();
      await expect(w.getByTestId("sim-result")).toContainText("Đúng thứ tự");
      return;
    case "terminal":
      await expect(w.getByTestId("terminal")).toContainText("MÔ PHỎNG");
      for (const step of sim.steps) {
        const input = w.getByTestId("terminal-input");
        await input.fill(step.hint);
        await input.press("Enter");
      }
      await expect(w.getByTestId("sim-result")).toContainText("Hoàn thành nhiệm vụ terminal");
      return;
    default:
      throw new Error(`solveSim: ${sim.kind} not handled here`);
  }
}
