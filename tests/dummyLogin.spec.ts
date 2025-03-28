import {test,expect} from '@playwright/test'
import {before} from 'node:test'
const data = JSON.parse(JSON.stringify('../test_data/dummyLogin.json'));
import {POmanager} from '../page_object_ts/pageobjects/POmanager';
let webContext;

test.beforeAll(async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    // await page.goto('https://staging.app.mymatrixrent.com/');
    // await page.waitForLoadState('networkidle');
    // await page.locator('input[name="email"]').fill(data['email']);
    // await page.locator('input[name="password"]').fill(data['password']);
    // await page.getByRole('button', {name: 'Login'}).click();
    // await page.waitForLoadState('networkidle');
    const poManager = new POmanager(page);
    const matrixLoginPage = poManager.getMatrixLoginPage();
    await matrixLoginPage.goToLandingPage();
    await matrixLoginPage.validLogin(data['email'], data['password']);
    await expect(page.locator('.page_header')).toHaveText('Applications');
    await context.storageState({path: 'matrixstorageState.json'});
    webContext = await browser.newContext({storageState: 'matrixstorageState.json'});
})


test("Login to Matrix", async () => {
    const page1 = await webContext.newPage();
    await page1.goto('https://staging.app.mymatrixrent.com/');
    await page1.waitForLoadState('networkidle');
    await expect(page1).toHaveURL('https://staging.app.mymatrixrent.com/app/applications?page=1');
});