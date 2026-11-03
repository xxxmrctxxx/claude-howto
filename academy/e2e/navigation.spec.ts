import { expect, test } from "@playwright/test";

test("home shows the main sections and links to the course", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Làm chủ Claude");
  await expect(page.getByTestId("start-learning")).toBeVisible();
  await expect(page.getByTestId("roadmap").locator("li")).toHaveCount(12);
  await expect(page.getByTestId("home-dashboard")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Dự án & phòng thực hành" })).toBeVisible();
  await page.getByTestId("home-search").fill("prompt");
  await expect(page.getByRole("option").first()).toBeVisible();
});

test("course page: published lessons link, planned lessons are labelled and not links", async ({ page }) => {
  await page.goto("/hoc/");
  await expect(page.getByRole("link", { name: /Prompt là gì\?/ }).first()).toBeVisible();
  const planned = page.locator("section", { hasText: "Chương 9: Xây dựng website bằng Claude" }).locator("li", { hasText: "Phân tích yêu cầu" });
  await expect(planned).toBeVisible();
  await expect(planned.locator("a")).toHaveCount(0);
  await expect(planned).toContainText("Sắp ra mắt");
  await expect(page.getByText("Sắp ra mắt").first()).toBeVisible();
});

test("search dialog with keyboard navigation", async ({ page, isMobile }) => {
  test.skip(Boolean(isMobile), "keyboard shortcut is a desktop feature");
  await page.goto("/");
  await page.keyboard.press("Control+k");
  const input = page.getByLabel("Từ khoá tìm kiếm");
  await input.fill("terminal");
  const list = page.getByRole("listbox");
  await expect(list).toContainText("Terminal Simulator");
  // Move the keyboard selection down to the lab, whatever its rank.
  const options = list.getByRole("option");
  const target = (await options.allTextContents()).findIndex((t) => t.includes("Terminal Simulator"));
  // Nothing is selected until the first ArrowDown.
  for (let i = 0; i <= target; i++) await input.press("ArrowDown");
  await expect(options.nth(target)).toHaveAttribute("aria-selected", "true");
  await input.press("Enter");
  await expect(page).toHaveURL(/thuc-hanh\/terminal/);
});

test("unknown pages show a helpful 404", async ({ page }) => {
  const res = await page.goto("/hoc/khong-ton-tai/bai-khong-co/");
  expect(res?.status()).toBe(404);
  await expect(page.getByText("Không tìm thấy trang")).toBeVisible();
});

test("placement test recommends a starting chapter", async ({ page }) => {
  await page.goto("/kiem-tra-dau-vao/");
  for (let i = 0; i < 10; i++) {
    await page.getByTestId("placement-test").getByRole("radio").first().click();
    if (i < 9) await page.getByTestId("placement-next").click();
  }
  await page.getByTestId("placement-finish").click();
  await expect(page.getByTestId("placement-recommendation")).toContainText("Chương");
});

test("performance budget: home loads fast with a modest JS payload", async ({ page }) => {
  await page.goto("/", { waitUntil: "load" });
  const { dcl, js } = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    const js = performance
      .getEntriesByType("resource")
      .filter((r) => (r as PerformanceResourceTiming).initiatorType === "script")
      .reduce((s, r) => s + (r as PerformanceResourceTiming).encodedBodySize, 0);
    return { dcl: nav.domContentLoadedEventEnd, js };
  });
  expect(dcl).toBeLessThan(3000);
  expect(js).toBeLessThan(1_500_000);
});
