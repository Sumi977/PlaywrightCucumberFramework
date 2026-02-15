const { Given, When, Then } = require('@cucumber/cucumber')
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test')
const playwright = require('@playwright/test')

Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions

    const loginPage = this.poManager.getLoginPage();

    await loginPage.gotoLoginUrl();
    await loginPage.validLogin(username, password);
});

When('Add {string} to Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const dashboardPage = this.poManager.getDashboardPage();

    await dashboardPage.searchProductAddToCart(productName);
    await dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const cartPage = this.poManager.getCartPage();

    await cartPage.verifyProductIsDisplayed(productName);
    await cartPage.checkout();
});

When('Select country {string} and place the order', { timeout: 60000 }, async function (countryName) {
    // Write code here that turns the phrase above into concrete actions
    const checkoutPage = this.poManager.getCheckoutPage();

    await checkoutPage.searchCountryAndSelect(countryName);
    await checkoutPage.clickOnPlaceOrderButton();

});

Then('Verify that the order is present in the OrderDetailsPage', async function () {
    // Write code here that turns the phrase above into concrete actions
    const orderDetailsPage = this.poManager.getOrderDetailsPage();

    this.orderId = await orderDetailsPage.verifyOrderConfirmationText();
    console.log(this.orderId);
    await orderDetailsPage.navigateToOrderHistoryPage();

});
Then('Verify the order present in OrderHistoryPage', async function () {
    // Write code here that turns the phrase above into concrete actions
    const orderHistorypage = this.poManager.getOrderHistoryPage();

    await orderHistorypage.searchForOrderIdAndSelect(this.orderId);
    expect(this.orderId.includes(await orderHistorypage.getOrderId())).toBeTruthy();

});

Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.goto("https://rahulshettyacademy.com/client");
    await this.page.locator("#userEmail").fill(username);
    await this.page.locator("#userPassword").fill(password);
    await this.page.locator("[value='Login']").click();
});

Then('Verify Error message displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.page.locator("button[routerlink*='myorders']").click();

    await this.page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' })
    )

    await this.page.locator("button:has-text('View')").first().click();


    await expect(this.page.locator('p.blink_me')).toHaveText('You are not authorize to view this order');
});

