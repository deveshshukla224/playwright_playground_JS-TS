//const {test,expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';
test("End to End Purchase Product Exercise", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const userName = page.locator("input[placeholder='email@example.com']");
    const password = page.locator("input#userPassword");
    const loginButton = page.locator("#login");
    const registerLink = page.locator("a.text-reset");
    const firstNameInput = page.locator("#firstName");
    const lastNameInput = page.locator("#lastName");
    const emailInput = page.locator("input[formcontrolname='userEmail']");
    const phoneInput = page.locator("#userMobile");
    const passwordInput = page.locator("input#userPassword");
    const confirmPasswordInput = page.locator("#confirmPassword");
    const regesterButton = page.locator("input[value='Register']");
    const adultCheckbox = page.locator("input[type='checkbox']");
    const loginBtnAfterRegistration = page.locator("button.btn-primary");
    const products = page.locator("div.card-body");
    const desiredProduct = 'IPHONE 13 PRO';
    const email = "test_one2222231332@gmail.com"
    const cartButton = page.locator("[routerlink*=cart]")
    const checkoutButton = page.locator("button[type='button']").last();
    const selectCountry = page.locator("[placeholder='Select Country']");
    const selectCountryOption = page.locator(".ta-results");
    // await registerLink.click();
    // await firstNameInput.fill("Test");
    // await lastNameInput.fill("User");
    // await emailInput.fill(email);
    // await phoneInput.fill("1234511119");
    // await passwordInput.fill("Qwerty@123");
    // await confirmPasswordInput.fill("Qwerty@123");
    // await adultCheckbox.check();
    // await regesterButton.click();
    // await loginBtnAfterRegistration.click();
    await userName.fill(email);
    console.log("username filled");
    await password.fill("Qwerty@123");
    console.log("password filled");
    await loginButton.click();
    console.log("login button clicked");
    await page.waitForLoadState('networkidle');
    const products_count = await products.count();
    console.log("products are ",products);
    console.log("Length of Products is",products_count);
    for (let i = 0; i < products_count; i++) {
        const productName = await products.nth(i).locator("b").textContent()
        if ( productName=== desiredProduct) {
            console.log("Product found");
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await cartButton.click();
    await page.locator(".cart ul").first().waitFor();
    const is_desired_item_visible_in_cart = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect(is_desired_item_visible_in_cart).toBeTruthy();

    await checkoutButton.click();
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await selectCountry.pressSequentially("ind");
    //await page.pause();
    await selectCountryOption.waitFor();
    const country_count =  await selectCountryOption.locator("button").count();
    //console.log("Country count is ",country_count);
    for (let i = 0; i < country_count; i++) {
        const text = await selectCountryOption.locator("button").nth(i).textContent();
        console.log("Country Name is ",text);
        if (text.trim()==="India") {
            console.log("Country found");
            await selectCountryOption.locator("button").nth(i).click();
            break;
        }
    }
    
    await page.locator(".action__submit").click();
    const orderCompletionMsg = await page.locator(".hero-primary").textContent();
    console.log("Order Completion Message is ",orderCompletionMsg);
    //await expect(page.locator(".hero-primary").textContent()).toHaveText(" Thankyou for the order. ");
    const orderIDText = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Order Number is ",orderIDText.split(" | ")[1]);
    const orderID = orderIDText.split(" | ")[1];
    //console.log("Order Number is ",orderID);
   
    await page.locator("[routerlink*= 'myorders']").first().click();
    //await page.waitForLoadState('networkidle');
    await page.locator("tr[class='ng-star-inserted']").first().waitFor();
    const orders = page.locator("tr[class='ng-star-inserted']");
    const orders_count = await orders.count();
    console.log("Orders Count is ",orders_count);
    for ( let i = 0; i < orders_count; i++) {
        console.log("Inside Loop");
        const order = await orders.nth(i).locator("th").textContent();
        console.log("Order is ",order);
        if (order.trim() === orderID.trim()) {
            console.log("Order Found");
            break;
        }
    }
});
    