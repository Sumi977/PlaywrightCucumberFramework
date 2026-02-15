Feature: Ecommerce validation

    @Regression

    Scenario: Placing the order
        Given a login to Ecommerce application with "johnsmith26@gmail.com" and "Learning@26"
        When Add "ZARA COAT 3" to Cart
        Then Verify "ZARA COAT 3" is displayed in the Cart
        When Select country " United States" and place the order
        Then Verify that the order is present in the OrderDetailsPage
        Then Verify the order present in OrderHistoryPage



    @Validation

    Scenario Outline: Placing the order
        Given a login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error message displayed


        Examples:
            | username              | password    |
            | johnsmith26@gmail.com | Learning@26 |
            | shyamkong@gmail.com   | Learning$26 |

