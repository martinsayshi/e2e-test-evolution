Feature: Bootcamp Testing
    Background: 
        Given I'm on the home page

    Scenario: Search bar
        When I enter the word "Windows" in the search bar
        * I click the search button
        Then I should see that at least one item appears

    Scenario: Logo Image to Main Page
        When I click on "Today's Best Deals" tab
        * I click on the Internet shop logo
        Then I should be taken to the main page