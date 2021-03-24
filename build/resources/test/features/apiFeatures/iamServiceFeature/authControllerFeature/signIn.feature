@apiSignIn

  Feature: Sign In
    Scenario: user should be able to sign in with valid credentials
      Given send post request with valid email and password and verify