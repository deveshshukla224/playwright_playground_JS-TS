const {test,expect} = require('@playwright/test');


test.use({
    launchOptions: {
      args: ['--start-maximized'],
    },
    viewport: null, // This ensures the window starts maximized
  });

test("Practise - Client Login Page", async ({page}) => {
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
      const firstElementInLandingPage = page.locator(".card-body h5").first();
      const toast_notification = page.locator("#toast-container");
      const loginbtn_on_registration_page = page.locator("a.text-reset");
      await registerLink.click();
      await firstNameInput.fill("Devesh");
      await lastNameInput.fill("Kumar");
      await emailInput.fill("asdfgh1jkiii11123455331211142101@mail.com");
      await phoneInput.fill("1234511111");
      await passwordInput.fill("Qwerty@123");
      await confirmPasswordInput.fill("Qwerty@123");
      await adultCheckbox.check();
      await regesterButton.click();
      const toast_notify_text = await toast_notification.textContent();
      console.log(toast_notify_text);
    //   const account_created_msg_found = await toast_notification.textContent()
    //   if (account_created_msg_found == "User already exisits with this Email Id!"){
    //      console.log("account already exists message visible");
    //      await loginbtn_on_registration_page.click(); 
    //      await userName.fill("asdfgh1jkiii11123455331211142@mail.com");
    //      console.log("username filled");
    //      await password.fill("Qwerty@123");
    //      console.log("password filled");
    //      await loginButton.click();
    //      console.log("login button clicked");
    //      console.log(await firstElementInLandingPage.textContent());     
    //   }
    //   else{
        //console.log("accoutn created");
        if (toast_notify_text == "User already exisits with this Email Id!"){
            console.log("account already exists message visible");
            await loginbtn_on_registration_page.click(); 
            await userName.fill("asdfgh1jkiii11123455331211142101@mail.com");
            console.log("username filled");
            await password.fill("Qwerty@123");
            console.log("password filled");
            await loginButton.click();
            console.log("login button clicked");
            console.log(await firstElementInLandingPage.textContent());
        }
        else{
            console.log("account created");
            await loginBtnAfterRegistration.click();
            console.log("login button clicked");
            await userName.fill("asdfgh1jkiii1112345533121114210177@mail.com");
            console.log("username filled");
            await password.fill("Qwerty@123");
            console.log("password filled");
            await loginButton.click();
            console.log("login button clicked");
            console.log(await firstElementInLandingPage.textContent());
        }
});