@webStudent

  Feature: Student

    Scenario: Student should be able register successfully
      Given navigate landing page
      When user click register button
      And enter valid credentials
      And click I agree checkbox
      And click register button
      Then user enter credentials in login page
      And click login button
      Then verify login successful
      #Then verify successful registration

