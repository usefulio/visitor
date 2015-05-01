Feature: The app should load without errors
  Scenario:
    Given I am a new user
    When I navigate to "/"
    Then I should see the title "test-app"