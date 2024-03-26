import {Given,Then } from "@badeball/cypress-cucumber-preprocessor";
import {GetStarted_page} from '../pages/getStarted_page';
import  {Home_page} from "../pages/home_page";
import {Concussion_check} from "../pages/concussion_check"
import {More_info_page} from "../pages/more_info_page";

const homePage = new Home_page();
const concussion_check: Concussion_check = new Concussion_check();
const more_ino:More_info_page = new More_info_page();


Given("The user is on the Home page", function () {


    homePage.visitWelcomePage();



});

    Then(/^The user clicks on the Concussion Check button$/, function () {

        homePage.click_on_concussion_check();

    });
    Then(/^I clicked on the Real Incident$/, function () {

        concussion_check.click_on_real_incident();

    });


    Then(/^I performed a concussion check for myself$/, function () {
        concussion_check.click_on_myself();
        concussion_check.click_on_continue();

        for (let i = 0; i < 5; i++) {
            concussion_check.provide_ans_no();
        }

        concussion_check.provide_ans_yes();

        for (let i = 0; i < 4; i++) {
            concussion_check.provide_ans_no();
        }

    });


    Then(/^The user clicks on the More info button$/, function () {

        cy.get('ion-buttons[slot="end"]').find('ion-button.headcheck-skip-button')
            .should('be.visible').then(($button) => {
            // If the Skip button is visible, click on it
            if ($button.length > 0) {
                cy.wrap($button).click()
            } else {
                // If the Skip button is not visible, log a message
                cy.log('Skip button is not visible.')

            }
        });

        homePage.click_on_more_information();

        //  cy.scrollTo('bottom', {ensureScrollable: false});
    });
    Then(/^Check the header of the More info page$/, function () {
        more_ino.check_more_info_header();
    });


    Then(/^I performed a self concussion check while answering Yes for any of the 1st five questions$/, function () {

        concussion_check.click_on_myself();
        concussion_check.click_on_continue();
        for (let i = 0; i < 4; i++) {
            concussion_check.provide_ans_no();
        }
        concussion_check.provide_ans_yes();
    });


    Then(/^Verify the user is landed on the Contact Emergency screen$/, function () {

        concussion_check.check_contact_emergency_screen();
    });


    Then(/^I performed a self concussion check while answering No for all the 1st five questions$/, function () {
        concussion_check.click_on_myself();
        concussion_check.click_on_continue();
        for (let i = 0; i < 5; i++) {
            concussion_check.provide_ans_no();
        }
    });

    Then(/^I answered Yes for any subsequent five questions$/, function () {
        concussion_check.provide_ans_yes();
        for (let i = 0; i < 4; i++) {
            concussion_check.provide_ans_no();
        }
    });


    Then(/^Verify the user is landed on the Go to Emergency or GP screen$/, function () {
        concussion_check.check_go_to_emergency_gp_screen()
    });


    Then(/^I performed a self concussion check while answering No for all the 1st ten questions$/, function () {
        concussion_check.click_on_myself();
        concussion_check.click_on_continue();
        for (let i = 0; i < 10; i++) {
            concussion_check.provide_ans_no();
        }
    });
    Then(/^I answered Yes for any subsequent ten questions$/, function () {

        for (let i = 0; i < 9; i++) {
            concussion_check.provide_ans_no();
        }
        concussion_check.provide_ans_yes();
    });
    Then(/^Verify the user is landed on the Seek medical attention screen$/, function () {
        concussion_check.check_seek_medical_attention_screen();
    });
    Then(/^I performed a self concussion check while answering No for all the twenty questions$/, function () {

        concussion_check.click_on_myself();
        concussion_check.click_on_continue();
        for (let i = 0; i < 20; i++) {
            concussion_check.provide_ans_no();
        }
    });
    Then(/^Verify the user is landed on the Monitor for symptoms page$/, function () {
        concussion_check.check_monitor_for_symptoms_screen();
    });


    Then(/^I performed concussion check for an adult while answering Yes for any of the 1st five questions$/, function () {
        concussion_check.click_on_someone_else();
        concussion_check.click_on_under_18_no();

        for (let i = 0; i < 4; i++) {
            concussion_check.provide_ans_no();
        }
        concussion_check.provide_ans_yes();
    });
    Then(/^I performed concussion check for another adult while answering No for all the 1st five questions$/, function () {
        concussion_check.click_on_someone_else();
        concussion_check.click_on_under_18_no();
        for (let i = 0; i < 5; i++) {
            concussion_check.provide_ans_no();
        }

    });
    Then(/^I performed a concussion check for an adult while answering No for all the 1st ten questions$/, function () {
        concussion_check.click_on_someone_else();
        concussion_check.click_on_under_18_no();
        for (let i = 0; i < 10; i++) {
            concussion_check.provide_ans_no();
        }
    });

    Then(/^I performed a concussion check for an adult while answering No for all the twenty questions$/, function () {
        concussion_check.click_on_someone_else();
        concussion_check.click_on_under_18_no();
        for (let i = 0; i < 20; i++) {
            concussion_check.provide_ans_no();
        }
    });

Then(/^Accepts the T&C$/, function () {
    cy.get('ion-icon[name="checkmark-outline"]').click();
});