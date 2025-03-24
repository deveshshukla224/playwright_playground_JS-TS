import {Page,Locator} from '@playwright/test';
export class LoginPage {
    page : Page;
    usernameInput : Locator;
    passwordInput : Locator;
    loginButton : Locator;

    constructor(page:Page) {
        this.page = page;
        this.usernameInput = page.locator("input#username");
        this.passwordInput = page.locator("[name='password']"); 
        this.loginButton = page.locator("input.btn-info");
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        
    }
        

    async validLogin(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }

}


