//const {test,expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test("Switch Tab Exercise", async ({browser}) => {
    const context = await browser.newContext();
    const originalPage = await context.newPage();
    await originalPage.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const emailInput = originalPage.locator("input#username");
    const passwordInput = originalPage.locator("input#password");
    const loginButton = originalPage.locator("input#signInBtn");
    const newTabLink = originalPage.locator("[href*='documents-request']");
    const domainInfoTextLocator = ".red";
    const [switchedTab] = await Promise.all([
        context.waitForEvent("page"),
        newTabLink.click()
    ])
    // switch to new tab
    const text = await switchedTab.locator(domainInfoTextLocator).textContent();
    const splittedText = text.split("@")
    const domain = splittedText[1].split(" ")[0];
    console.log(domain);

    //now switch back to original tab
    await originalPage.bringToFront();
    await emailInput.fill(domain);
    await originalPage.pause();
    
});