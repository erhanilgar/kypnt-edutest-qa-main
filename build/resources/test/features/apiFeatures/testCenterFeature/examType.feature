@apiexamType

  Feature:  Exam types
    Scenario: Superadmin should be able to see all exam types
      Given user send get request to see exam type list


    Scenario: Superadmin should be able to create a new exam type
      Given user send Post request with valid exam type body and verify it
