class MatrixLoginPage {
    constructor(page) {
        this.page = page;
        this.username_field = page.locator('input[name="email"]');
        this.password_field = page.locator('input[name="password"]');
        this.login_button = page.getByRole('button', {name: 'Login'});

    }

    async goToLandingPage() {
        await this.page.goto('https://staging.app.mymatrixrent.com/');
        await this.page.waitForLoadState('networkidle');
    }

    async validLogin(username, password) {
        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {MatrixLoginPage};