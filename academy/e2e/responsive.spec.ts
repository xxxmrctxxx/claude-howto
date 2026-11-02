import { expect, test } from "@playwright/test";

const PAGES = ["/", "/hoc/", "/hoc/prompt-engineering/prompt-la-gi/", "/thuc-hanh/", "/thuc-hanh/terminal/", "/thuc-hanh/prompt-builder/", "/thuc-hanh/token/", "/tien-do/", "/kiem-tra-dau-vao/"];

for (const path of PAGES) {
  test(`no horizontal overflow: ${path}`, async ({ page }) => {
    await page.goto(path);
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test("lesson areas become tabs on mobile", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/hoc/prompt-engineering/prompt-la-gi/");
  await expect(page.getByTestId("pane-tab-content")).toHaveAttribute("aria-selected", "true");
  await expect(page.getByTestId("right-panel")).toBeHidden();
  await page.getByTestId("pane-tab-tools").click();
  await expect(page.getByTestId("right-panel")).toBeVisible();
  await expect(page.getByTestId("lesson-title")).toBeHidden();
  await page.getByTestId("pane-tab-nav").click();
  await expect(page.getByRole("navigation", { name: "Mục lục khoá học" })).toBeVisible();
});

test("mobile menu opens the navigation", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  await page.getByTestId("mobile-menu-button").click();
  await page.getByRole("navigation", { name: "Điều hướng di động" }).getByRole("link", { name: "Phòng thực hành" }).click();
  await expect(page).toHaveURL(/thuc-hanh/);
});

test("dark mode toggles, applies dark colours and persists after reload", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByTestId("theme-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe("rgb(28, 26, 24)");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("follows the OS dark preference by default", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
