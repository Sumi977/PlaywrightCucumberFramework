class CheckoutPage {
    constructor(page) {
        this.selectCountryInputbox = page.locator("[placeholder='Select Country']");
        this.countryList = page.locator("[class*='ta-results']");
        this.placeOrder = page.getByText('Place Order ');
        this.emailId = page.getByLabel(".user__name [type='text']").first();


    }

    async searchCountryAndSelect(countryName) {

        // 1. Type into the box (ensure you clicked 'Checkout' in the test file first!)
        await this.selectCountryInputbox.pressSequentially("uni", { delay: 100 });

        // 2. Wait for the results container to be visible
        await this.countryList.last().waitFor();

        //const count = await this.countryList.count();
        //console.log(await this.countryList)
        //console.log(countries);

        //console.log(count);

        //await this.countryList.nth(5).waitFor();



        for (let i = 0; i < await this.countryList.locator('button').count(); i++) {

            const name = await this.countryList.locator('button').nth(i).textContent();
            console.log(name)

            if (name === countryName) {
                //const chooseCountry = await this.selectCountryInputboxcountryList.nth(i).textContent();
                await this.countryList.locator('button').nth(i).click();
                break;
            }

        }


    }

    async verifyEmailAddress(userName) {
        await expect(this.emailId).toHaveText(userName);
    }


    async clickOnPlaceOrderButton() {
        await this.placeOrder.click();
    }




}


module.exports = { CheckoutPage };