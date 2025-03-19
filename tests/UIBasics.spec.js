const {test,expect} = require('@playwright/test');


test('UI Basics One', async ({ browser }) => {
    const context = await browser.newContext();
    //create browser context
    const page = await context.newPage();
    //create new page
    await page.goto('https://playwright.dev/');
    //navigate to page
    console.log(await page.title());
    //print page title
});


test('UI Basics Two', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    //just use page fixutre and need not to write context and page creation only if certain info is not needed for context
    console.log(await page.title());
});