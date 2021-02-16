@api
  Feature: Login


    Scenario: Login
      Given  user go to landing page
      When enter credentials
      Then click login
