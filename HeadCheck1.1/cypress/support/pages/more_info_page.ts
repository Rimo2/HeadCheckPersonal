import BasePage from "../utils/basePage";
import 'cypress-xpath';
import '../../support/commands';

const ABOUT_US = '.mb-6';
const ABOUT_US_XPATH = '//h1[contains(text(),\'About Us\')]';





export class More_info_page extends BasePage {
    constructor() {
        super();
    }

    check_more_info_header(){
        this.check_text(ABOUT_US,'About Us')
    }


}