const { test, expect } = require('@playwright/test');
class CartPage {

    constructor(page) {
        this.page = page;
        this.cartProducts = page.locator('div li').first();
        this.cartItems = page.locator('.cart');
        this.checkoutButton = page.locator("text=Checkout");

    }

    async verifyProductIsDisplayed(productName) {
        const locator = this.getProductLocator(productName);
        await expect(locator).toBeVisible();

    }
    async checkout() {
        await this.checkoutButton.click();
    }

    getProductLocator(productName) {
        return this.page.locator("h3:has-text('" + productName + "')");

    }


}
module.exports = { CartPage };


/*async searchProductBuyNowButton(productName) {
       const count = await this.cartItems.count();
       console.log(count);
       for (let i = 0; i < count; i++) {
           if (await this.cartItems.nth(i).locator('h3').textContent() === productName) {
               await this.checkoutButton.click();
               break;

           }

       }
   }*/