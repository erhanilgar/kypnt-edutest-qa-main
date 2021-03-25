@regressionSuite
Feature: Demo

  Background:
    Given navigate landing page

  @createUser @smoke
  Scenario Outline: Super admin able to create user roles
    When Login as a "superadmin"
    And  User click "<Role>" and "<Add Role>"
    Then Enter valid information and verify "<Role created>"

    Examples:
      | Role      | Add Role      | Role created      |
      | Moderator | Add Moderator | Moderator created |
      | Editor    | Add Editor    | Editor created    |

  @create @smoke
  Scenario Outline: Super admin able to create some roles
    When Login as a "superadmin"
    And User click "<Role>" and "<Add Role>"
    Then Enter information and verify "<Role created>"

    Examples:
      | Role         | Add Role         | Role created         |
      | Teachers     | Add Teacher      | Teacher created      |
      | School Admin | Add School Admin | School admin created |
  #    | Salesman     | Add Salesman     | Salesman created     |

  @examType @smoke
  Scenario Outline: Moderator able to create exam types
    When Login as a "moderator"
    And  User click "<Type>" and "<Add Type>"
    Then User enter information and click "<Language>" and verify "<verify message>"

    Examples:
      | Type       | Add Type      | Language | verify message     |
      | Exam Types | Add Exam Type | EN       | Exam Type created! |
      | Exam Types | Add Exam Type | RU       | Exam Type created! |
      | Exam Types | Add Exam Type | KZ       | Exam Type created! |

  @createTopic @smoke
  Scenario Outline: Moderator able to create topic
    When Login as a "moderator"
    And User click "Topic Setup" and "Add Subject"
    Then User enter information and click "<Language>" and verify "<verify message>"
    And User able to create section under the subject
    And User able to add "topic" under the section and verify "Created successfully"

    Examples:
      | Language | verify message  |
      | EN       | Subject created |

  @createQuestion @smoke
  Scenario: Editor able to create question
    When Login as a "editor"
    And User click "Questions" and "Add Question"
    And User able to select topic "Subject" "Section" "Topic"
    And User able to select "EN" "MULTI_SELECT" and write question


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

