import BasePage from "../utils/basePage";
import 'cypress-xpath';
import {BASE_URL} from "../utils/constants";

const concussion_check_btn = ".bg-white > .font-display";
const concussion_recovery_btn = "routerlink=\"/concussion-recovery\"] > .mb-3";
const more_info = "[routerlink=\"/more-info\"] > .mb-3";
const create_account = ".\\[text-transform\\:none\\]";
const login = ".underline";



export class Home_page extends BasePage {
    constructor() {
        super();
    }
    visitWelcomePage(){
        cy.visit(BASE_URL);


    }


    click_on_concussion_check(){
        cy.get(concussion_check_btn).click();
    }

    click_on_more_information(){
        cy.get(more_info).click();
    }



}