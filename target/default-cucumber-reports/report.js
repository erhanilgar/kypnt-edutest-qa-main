$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/uiFeatures/Demo.feature");
formatter.feature({
  "name": "Demo",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regressionSuite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Super admin able to create user roles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createUser"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"superadmin\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click \"\u003cRole\u003e\" and \"\u003cAdd Role\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter valid information and verify \"\u003cRole created\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Role",
        "Add Role",
        "Role created"
      ]
    },
    {
      "cells": [
        "Moderator",
        "Add Moderator",
        "Moderator created"
      ]
    },
    {
      "cells": [
        "Editor",
        "Add Editor",
        "Editor created"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Super admin able to create user roles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@createUser"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"superadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Moderator\" and \"Add Moderator\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid information and verify \"Moderator created\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SuperAdminStepDef.enterValidInformationAndVerify(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Super admin able to create user roles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@createUser"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"superadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Editor\" and \"Add Editor\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid information and verify \"Editor created\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SuperAdminStepDef.enterValidInformationAndVerify(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Super admin able to create some roles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@create"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"superadmin\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click \"\u003cRole\u003e\" and \"\u003cAdd Role\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter information and verify \"\u003cRole created\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Role",
        "Add Role",
        "Role created"
      ]
    },
    {
      "cells": [
        "Teachers",
        "Add Teacher",
        "Teacher created"
      ]
    },
    {
      "cells": [
        "School Admin",
        "Add School Admin",
        "School Admin created"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Super admin able to create some roles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@create"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"superadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Teachers\" and \"Add Teacher\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter information and verify \"Teacher created\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SuperAdminStepDef.enterInformationAndVerify(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Super admin able to create some roles",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@create"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"superadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"School Admin\" and \"Add School Admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter information and verify \"School Admin created\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SuperAdminStepDef.enterInformationAndVerify(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Moderator able to create exam types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@examType"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"moderator\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click \"\u003cType\u003e\" and \"\u003cAdd Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enter information and click \"\u003cLanguage\u003e\" and verify \"\u003cverify message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Type",
        "Add Type",
        "Language",
        "verify message"
      ]
    },
    {
      "cells": [
        "Exam Types",
        "Add Exam Type",
        "EN",
        "Exam Type created!"
      ]
    },
    {
      "cells": [
        "Exam Types",
        "Add Exam Type",
        "RU",
        "Exam Type created!"
      ]
    },
    {
      "cells": [
        "Exam Types",
        "Add Exam Type",
        "KZ",
        "Exam Type created!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Moderator able to create exam types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@examType"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"moderator\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Exam Types\" and \"Add Exam Type\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter information and click \"EN\" and verify \"Exam Type created!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SuperAdminStepDef.userEnterInformationAndClickAndVerify(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Moderator able to create exam types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@examType"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"moderator\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Exam Types\" and \"Add Exam Type\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter information and click \"RU\" and verify \"Exam Type created!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SuperAdminStepDef.userEnterInformationAndClickAndVerify(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Moderator able to create exam types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@examType"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"moderator\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Exam Types\" and \"Add Exam Type\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter information and click \"KZ\" and verify \"Exam Type created!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SuperAdminStepDef.userEnterInformationAndClickAndVerify(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Exam Type created!]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.edutest.stepDefinitions.ui.SuperAdminStepDef.userEnterInformationAndClickAndVerify(SuperAdminStepDef.java:96)\n\tat ✽.User enter information and click \"KZ\" and verify \"Exam Type created!\"(file:src/test/resources/features/uiFeatures/Demo.feature:34)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Moderator able to create topic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createTopic"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"moderator\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click \"Topic Setup\" and \"Add Subject\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enter information and click \"\u003cLanguage\u003e\" and verify \"\u003cverify message\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User able to create section under the subject",
  "keyword": "And "
});
formatter.step({
  "name": "User able to add \"topic\" under the section and verify \"Created Successfully\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Language",
        "verify message"
      ]
    },
    {
      "cells": [
        "EN",
        "Subject created"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Moderator able to create topic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@createTopic"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"moderator\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Topic Setup\" and \"Add Subject\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter information and click \"EN\" and verify \"Subject created\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SuperAdminStepDef.userEnterInformationAndClickAndVerify(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to create section under the subject",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.userAbleToCreateSectionUnderTheSubject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to add \"topic\" under the section and verify \"Created Successfully\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.userAbleToAddUnderTheSectionAndVerify(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Editor able to create question",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@createQuestion"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Login as a \"editor\"",
  "keyword": "When "
});
formatter.match({
  "location": "SuperAdminStepDef.login_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"Questions\" and \"Add Question\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.user_click_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to select topic \"Subject\" \"Section\" \"Topic\"",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.userAbleToSelectTopic(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to select \"EN\" \"MULTI_SELECT\" and write question",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminStepDef.userAbleToSelectAndWriteQuestion(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a user I should be login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login2"
    }
  ]
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "enter \"\u003crole\u003e\" credentials then click login",
  "keyword": "When "
});
formatter.step({
  "name": "verify Welcome \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "role",
        "message"
      ]
    },
    {
      "cells": [
        "superadmin",
        "Super Admin"
      ]
    },
    {
      "cells": [
        "moderator",
        "Moderator"
      ]
    },
    {
      "cells": [
        "editor",
        "Editor"
      ]
    },
    {
      "cells": [
        "teacher",
        "Teacher"
      ]
    },
    {
      "cells": [
        "student",
        "Student"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@login2"
    }
  ]
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"superadmin\" credentials then click login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.enter_credentials_then_click_login(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"MuiButton-label\"\u003e...\u003c/span\u003e is not clickable at point (1082, 50). Other element would receive the click: \u003cdiv class\u003d\"MuiDialog-container MuiDialog-scrollPaper\" role\u003d\"none presentation\" tabindex\u003d\"-1\" style\u003d\"opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Erhan-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4ee:2e98:9ecf:c8b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/lc/wf9jqgv92pd...}, goog:chromeOptions: {debuggerAddress: localhost:60930}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e7de889b5e93178db198678492469406\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\n\tat com.edutest.pages.ui.Login.enterRoleCredentialsAndClickLogin(Login.java:91)\n\tat com.edutest.stepDefinitions.ui.LoginStepDef.enter_credentials_then_click_login(LoginStepDef.java:23)\n\tat ✽.enter \"superadmin\" credentials then click login(file:src/test/resources/features/uiFeatures/Demo.feature:65)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify Welcome \"Super Admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_Welcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.click_Sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_logged_out_successfuly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@login2"
    }
  ]
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"moderator\" credentials then click login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.enter_credentials_then_click_login(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"MuiButton-label\"\u003e...\u003c/span\u003e is not clickable at point (1082, 50). Other element would receive the click: \u003cdiv class\u003d\"MuiDialog-container MuiDialog-scrollPaper\" role\u003d\"none presentation\" tabindex\u003d\"-1\" style\u003d\"opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Erhan-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4ee:2e98:9ecf:c8b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/lc/wf9jqgv92pd...}, goog:chromeOptions: {debuggerAddress: localhost:61130}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7485c3227b686017617e668faf9f54f3\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\n\tat com.edutest.pages.ui.Login.enterRoleCredentialsAndClickLogin(Login.java:91)\n\tat com.edutest.stepDefinitions.ui.LoginStepDef.enter_credentials_then_click_login(LoginStepDef.java:23)\n\tat ✽.enter \"moderator\" credentials then click login(file:src/test/resources/features/uiFeatures/Demo.feature:65)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify Welcome \"Moderator\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_Welcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.click_Sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_logged_out_successfuly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@login2"
    }
  ]
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"editor\" credentials then click login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.enter_credentials_then_click_login(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"MuiButton-label\"\u003e...\u003c/span\u003e is not clickable at point (1082, 50). Other element would receive the click: \u003cdiv class\u003d\"MuiDialog-container MuiDialog-scrollPaper\" role\u003d\"none presentation\" tabindex\u003d\"-1\" style\u003d\"opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Erhan-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4ee:2e98:9ecf:c8b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/lc/wf9jqgv92pd...}, goog:chromeOptions: {debuggerAddress: localhost:61306}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6fe5fd3ee16eb9369894907d405f48e5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\n\tat com.edutest.pages.ui.Login.enterRoleCredentialsAndClickLogin(Login.java:91)\n\tat com.edutest.stepDefinitions.ui.LoginStepDef.enter_credentials_then_click_login(LoginStepDef.java:23)\n\tat ✽.enter \"editor\" credentials then click login(file:src/test/resources/features/uiFeatures/Demo.feature:65)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify Welcome \"Editor\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_Welcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.click_Sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_logged_out_successfuly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@login2"
    }
  ]
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"teacher\" credentials then click login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.enter_credentials_then_click_login(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"MuiButton-label\"\u003e...\u003c/span\u003e is not clickable at point (1082, 50). Other element would receive the click: \u003cdiv class\u003d\"MuiDialog-container MuiDialog-scrollPaper\" role\u003d\"none presentation\" tabindex\u003d\"-1\" style\u003d\"opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Erhan-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4ee:2e98:9ecf:c8b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/lc/wf9jqgv92pd...}, goog:chromeOptions: {debuggerAddress: localhost:61473}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 018b4a4d5511a0a2e3935cb4d791a124\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\n\tat com.edutest.pages.ui.Login.enterRoleCredentialsAndClickLogin(Login.java:91)\n\tat com.edutest.stepDefinitions.ui.LoginStepDef.enter_credentials_then_click_login(LoginStepDef.java:23)\n\tat ✽.enter \"teacher\" credentials then click login(file:src/test/resources/features/uiFeatures/Demo.feature:65)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify Welcome \"Teacher\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_Welcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.click_Sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_logged_out_successfuly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressionSuite"
    },
    {
      "name": "@login2"
    }
  ]
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentStepDef.navigate_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"student\" credentials then click login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.enter_credentials_then_click_login(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"MuiButton-label\"\u003e...\u003c/span\u003e is not clickable at point (1082, 50). Other element would receive the click: \u003cdiv class\u003d\"MuiDialog-container MuiDialog-scrollPaper\" role\u003d\"none presentation\" tabindex\u003d\"-1\" style\u003d\"opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Erhan-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4ee:2e98:9ecf:c8b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/lc/wf9jqgv92pd...}, goog:chromeOptions: {debuggerAddress: localhost:61675}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2181f9e622e7f43248ef543b614b49f\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\n\tat com.edutest.pages.ui.Login.enterRoleCredentialsAndClickLogin(Login.java:91)\n\tat com.edutest.stepDefinitions.ui.LoginStepDef.enter_credentials_then_click_login(LoginStepDef.java:23)\n\tat ✽.enter \"student\" credentials then click login(file:src/test/resources/features/uiFeatures/Demo.feature:65)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify Welcome \"Student\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_Welcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.click_Sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_logged_out_successfuly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});