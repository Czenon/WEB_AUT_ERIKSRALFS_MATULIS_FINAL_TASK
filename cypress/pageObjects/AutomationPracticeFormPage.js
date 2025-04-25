import { BasePage } from "./basePage";

export class AutomationPracticeFormPage extends BasePage {
    
    static get url() {
        return "automation-practice-form";
    }

    static get firstNameField() {
        return cy.get("input#firstName");
    }

    static get lastNameField() {
        return cy.get("input#lastName");
    }

    static get emailField() {
        return cy.get("input#userEmail");
    }

    static get maleRadioButton() {
        return cy.get("label[for='gender-radio-1']");
    }

    static get mobileNumberField() {
        return cy.get("input#userNumber");
    }

    static get dateOfBirthField() {
        return cy.get("input#dateOfBirthInput");
    }

    static get dateOfBirthWidgetYear() {
        return cy.get(".react-datepicker__year-select");
    }

    static get dateOfBirthWidgetMonth() {
        return cy.get(".react-datepicker__month-select");
    }

    static get dateOfBirthWidgetDay() {
        return cy.get(".react-datepicker__day");
    }

    static get subjectsContainer() {
        return cy.get("#subjectsContainer");
    }

    static get hobbiesCheckbox() {
        return cy.get("label[for='hobbies-checkbox-3']");
    }

    static get fileUpload() {
        return cy.get("input[type='file']");
    }

    static get addressField() {
        return cy.get("#currentAddress");
    }

    static get stateDropdownMenu() {
        return cy.get("div #state");
    }

    static get cityDropdownMenu() {
        return cy.get("div #city");
    }

    static get submitButton() {
        return cy.get("button#submit");
    }


//     Student Name	John Doe
// Student Email	funnyemail@gmail.com
// Gender	Male
// Mobile	1234567890
// Date of Birth	28 January,1930
// Subjects	Economics
// Hobbies	Music
// Picture	img.jpg
// Address	Gurganon
// State and City

    static get tableNameRow() {
        return cy.get("td").contains("Student Name").parent();
    }

    static get tableEmailRow() {
        return cy.get("td").contains("Student Email").parent();
    }

    static get tableGenderRow() {
        return cy.get("td").contains("Gender").parent();
    }

    static get tableMobileRow() {
        return cy.get("td").contains("Mobile").parent();
    }

    static get tableDOBRow() {
        return cy.get("td").contains("Date of Birth").parent();
    }

    static get tableSubjectsRow() {
        return cy.get("td").contains("Subjects").parent();
    }

    static get tableHobbiesRow() {
        return cy.get("td").contains("Hobbies").parent();
    }

    static get tablePictureRow() {
        return cy.get("td").contains("Picture").parent();
    }

    static get tableAddressRow() {
        return cy.get("td").contains("Address").parent();
    }

    static get tableStateCityRow() {
        return cy.get("td").contains("State and City").parent();
    }


}