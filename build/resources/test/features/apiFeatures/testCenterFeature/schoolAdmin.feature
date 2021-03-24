Feature: School Admin CRUD

  @get
  Scenario: School Admin should be able to get
    Given The user should be able to login as a "Super Admin"
    When When user gets school admins
    Then The status code should be 200

  @post
  Scenario: School admin should be able to post request
    Given The user should be able to login as a "Super Admin"
    When The user post user information
    Then The status code should be 201

  @get
  Scenario: School admin should be able to get request by id
    Given The user should be able to login as a "Super Admin"
    When The user should be able to get request by id 10
    Then The status code should be 200

  @put
  Scenario: School admin should be able to put by id
    Given The user should be able to login as a "Super Admin"
    When The user should be able to put by id 9
    Then The status code should be 204

  @delete
  Scenario: School admin should be able to delete request by id
    Given The user should be able to login as a "Super Admin"
    When The user should be able to delete by id 22
    Then The status code should be 204
       



