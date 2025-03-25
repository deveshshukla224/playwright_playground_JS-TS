const {Given,When,Then,After} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');


//let browser,context,page;
//instead of declaring global variable use world constructor - using this keyword
//share data between different steps of same scenario
//this to similar to context of behave (python)

Given('I am on the login page', async () => {

    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto('https://staging.app.mymatrixrent.com/');
});



When('I enter the username {string}', async (username) => {
    await this.page.locator('input[name="email"]').fill(username);
});

When('I enter the password {string}', async (password) => {
    await this.page.locator('input[name="password"]').fill(password);
});

When('I click the login button', async () => {
    await this.page.locator('button[type="submit"]').click();
});

// Then('I should see the dashboard', async () => {
//     await expect(this.page.locator('.page_header')).toHaveText('Applications');
// });

// Ensure the browser is closed after the scenario
After(async () => {
    if (this.browser) {
        await this.browser.close();
    }
});

