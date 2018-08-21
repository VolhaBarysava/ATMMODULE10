Feature: mail.ru test

  Background: 
    Given I open mail.ru

  Scenario Outline: Login to mail.ru
    When I set <login> and <password>
    Then I login into account with <email>

    Examples: 
      | login          | password      | email                  |
      | vra_atmmodule5 | 123456789_Vra | vra_atmmodule5@mail.ru |
      | vra_atmmodule6 | 123456789_Vra | vra_atmmodule6@mail.ru |

  Scenario: Mail creation
    When I login to account by User:
      | login          | password      | email                  |
      | vra_atmmodule5 | 123456789_Vra | vra_atmmodule5@mail.ru |
    And I create email
    Then I check if email exists in Draft

  Scenario: Mail sending
    When I login to account by User:
      | login          | password      | email                  |
      | vra_atmmodule5 | 123456789_Vra | vra_atmmodule5@mail.ru |
    And I open email with index 0 in Draft folder
    And I send email
    Then I check that email exists in Sent folder
    But I logout
    When I login to account by User:
      | login          | password      | email                  |
      | vra_atmmodule6 | 123456789_Vra | vra_atmmodule6@mail.ru |
    Then I see email in Incoming folder

  Scenario: Mail deletion
    When I login to account by User:
      | login          | password      | email                  |
      | vra_atmmodule6 | 123456789_Vra | vra_atmmodule6@mail.ru |
    And I delete Incoming mail with index 0
    Then I check that email exists in Basket
