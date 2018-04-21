$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Login verification",
  "description": "",
  "id": "login-verification",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicked on browser icon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Browser is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 256205048,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicked_on_browser_icon()"
});
formatter.result({
  "duration": 603505,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_opened()"
});
formatter.result({
  "duration": 81596,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Home page login with Data Table",
  "description": "",
  "id": "login-verification;home-page-login-with-data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User open Netbanking login page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User signup to application",
  "rows": [
    {
      "cells": [
        "Mohan",
        "Kumar",
        "mohankumar@abcd.com",
        "0435678876"
      ],
      "line": 37
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Account details are seen",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_netbanking_login_page()"
});
formatter.result({
  "duration": 349479,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_signup_to_application(DataTable)"
});
formatter.result({
  "duration": 2666509,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 89294,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.account_details_are_seen()"
});
formatter.result({
  "duration": 88268,
  "status": "passed"
});
formatter.after({
  "duration": 144718,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Home page login when Parameterized",
  "description": "",
  "id": "login-verification;home-page-login-when-parameterized",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User open Netbanking login page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User login to application with \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Account details are seen",
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "login-verification;home-page-login-when-parameterized;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 51,
      "id": "login-verification;home-page-login-when-parameterized;;1"
    },
    {
      "cells": [
        "Mohan",
        "Pass1"
      ],
      "line": 52,
      "id": "login-verification;home-page-login-when-parameterized;;2"
    },
    {
      "cells": [
        "Kumar",
        "Pass2"
      ],
      "line": 53,
      "id": "login-verification;home-page-login-when-parameterized;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicked on browser icon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Browser is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 137534,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicked_on_browser_icon()"
});
formatter.result({
  "duration": 317148,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_opened()"
});
formatter.result({
  "duration": 110848,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Home page login when Parameterized",
  "description": "",
  "id": "login-verification;home-page-login-when-parameterized;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User open Netbanking login page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User login to application with Mohan and Pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Account details are seen",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_netbanking_login_page()"
});
formatter.result({
  "duration": 97506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohan",
      "offset": 31
    },
    {
      "val": "Pass1",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.user_login_to_application_with_and(String,String)"
});
formatter.result({
  "duration": 6028384,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 106742,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.account_details_are_seen()"
});
formatter.result({
  "duration": 282252,
  "status": "passed"
});
formatter.after({
  "duration": 138560,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicked on browser icon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Browser is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 178075,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicked_on_browser_icon()"
});
formatter.result({
  "duration": 130863,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_opened()"
});
formatter.result({
  "duration": 74925,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Home page login when Parameterized",
  "description": "",
  "id": "login-verification;home-page-login-when-parameterized;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Regtest"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User open Netbanking login page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User login to application with Kumar and Pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Account details are seen",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_netbanking_login_page()"
});
formatter.result({
  "duration": 77490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kumar",
      "offset": 31
    },
    {
      "val": "Pass2",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.user_login_to_application_with_and(String,String)"
});
formatter.result({
  "duration": 208866,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 278659,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.account_details_are_seen()"
});
formatter.result({
  "duration": 78518,
  "status": "passed"
});
formatter.after({
  "duration": 83649,
  "status": "passed"
});
});