Feature: Ecommerce error validation

    @Validation

    Scenario Outline: Placing the order
        Given a login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error message displayed


        Examples:
            | username              | password    |
            | johnsmith26@gmail.com | Learning@26 |
            | shyamkong@gmail.com   | Learning$26 |