const { test,expect} = require('@playwright/test');

test("dailog_iFrame_handling", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#confirmbtn").click();
    page.on("dialog",dailog => dailog.accept());
    await page.locator("#confirmbtn").click();
    page.on("dialog",dailog => dailog.dismiss());
    await page.locator("#mousehover").hover();
    const iframe = page.frameLocator("#courses-iframe");
    await iframe.locator("li a[href='lifetime-access']:visible").click();
    const text = await iframe.getByText("All Access Subscription").textContent();
    console.log(text);
});