import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { POmanager } from '../../page_object_ts/pageobjects/POmanager';

let poManager: POmanager;

Given('I am on the login page', async function() {
    await this.init();
    poManager = new POmanager(this.page!);
    await this.page!.goto('https://staging.app.mymatrixrent.com/');
});

When('I enter the username {string}', async function(username: string) {
    await poManager.getLoginPage().enterUsername(username);
});

When('I enter the password {string}', async function(password: string) {
    await poManager.getLoginPage().enterPassword(password);
});

When('I click the login button', async function() {
    await poManager.getLoginPage().clickLoginButton();
});

Then('I should see the dashboard', async function() {
    await expect(poManager.getClinetPage().getDashboardElement()).toBeVisible();
});

After(async function() {
    await this.cleanup();
}); 