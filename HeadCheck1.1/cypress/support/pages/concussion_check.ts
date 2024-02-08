import BasePage from "../utils/basePage";

const REAL_INCIDENT_BTN = '.my-8 > .text-center > .mb-2';
const MYSELF_BTN = '#warn > .mb-2';
const SOMEONE_ELSE = ':nth-child(2) > .mb-2';
const CONTINUE_BTN = ':nth-child(5) > .mb-4';

const UNDER_18_YES = 'app-check-age.ion-page > .content-ltr > .px-6 > .my-8 > :nth-child(1) > .mb-2';
const UNDER_18_NO = 'app-check-age.ion-page > .content-ltr > .px-6 > .my-8 > :nth-child(2) > .mb-2';


const CONCUSSION_QS_ANSWER_YES  = '.accordion-expanded > .px-4 > .my-6 > [aria-label="Yes"] > .mb-2';
const CONCUSSION_QS_ANSWER_NO  = '.accordion-expanded > .px-4 > .my-6 > [aria-label="No"] > .mb-2';

// Contact Emergency Screen

const CALL_000 = 'app-check-result.ion-page > .content-ltr > .px-6 > :nth-child(1)';
const EMERGENCY_GP ='app-check-result.ion-page > .content-ltr > .px-6 > :nth-child(1)';
const SEEK_MEDICAL_ATTENTION_HEADER = 'app-check-result.ion-page > .content-ltr > .px-6 > :nth-child(1)';


export class Concussion_check extends BasePage {
    constructor() {
        super();
    }


    click_on_real_incident(){
        cy.get(REAL_INCIDENT_BTN).click();
    }

    click_on_myself(){
        cy.get(MYSELF_BTN).click();
    }

    click_on_someone_else(){
        cy.get(SOMEONE_ELSE).click();
    }

    click_on_under_18_yes(){
        cy.get(UNDER_18_YES).click();

    }

    click_on_under_18_no(){
        cy.get(UNDER_18_NO).click();

    }

    click_on_continue(){
        cy.get(CONTINUE_BTN).click();
    }


    provide_ans_yes(){
        cy.get(CONCUSSION_QS_ANSWER_YES).click();
    }

    provide_ans_no(){
        cy.get(CONCUSSION_QS_ANSWER_NO).click();
    }

    check_contact_emergency_screen(){
        this.check_text(CALL_000,'Call 000')
    }

    check_go_to_emergency_gp_screen(){
        this.check_text(CALL_000,'Go to Emergency/GP')
    }

    check_seek_medical_attention_screen(){
        this.check_text(SEEK_MEDICAL_ATTENTION_HEADER,'Seek Medical Attention');
    }

    check_monitor_for_symptoms_screen(){
        this.check_text(EMERGENCY_GP,'Monitor for Symptoms');
    }

}