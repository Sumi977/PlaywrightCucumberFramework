import { test, expect } from '@playwright/test';
const { POManager } = require('../pageobjects/POManager');
//json->string->js object
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
const { customtest } = require('../utils/test-base');

for (const data of dataSet) {
   test(`Client App login for ${data.productName}`, async ({ page }) => {

      const poManager = new POManager(page);

      const loginPage = poManager.getLoginPage();

      await loginPage.gotoLoginUrl();
      await loginPage.validLogin(data.username, data.password);

      const dashboardPage = poManager.getDashboardPage();

      await dashboardPage.searchProductAddToCart(data.productName);
      await dashboardPage.navigateToCart();

      const cartPage = poManager.getCartPage();

      await cartPage.verifyProductIsDisplayed(data.productName);

      await cartPage.checkout();

      const checkoutPage = poManager.getCheckoutPage();

      await checkoutPage.searchCountryAndSelect(data.countryName);
      await checkoutPage.clickOnPlaceOrderButton();

      const orderDetailsPage = poManager.getOrderDetailsPage();

      const orderId = await orderDetailsPage.verifyOrderConfirmationText();
      console.log(orderId);
      await orderDetailsPage.navigateToOrderHistoryPage();

      const orderHistorypage = poManager.getOrderHistoryPage();

      await orderHistorypage.searchForOrderIdAndSelect(orderId);
      expect(orderId.includes(await orderHistorypage.getOrderId())).toBeTruthy();

      await page.waitForTimeout(3000);




   })
};

customtest(`Client App Logon`, async ({ page, testDataForOrder }) => {

   const poManager = new POManager(page);

   const loginPage = poManager.getLoginPage();

   await loginPage.gotoLoginUrl();
   await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

   const dashboardPage = poManager.getDashboardPage();

   await dashboardPage.searchProductAddToCart(testDataForOrder.productName);
   await dashboardPage.navigateToCart();

   const cartPage = poManager.getCartPage();

   await cartPage.verifyProductIsDisplayed(testDataForOrder.productName);

   await cartPage.checkout();



})


