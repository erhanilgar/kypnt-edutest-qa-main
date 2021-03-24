@apiSignUp
  Feature: Sign Up

    Scenario: User should be able to register successfully
      Given send post request with valid body and verify with status code