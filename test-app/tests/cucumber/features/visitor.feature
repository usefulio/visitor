Feature: The app should generate a visitor id
  Scenario:
    Given I am a new user
    When I navigate to "/"
    Then I should see a visitorId