class LoginPage {


    constructor(page) {
        this.page = page;
        this.userEmailTextbox = page.locator("#userEmail")
        this.passwordTextbox = page.locator("#userPassword")
        this.signInButton = page.locator("[value='Login']")

    }
    async gotoLoginUrl() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    }

    async validLogin(username, password) {
        await this.userEmailTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');

    }


}

module.exports = { LoginPage };

