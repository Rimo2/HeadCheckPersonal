Feature: Concussion check


  Scenario: Check the More Information page

    Given The user is on the Home page
    Then The user clicks on the More info button
    And Check the header of the More info page


  Scenario: Verify self concussion check while answering Yes for any of the 1st five questions

    Given The user is on the Home page
    Then The user clicks on the Concussion Check button
    And Accepts the T&C
    And I clicked on the Real Incident
    And I performed a self concussion check while answering Yes for any of the 1st five questions
    Then Verify the user is landed on the Contact Emergency screen


  Scenario: Verify self-concussion check by answering "No" for the 1st 5 questions and "Yes" for any subsequent 5 questions.

    Given The user is on the Home page
    Then The user clicks on the Concussion Check button
    And I clicked on the Real Incident
    And I performed a self concussion check while answering No for all the 1st five questions
    And I answered Yes for any subsequent five questions
    Then Verify the user is landed on the Go to Emergency or GP screen

  Scenario: Verify self-concussion check by answering "No" for the 1st 10 questions and "Yes" for any subsequent 10 questions.

    Given The user is on the Home page
    Then The user clicks on the Concussion Check button
    And I clicked on the Real Incident
    And I performed a self concussion check while answering No for all the 1st ten questions
    And I answered Yes for any subsequent ten questions
    Then Verify the user is landed on the Seek medical attention screen

 Scenario: Verify self-concussion check by answering "No" for all the 1st 20 questions
    Given The user is on the Home page
    Then The user clicks on the Concussion Check button
    And I clicked on the Real Incident
    And I performed a self concussion check while answering No for all the twenty questions
    Then Verify the user is landed on the Monitor for symptoms page







  Scenario: Verify  concussion check for another adult while answering Yes for any of the 1st five questions

    Given The user is on the Home page
    Then The user clicks on the Concussion Check button
    And I clicked on the Real Incident
    And I performed concussion check for an adult while answering Yes for any of the 1st five questions
    Then Verify the user is landed on the Contact Emergency screen


  Scenario: Verify concussion check for another adult by answering "No" for the 1st 5 questions and "Yes" for any subsequent 5 questions.

    Given The user is on the Home page
    Then The user clicks on the Concussion Check button
    And I clicked on the Real Incident
    And I performed concussion check for another adult while answering No for all the 1st five questions
    And I answered Yes for any subsequent five questions
    Then Verify the user is landed on the Go to Emergency or GP screen


  Scenario: Verify concussion check for an adult  by answering "No" for the 1st 10 questions and "Yes" for any subsequent 10 questions.

    Given The user is on the Home page
    Then The user clicks on the Concussion Check button
    And I clicked on the Real Incident
    And I performed a concussion check for an adult while answering No for all the 1st ten questions
    And I answered Yes for any subsequent ten questions
    Then Verify the user is landed on the Seek medical attention screen

  Scenario: Verify self-concussion check by answering "No" for all the 1st 20 questions
    Given The user is on the Home page
    Then The user clicks on the Concussion Check button
    And I clicked on the Real Incident
    And I performed a concussion check for an adult while answering No for all the twenty questions
    Then Verify the user is landed on the Monitor for symptoms page