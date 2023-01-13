import test, { expect } from "@playwright/test";

test.describe("Top画面", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  })

  test("Aboutボタンが存在すること", async ({ page}) => {
    const aboutButton = page.locator("data-testid=about-button");
    expect(aboutButton).toHaveCount(1);
    await expect(aboutButton).toHaveText("Aboutページへ移動");
  })

  test("Aboutボタンクリックで、Aboutページに移動すること", async ({ page }) => {
    const aboutButton = page.locator("data-testid=about-button");
    await aboutButton.click();

    await expect(page).toHaveURL("./about");
  })
})