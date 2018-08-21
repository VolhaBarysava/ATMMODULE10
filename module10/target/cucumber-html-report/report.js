$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MailRu.feature");
formatter.feature({
  "line": 1,
  "name": "mail.ru test",
  "description": "",
  "id": "mail.ru-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login to mail.ru",
  "description": "",
  "id": "mail.ru-test;login-to-mail.ru",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I set \u003clogin\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I login into account with \u003cemail\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "mail.ru-test;login-to-mail.ru;",
  "rows": [
    {
      "cells": [
        "login",
        "password",
        "email"
      ],
      "line": 11,
      "id": "mail.ru-test;login-to-mail.ru;;1"
    },
    {
      "cells": [
        "vra_atmmodule5",
        "123456789_Vra",
        "vra_atmmodule5@mail.ru"
      ],
      "line": 12,
      "id": "mail.ru-test;login-to-mail.ru;;2"
    },
    {
      "cells": [
        "vra_atmmodule6",
        "123456789_Vra",
        "vra_atmmodule6@mail.ru"
      ],
      "line": 13,
      "id": "mail.ru-test;login-to-mail.ru;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4087543366,
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
  "name": "I open mail.ru",
  "keyword": "Given "
});
formatter.match({
  "location": "MailRuStepDefinitions.openSite()"
});
formatter.result({
  "duration": 1524624198,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login to mail.ru",
  "description": "",
  "id": "mail.ru-test;login-to-mail.ru;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I set vra_atmmodule5 and 123456789_Vra",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I login into account with vra_atmmodule5@mail.ru",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vra_atmmodule5",
      "offset": 6
    },
    {
      "val": "123456789_Vra",
      "offset": 25
    }
  ],
  "location": "MailRuStepDefinitions.setLoginPassword(String,String)"
});
formatter.result({
  "duration": 587734358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vra_atmmodule5@mail.ru",
      "offset": 26
    }
  ],
  "location": "MailRuStepDefinitions.iCheckEmailIntoAccount(String)"
});
formatter.result({
  "duration": 4573184957,
  "status": "passed"
});
formatter.after({
  "duration": 1768470033,
  "status": "passed"
});
formatter.before({
  "duration": 3421189193,
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
  "name": "I open mail.ru",
  "keyword": "Given "
});
formatter.match({
  "location": "MailRuStepDefinitions.openSite()"
});
formatter.result({
  "duration": 1667631944,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to mail.ru",
  "description": "",
  "id": "mail.ru-test;login-to-mail.ru;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I set vra_atmmodule6 and 123456789_Vra",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I login into account with vra_atmmodule6@mail.ru",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vra_atmmodule6",
      "offset": 6
    },
    {
      "val": "123456789_Vra",
      "offset": 25
    }
  ],
  "location": "MailRuStepDefinitions.setLoginPassword(String,String)"
});
formatter.result({
  "duration": 533342806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vra_atmmodule6@mail.ru",
      "offset": 26
    }
  ],
  "location": "MailRuStepDefinitions.iCheckEmailIntoAccount(String)"
});
formatter.result({
  "duration": 4152688532,
  "status": "passed"
});
formatter.after({
  "duration": 2165892488,
  "status": "passed"
});
formatter.before({
  "duration": 3383798028,
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
  "name": "I open mail.ru",
  "keyword": "Given "
});
formatter.match({
  "location": "MailRuStepDefinitions.openSite()"
});
formatter.result({
  "duration": 1683402348,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Mail creation",
  "description": "",
  "id": "mail.ru-test;mail-creation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I login to account by User:",
  "rows": [
    {
      "cells": [
        "login",
        "password",
        "email"
      ],
      "line": 17
    },
    {
      "cells": [
        "vra_atmmodule5",
        "123456789_Vra",
        "vra_atmmodule5@mail.ru"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I create email",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I check if email exists in Draft",
  "keyword": "Then "
});
formatter.match({
  "location": "MailRuStepDefinitions.login(DataTable)"
});
formatter.result({
  "duration": 4571752917,
  "status": "passed"
});
formatter.match({
  "location": "MailRuStepDefinitions.iCreateEmail()"
});
formatter.result({
  "duration": 2901896740,
  "status": "passed"
});
formatter.match({
  "location": "MailRuStepDefinitions.iCheckIfEmailExistsInDraft()"
});
formatter.result({
  "duration": 300890430,
  "status": "passed"
});
formatter.after({
  "duration": 2188404867,
  "status": "passed"
});
formatter.before({
  "duration": 3431004042,
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
  "name": "I open mail.ru",
  "keyword": "Given "
});
formatter.match({
  "location": "MailRuStepDefinitions.openSite()"
});
formatter.result({
  "duration": 1523344181,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Mail sending",
  "description": "",
  "id": "mail.ru-test;mail-sending",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I login to account by User:",
  "rows": [
    {
      "cells": [
        "login",
        "password",
        "email"
      ],
      "line": 24
    },
    {
      "cells": [
        "vra_atmmodule5",
        "123456789_Vra",
        "vra_atmmodule5@mail.ru"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I open email with index 0 in Draft folder",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I send email",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I check that email exists in Sent folder",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I logout",
  "keyword": "But "
});
formatter.step({
  "line": 30,
  "name": "I login to account by User:",
  "rows": [
    {
      "cells": [
        "login",
        "password",
        "email"
      ],
      "line": 31
    },
    {
      "cells": [
        "vra_atmmodule6",
        "123456789_Vra",
        "vra_atmmodule6@mail.ru"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I see email in Incoming folder",
  "keyword": "Then "
});
formatter.match({
  "location": "MailRuStepDefinitions.login(DataTable)"
});
formatter.result({
  "duration": 4823307714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "MailRuStepDefinitions.iOpenEmailInDraftFolder(int)"
});
formatter.result({
  "duration": 989075120,
  "status": "passed"
});
formatter.match({
  "location": "MailRuStepDefinitions.iSendEmail()"
});
formatter.result({
  "duration": 3948651814,
  "status": "passed"
});
formatter.match({
  "location": "MailRuStepDefinitions.iCheckThatEmailExistsInSentFolder()"
});
formatter.result({
  "duration": 361748776,
  "status": "passed"
});
formatter.match({
  "location": "MailRuStepDefinitions.iLogout()"
});
formatter.result({
  "duration": 1804055833,
  "status": "passed"
});
formatter.match({
  "location": "MailRuStepDefinitions.login(DataTable)"
});
formatter.result({
  "duration": 3056892572,
  "status": "passed"
});
formatter.match({
  "location": "MailRuStepDefinitions.iSeeEmailWithIndexInIncomingFolder()"
});
formatter.result({
  "duration": 200513546,
  "status": "passed"
});
formatter.after({
  "duration": 1894129405,
  "status": "passed"
});
formatter.before({
  "duration": 3406602588,
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
  "name": "I open mail.ru",
  "keyword": "Given "
});
formatter.match({
  "location": "MailRuStepDefinitions.openSite()"
});
formatter.result({
  "duration": 1486714739,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Mail deletion",
  "description": "",
  "id": "mail.ru-test;mail-deletion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I login to account by User:",
  "rows": [
    {
      "cells": [
        "login",
        "password",
        "email"
      ],
      "line": 37
    },
    {
      "cells": [
        "vra_atmmodule6",
        "123456789_Vra",
        "vra_atmmodule6@mail.ru"
      ],
      "line": 38
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I delete Incoming mail with index 0",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I check that email exists in Basket",
  "keyword": "Then "
});
formatter.match({
  "location": "MailRuStepDefinitions.login(DataTable)"
});
formatter.result({
  "duration": 4476241441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 34
    }
  ],
  "location": "MailRuStepDefinitions.iDeleteIncomingMailWithIndex(int)"
});
formatter.result({
  "duration": 3315596026,
  "status": "passed"
});
formatter.match({
  "location": "MailRuStepDefinitions.iCheckThatEmailExistsInBasket()"
});
formatter.result({
  "duration": 713909136,
  "status": "passed"
});
formatter.after({
  "duration": 1955367489,
  "status": "passed"
});
});