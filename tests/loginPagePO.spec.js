//const {test,expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';
import {POmanager} from '../pageobjects/POmanager';
const logindataset = JSON.parse(JSON.stringify('../test_data/loginPage_test_data.json'));

test('Login Page', async ({ page }) => {
    
    const username = logindataset.username;
    const password = logindataset.password;
    const poManager = new POmanager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username,password);
    await page.screenshot({ path: `screenshots/loginPage.png` });
});