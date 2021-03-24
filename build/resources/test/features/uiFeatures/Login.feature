@webLogin
Feature: Login


  @login1
  Scenario: User shouldn't be able to login with invalid credentials
    Given navigate landing page
    When input invalid email and password then click login
    Then verify error message


  @login2
  Scenario Outline: As a user I should be login successfully
    Given navigate landing page
    When enter "<role>" credentials then click login
    Then verify Welcome "<message>"
    And click Sign out
    Then verify logged out successfuly
    Examples:
            |role        |message     |
            |superadmin  |Super Admin |
            |moderator   |Moderator   |
#            |editor      |Editor      |
#            |teacher     |Teacher     |
#            |student     |Student     |


#  @login3
    #This test scenario can extent login scenario
  #Scenario Outline: As a user I should be log out successfully
   # Given navigate landing page
    #When enter "<role>" credentials then click login
    #And click Sign out
    #Then verify logged out successfuly

#    Examples:
#      |role        |
#      |superadmin  |
#      |moderator   |
#      |editor      |
#      |teacher     |
#      |student     |

