import { expect, test } from "@playwright/test";

test("corrupt saved progress is backed up and the app keeps working", async ({ page }) => {
  await page.addInitScript(() => {
    if (!sessionStorage.getItem("seeded")) {
      localStorage.setItem("cha:progress:v1", "{bad json");
      sessionStorage.setItem("seeded", "1");
    }
  });
  await page.goto("/tien-do/");
  await expect(page.getByText("Dữ liệu tiến độ cũ bị hỏng")).toBeVisible();
  const keys = await page.evaluate(() => Object.keys(localStorage));
  expect(keys.some((k) => k.startsWith("cha:progress:v1:backup:"))).toBe(true);
  await expect(page.getByTestId("progress-dashboard")).toBeVisible();
});

test("progress survives a reload and can be reset", async ({ page }) => {
  await page.goto("/hoc/prompt-engineering/prompt-la-gi/");
  await page.getByTestId("complete-button").click();
  await page.reload();
  await expect(page.getByTestId("reopen-button")).toBeVisible();
  page.on("dialog", (d) => d.accept());
  await page.goto("/tien-do/");
  await page.getByTestId("reset-progress").click();
  await expect(page.getByRole("status").filter({ hasText: "Đã xoá tiến độ" })).toBeVisible();
  await page.goto("/hoc/prompt-engineering/prompt-la-gi/");
  await expect(page.getByTestId("complete-button")).toBeVisible();
});
