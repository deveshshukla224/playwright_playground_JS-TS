Feature: Login to Dummy App

    Scenario: Login to Dummy App with valid credentials
        Given I am on the login page
        When I enter the username "one@gmail.com"
        And I enter the password "secret@1232344"
        And I click the login button
        # Then I should see the dashboard

