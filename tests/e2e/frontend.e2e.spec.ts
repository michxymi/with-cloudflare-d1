import { expect, test } from "@playwright/test";

const TITLE_REGEX = /Payload Blank Template/;

test.describe("Frontend", () => {
  test("can go on homepage", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await expect(page).toHaveTitle(TITLE_REGEX);

    const headging = page.locator("h1").first();

    await expect(headging).toHaveText("Welcome to your new project.");
  });
});
