Feature: The app should generate a unique visitor id
  Scenario:
    Given I am a new user
    When I navigate to "/"
    Then The "visitorId" should be new

  Scenario:
    When I navigate to "/"
    Then The "visitorId" should be the same

Feature: The "app" should retain visitorId when signing in and out
  Scenario:
    Given I am a new user
    When I navigate to "/"
    Then The "visitorId" should be new

  Scenario:
    Given I navigate to "/"
    When I signup
    Then The "visitorId" should be the same
    And The "userId" should be new

  Scenario:
    Given I navigate to "/"
    When I signout
    Then The "visitorId" should be the same
    And The "userId" should be empty

  Scenario:
    Given I navigate to "/"
    When I signin
    Then The "visitorId" should be the same
    And The "userId" should be the same