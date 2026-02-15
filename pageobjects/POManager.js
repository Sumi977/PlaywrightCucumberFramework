const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { CartPage } = require('./CartPage');
const { CheckoutPage } = require('./CheckoutPage');
const { OrderDetailsPage } = require('./OrderDetailsPage');
const { OrderHistoryPage } = require('./OrderHistoryPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.orderDetailsPage = new OrderDetailsPage(this.page);
        this.orderHistoryPage = new OrderHistoryPage(this.page);

    }
    getLoginPage() {
        return this.loginPage;
    }

    getCartPage() {
        return this.cartPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
    getCheckoutPage() {
        return this.checkoutPage;
    }
    getOrderDetailsPage() {
        return this.orderDetailsPage;
    }
    getOrderHistoryPage() {
        return this.orderHistoryPage;
    }
}
module.exports = { POManager };