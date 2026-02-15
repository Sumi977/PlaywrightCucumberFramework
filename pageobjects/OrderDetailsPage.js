const { expect } = require('@playwright/test');
class OrderDetailsPage {
    constructor(page) {
        this.orderConfirmationText = page.locator('.hero-primary');
        this.orderIdText = page.locator('.em-spacer-1 .ng-star-inserted');
        this.orderHistoryLink = page.locator("[routerlink*='myorders']").last();
    }

    async verifyOrderConfirmationText() {
        const orderText = await this.orderConfirmationText.textContent();
        console.log(orderText);
        expect(this.orderConfirmationText).toHaveText(' Thankyou for the order. ');
        return await this.orderIdText.textContent();

    }

    async navigateToOrderHistoryPage() {
        await this.orderHistoryLink.click();

    }

}

module.exports = { OrderDetailsPage };