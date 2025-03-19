class ClientPage{

    constructor(page){
        this.page = page;
        this.userName = page.locator("input[placeholder='email@example.com']");
        this.password = page.locator("input#userPassword");
        this.loginButton = page.locator("#login");
    }

    async goTo(){
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async login(username,password)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }
}

module.exports = {ClientPage};