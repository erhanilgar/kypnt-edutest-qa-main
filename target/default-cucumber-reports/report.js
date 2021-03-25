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
  ],
  "tags": [
    {
      "name": "@createRole"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
    },
    {
      "name": "@createRole"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Moderator\" and \"Add Moderator\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter valid information and verify \"Moderator created\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
    },
    {
      "name": "@createRole"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Editor\" and \"Add Editor\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter valid information and verify \"Editor created\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "School admin created"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Teachers\" and \"Add Teacher\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter information and verify \"Teacher created\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"School Admin\" and \"Add School Admin\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter information and verify \"School admin created\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Exam Types\" and \"Add Exam Type\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enter information and click \"EN\" and verify \"Exam Type created!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Exam Types\" and \"Add Exam Type\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enter information and click \"RU\" and verify \"Exam Type created!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Exam Types\" and \"Add Exam Type\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enter information and click \"KZ\" and verify \"Exam Type created!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "User able to add \"topic\" under the section and verify \"Created successfully\"",
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
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Topic Setup\" and \"Add Subject\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enter information and click \"EN\" and verify \"Subject created\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User able to create section under the subject",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User able to add \"topic\" under the section and verify \"Created successfully\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click \"Questions\" and \"Add Question\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User able to select topic \"Subject\" \"Section\" \"Topic\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User able to select \"EN\" \"MULTI_SELECT\" and write question",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "enter \"superadmin\" credentials then click login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify Welcome \"Super Admin\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "enter \"moderator\" credentials then click login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify Welcome \"Moderator\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "enter \"editor\" credentials then click login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify Welcome \"Editor\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "enter \"teacher\" credentials then click login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify Welcome \"Teacher\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "navigate landing page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "enter \"student\" credentials then click login",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify Welcome \"Student\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click Sign out",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify logged out successfuly",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});