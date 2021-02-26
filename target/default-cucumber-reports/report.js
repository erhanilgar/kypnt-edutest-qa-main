$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/apiFeatures/testCenterFeature/studentController.feature");
formatter.feature({
  "name": "Student Controller",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Student should be able to Post with Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@student"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The user should be able to login as a student",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The user post id 12",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The status code should be 200",
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