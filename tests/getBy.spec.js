//const {test,expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test("Get By Exercise", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button",{name:'Submit'}).click();
    await page.getByRole("link",{name:'Shop'}).click();
    await page.locator("app-card").filter({hasText: "Samsung Note 8"}).getByRole("button",{name:'Add'}).click();

});