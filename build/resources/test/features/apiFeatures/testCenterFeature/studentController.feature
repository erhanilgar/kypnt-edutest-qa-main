Feature: Student Controller
  @student
  Scenario: Student should be able to Post with Id
    Given The user should be able to login as a "Student"
    When  The user get id 50
    Then  The status code should be 200
    And   The users fullName should be "Alix Kihn"
    And   The user info should match database result info


  Scenario: super admin put information
    Given The user should be able to login as a "Super Admin"
    Then The user put id 40
    Then The status code should be 204
    
    Scenario: super admin should delete 
      Given The user should be able to login as a "Super Admin"
      When The user delete id 60
      Then The status code should be 204




