//const { test, request } = require("@playwright/test");
import {test, request} from '@playwright/test';

test("Test Wait for load state", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("input#userEmail").fill("one@user.com");
  await page.locator("input#userPassword").fill("Qwerty123@#");
  await page.locator("input#login").click();
  await page.waitForLoadState("networkidle");
  const ProductNames  = await page.locator(".card-body h5").allTextContents();
  console.log(ProductNames);
});