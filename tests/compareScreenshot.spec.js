const {test,expect} = require('@playwright/test');

test("Snapshot Comparison", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot("screenshot.png");
});