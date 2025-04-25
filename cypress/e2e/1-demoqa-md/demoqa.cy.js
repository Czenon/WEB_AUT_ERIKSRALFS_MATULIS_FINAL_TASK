import { AutomationPracticeFormPage } from "../../pageObjects/AutomationPracticeFormPage";


describe("Demoqa MD FINAL ERM", () => {
    context("Automation tests", () => {
      beforeEach(() => {
        AutomationPracticeFormPage.visit();
      });
   
      it("Grid tab selection test", () => {
        // a. Open https://demoqa.com/automation-practice-form
        // b. Input all the necessary information in the text fields, buttons, etc, where it is not
        // stated otherwise.
        // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
        // d. Set Subjects to Economics.
        // e. Set Hobbies to Music.
        // f. Upload an image of your choice.
        // i. Create folder “files” and put the image there
        // ii. Might come in handy: https://docs.cypress.io/api/commands/selectfile
        // g. Set State to NCR.
        // h. Set City to Delhi.
        // i. Click Submit.
        // j. Validate that each Labeled row contains the correct information.
        // k. Create the necessary elements, page objects, etc.
        // l. Do as much as you can, the best way you can.
        // m. You can use everything, except other people.

        AutomationPracticeFormPage.firstNameField.click().type("John");
        AutomationPracticeFormPage.lastNameField.click().type("Doe");
        AutomationPracticeFormPage.emailField.click().type("funnyemail@gmail.com");
        AutomationPracticeFormPage.maleRadioButton.click();
        AutomationPracticeFormPage.mobileNumberField.click().type("1234567890");
        AutomationPracticeFormPage.dateOfBirthField.click();
        AutomationPracticeFormPage.dateOfBirthWidgetYear.select("1930");
        AutomationPracticeFormPage.dateOfBirthWidgetMonth.select("February");
        AutomationPracticeFormPage.dateOfBirthWidgetDay.contains("28").click();
        AutomationPracticeFormPage.subjectsContainer.click().type("Economics{enter}");
        AutomationPracticeFormPage.hobbiesCheckbox.click();
        AutomationPracticeFormPage.fileUpload.selectFile('./cypress/files/img.jpg');
        AutomationPracticeFormPage.addressField.click().type("Gurganon");
        AutomationPracticeFormPage.stateDropdownMenu.click().type("NCR{enter}");
        AutomationPracticeFormPage.cityDropdownMenu.click().type("Delhi{enter}");
        AutomationPracticeFormPage.submitButton.click();


        AutomationPracticeFormPage.tableEmailRow.contains("funnyemail@gmail.com");
        AutomationPracticeFormPage.tableGenderRow.contains("Male");
        AutomationPracticeFormPage.tableHobbiesRow.contains("Music");
        AutomationPracticeFormPage.tableSubjectsRow.contains("Economics");
        AutomationPracticeFormPage.tableMobileRow.contains("1234567890");
        AutomationPracticeFormPage.tableNameRow.contains("John Doe");
        AutomationPracticeFormPage.tablePictureRow.contains("img.jpg");
        AutomationPracticeFormPage.tableAddressRow.contains("Gurganon");
      });

      }
    )
  })