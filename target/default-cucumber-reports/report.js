$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/uiFeatures/Demo.feature");
formatter.feature({
  "name": "Demo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Super admin able to create user roles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Login as a \"super admin\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Moderator\" and \"Add Moderator\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter valid information and verify user created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});