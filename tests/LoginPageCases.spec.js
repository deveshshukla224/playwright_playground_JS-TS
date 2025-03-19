const {test,expect} = require('@playwright/test');


test('Login Page Incorrect Login/Password Message', async ({ page }) => {
    
    //navigate to page
    await userName.fill("rahulshetty");
    await password.fill("learning");
    await loginButton.click();
    console.log(await page.locator("div.alert-danger[style='display: block;']").textContent());
    expect( await page.locator("div.alert-danger[style='display: block;']").textContent()).toBe('Incorrect username/password.');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await loginButton.click();
    //console.log(await page.locator(".card-body .card-title a")[0].textContent());
    console.log(await page.locator(".card-body .card-title a").first().textContent());
    //get text of first element
    console.log(await page.locator(".card-body .card-title a").nth(1).textContent());
    //get text of second element
});