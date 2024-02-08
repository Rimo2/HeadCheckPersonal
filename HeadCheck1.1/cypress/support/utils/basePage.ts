import {BASE_URL, WAIT_TIMEOUT} from './constants';
import * as cypress from "cypress";

export default class BasePage {
    constructor() {
    }
    click(selector: string, params = {}) {
        cy.get(selector).click(params);
    }

    waitForElementToAppear(elementSelector: string, timeout = WAIT_TIMEOUT) {
        cy.get(elementSelector, {timeout}).should('be.visible');
    }

    check_text(elementSelector: string,text: string){

        cy.get(elementSelector).invoke('text').then((actualText) => {
            const trimmedActualText = actualText.trim();
            const expectedText = text;
            expect(trimmedActualText).to.equal(expectedText);
        });



    }
}
