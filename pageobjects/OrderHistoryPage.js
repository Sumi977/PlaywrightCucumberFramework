class OrderHistoryPage {
    constructor(page) {
        this.orderTable = page.locator('tbody');
        this.rows = page.locator('tbody tr');
        this.orderdIdDetails = page.locator(".col-text");
    }

    async searchForOrderIdAndSelect(orderId) {
        await this.orderTable.waitFor();
        const count = await this.rows.count();
        console.log(count);

        for (let i = 0; i < await count; i++) {
            const rowOrderId = await this.rows.nth(i).locator('th').textContent();
            if (await orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator('button').first().click();
                break;
            }
        }

    }
    async getOrderId() {
        return await this.orderdIdDetails.textContent();

    }


}
module.exports = { OrderHistoryPage };