Feature: Demo

  Background:
    Given navigate landing page


  Scenario Outline: Super admin able to create user roles
    When Login as a "superadmin"
    And  User click "<Role>" and "<Add Role>"
    Then Enter valid information and verify "<Role created>"

    Examples:
      | Role      | Add Role      | Role created      |
      | Moderator | Add Moderator | Moderator created |
      | Editor    | Add Editor    | Editor created    |
#      | Salesman | Add Salesman | Salesman created |

  Scenario Outline: Super admin able to create some roles
    When Login as a "superadmin"
    And User click "<Role>" and "<Add Role>"
    Then Enter information and verify "<Role created>"

    Examples:
      | Role         | Add Role         | Role created         |
      | Teachers     | Add Teacher      | Teacher created      |
      | School Admin | Add School Admin | School admin created |


  Scenario Outline: Moderator able to create exam types
    When Login as a "moderator"
    And  User click "<Type>" and "<Add Type>"
    Then User enter information and click "<Language>" and verify "<verify message>"


    Examples:
      | Type       | Add Type      | Language | verify message    |
      | Exam Types | Add Exam Type | EN       | Exam Type created |
      | Exam Types | Add Exam Type | RU       | Exam Type created |
      | Exam Types | Add Exam Type | KZ       | Exam Type created |

    Scenario: Moderator able to create topic
      When Login as a "moderator"
      And User click "Topic Setup" and "Add Subject"


  @login2
  Scenario Outline: As a user I should be login successfully
    Given navigate landing page
    When enter "<role>" credentials then click login
    Then verify Welcome "<message>"
    And click Sign out
    Then verify logged out successfuly
    Examples:
      | role       | message     |
      | superadmin | Super Admin |
      | moderator  | Moderator   |
      | editor     | Editor      |
      | teacher    | Teacher     |
      | student    | Student     |
