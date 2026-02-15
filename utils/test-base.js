const base = require('@playwright/test')

exports.customtest = base.test.extend(
    {
        testDataForOrder: {
            username: "johnsmith26@gmail.com",
            password: "Learning@26",
            productName: "ZARA COAT 3",
            countryName: " United States"
        }


    }
)