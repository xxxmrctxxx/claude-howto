import { expect, test, type Locator, type Page } from "@playwright/test";
import { LESSONS, QUESTION_BANKS } from "../src/content/registry";
import { indexQuestion } from "../src/lib/engine/question/fingerprint";
import type { GenericSim } from "../src/lib/types/content";
import { open, xp } from "./helpers";

const BASE = "/hoc/claude-code-co-ban";
const SLUGS = ["claude-code-la-gi", "terminal-la-gi", "cai-dat-moi-truong", "cai-dat-claude-code", "dang-nhap-xac-thuc", "mo-du-an", "file-va-thu-muc", "ung-dung-dau-tien", "lenh-co-ban"];

function simOf(lessonId: string): GenericSim {
  const b = LESSONS[lessonId].blocks.find((x) => x.type === "simulation");
  if (b?.type !== "simulation" || !b.sim) throw new Error(`no data sim in ${lessonId}`);
  return b.sim;
}

async function type(scope: Locator, cmd: string) {
  const input = scope.getByTestId("terminal-input");
  await input.fill(cmd);
  await input.press("Enter");
}

async function solveChoose(page: Page, sim: Extract<GenericSim, { kind: "choose" }>) {
  for (const s of sim.scenarios) await page.getByTestId(`choose-${s.id}-${s.answer}`).click();
  await expect(page.getByTestId("sim-choose")).toContainText("Bạn đã chọn đúng tất cả tình huống");
}

async function solveClassify(page: Page, sim: Extract<GenericSim, { kind: "classify" }>) {
  const w = page.getByTestId("sim-classify");
  for (const it of sim.items) await w.getByLabel(it.text, { exact: true }).selectOption(it.bin);
  await w.getByTestId("sim-check").click();
  await expect(w.getByTestId("sim-result")).toContainText(`Đúng ${sim.items.length}/${sim.items.length}`);
}

for (const slug of SLUGS) {
  test(`chapter 5 lesson renders 12 parts with diagram: ${slug}`, async ({ page }) => {
    await page.goto(`${BASE}/${slug}/`);
    await expect(page.locator("article section[aria-labelledby]")).toHaveCount(12);
    await expect(page.getByTestId("mermaid").locator("svg")).toBeVisible();
  });
}

test("data sim — terminal (terminal là gì): labelled MÔ PHỎNG, steps complete, XP once", async ({ page }) => {
  await open(page, `${BASE}/terminal-la-gi/#mo-phong`);
  const sim = simOf("ch05-l02");
  if (sim.kind !== "terminal") throw new Error();
  const w = page.getByTestId("sim-terminal");
  await expect(w.getByTestId("terminal")).toContainText("MÔ PHỎNG");
  for (const step of sim.steps) await type(w, step.hint);
  await expect(w.getByTestId("sim-result")).toContainText("Hoàn thành nhiệm vụ terminal");
  await expect(w.getByTestId("terminal")).toContainText("Cong_doan,So_loi");
  await expect.poll(() => xp(page)).toBe(15);
});

test("data sim — terminal (mở dự án): project preset and simulated claude command", async ({ page }) => {
  await open(page, `${BASE}/mo-du-an/#mo-phong`);
  const sim = simOf("ch05-l06");
  if (sim.kind !== "terminal") throw new Error();
  const w = page.getByTestId("sim-terminal");
  for (const step of sim.steps) await type(w, step.hint);
  await expect(w.getByTestId("terminal")).toContainText(".gitignore");
  await expect(w.getByTestId("terminal")).toContainText("working tree clean");
  await expect(w.getByTestId("terminal")).toContainText("không chạy Claude");
  await expect(w.getByTestId("sim-result")).toContainText("Hoàn thành nhiệm vụ terminal");
});

test("data sim — verify (cài đặt): wrong verdict flagged, all correct passes", async ({ page }) => {
  await open(page, `${BASE}/cai-dat-claude-code/#mo-phong`);
  const sim = simOf("ch05-l04");
  if (sim.kind !== "verify") throw new Error();
  const w = page.getByTestId("sim-verify");
  const label = (id: string) => sim.verdicts.find((v) => v.id === id)!.label;
  for (const [i, c] of sim.claims.entries()) {
    const pick = i === 0 ? sim.verdicts.find((v) => v.id !== c.verdict)!.id : c.verdict;
    await w.locator("fieldset").nth(i).getByLabel(label(pick)).check();
  }
  await w.getByTestId("sim-check").click();
  await expect(w.getByTestId("sim-result")).toContainText(`Đúng ${sim.claims.length - 1}/${sim.claims.length}`);
  await w.locator("fieldset").nth(0).getByLabel(label(sim.claims[0].verdict)).check();
  await w.getByTestId("sim-check").click();
  await expect(w.getByTestId("sim-result")).toContainText(`Đúng ${sim.claims.length}/${sim.claims.length}`);
});

test("data sim — choose (môi trường, đăng nhập, lệnh cơ bản)", async ({ page }) => {
  for (const [slug, id] of [["cai-dat-moi-truong", "ch05-l03"], ["dang-nhap-xac-thuc", "ch05-l05"], ["lenh-co-ban", "ch05-l09"]] as const) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    const sim = simOf(id);
    if (sim.kind !== "choose") throw new Error();
    await solveChoose(page, sim);
  }
});

test("data sim — classify (vòng lặp agent, file và thư mục)", async ({ page }) => {
  for (const [slug, id] of [["claude-code-la-gi", "ch05-l01"], ["file-va-thu-muc", "ch05-l07"]] as const) {
    await open(page, `${BASE}/${slug}/#mo-phong`);
    const sim = simOf(id);
    if (sim.kind !== "classify") throw new Error();
    await solveClassify(page, sim);
  }
});

test("data sim — sequence (ứng dụng đầu tiên)", async ({ page }) => {
  await open(page, `${BASE}/ung-dung-dau-tien/#mo-phong`);
  const sim = simOf("ch05-l08");
  if (sim.kind !== "sequence") throw new Error();
  const w = page.getByTestId("sim-sequence");
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
});

test("quiz — terminal-task question is graded against the simulated shell", async ({ page }) => {
  const bank = QUESTION_BANKS["ch05-l02"];
  const target = bank.find((q) => q.questionType === "terminal-task");
  if (!target || target.questionType !== "terminal-task") throw new Error("no terminal-task in ch05-l02");
  // Every other question is already answered, so the quiz must serve the terminal task.
  const attempts = bank
    .filter((q) => q.questionId !== target.questionId)
    .map((q) => {
      const iq = indexQuestion(q);
      return {
        questionId: q.questionId,
        lessonId: q.lessonId,
        conceptId: q.conceptId,
        fingerprint: iq.canonicalFingerprint,
        semanticKey: iq.semanticKey,
        difficulty: q.difficulty,
        correct: true,
        score: 1,
        at: "2026-11-01T00:00:00.000Z",
        sessionId: "seed",
        firstTime: true,
      };
    });
  const state = { version: 1, createdAt: "2026-11-01T00:00:00.000Z", lessons: {}, attempts, sessions: {}, labs: [], labState: {}, xpEvents: [], badges: {}, activityDays: [], bookmarks: [], notes: {} };
  await page.addInitScript((raw) => {
    if (!sessionStorage.getItem("seeded")) {
      localStorage.setItem("cha:progress:v1", raw);
      sessionStorage.setItem("seeded", "1");
    }
  }, JSON.stringify(state));
  await open(page, `${BASE}/terminal-la-gi/#kiem-tra`);
  await expect(page.getByTestId("unseen-count")).toContainText("1");
  await page.getByTestId("quiz-start-button").click();
  await expect(page.getByTestId("quiz-question")).toHaveAttribute("data-question-id", target.questionId);
  const runner = page.getByTestId("quiz-runner");
  await expect(runner.getByTestId("terminal")).toContainText("MÔ PHỎNG");
  for (const c of target.referenceCommands) await type(runner, c);
  await runner.getByTestId("quiz-submit").click();
  await expect(page.getByTestId("quiz-feedback")).toContainText(target.explanation.slice(0, 30));
  await expect.poll(() => xp(page)).toBe(15);
});
