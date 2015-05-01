Feature: The app should generate a unique visitor id
  Scenario:
    Given I am a new user
    When I navigate to "/"
    Then VisitorId should be new

  Scenario:
    When I navigate to "/"
    Then VisitorId should be the same