export class PracticeFormPage {
    constructor() {
        this.formButton = 'Practice Form';
        this.firstNameInput = '#firstName';
        this.lastNameInput = '#lastName';
        this.userEmailInput = '#userEmail';
        this.userNumberInput = '#userNumber';
        this.dateOfBirthInput = '#dateOfBirthInput';
        this.yearSelect = 'select[class="react-datepicker__year-select"]';
        this.monthSelect = 'select[class="react-datepicker__month-select"]';
        this.daySelect = 'div[class*="react-datepicker__day"][role="option"]';
        this.autocompleteInput = '#subjectsInput';
        this.autocompleteOptions = '[id*=react-select-2-option-]';
        this.hobbiesCheckbox = 'input[type="checkbox"]';
        this.uploadPicture = '#uploadPicture';
        this.currentAddressInput = '#currentAddress';
        this.state = '#state>[class$="control"]';
        this.stateOrCityOptions = '[class$="option"]';
        this.city = '#city';
        this.submitButton = '#submit';
    };

    clickPracticeForm() {
        cy.cClick(this.formButton);
    };

    typeFirstName(text) {
        cy.gType(this.firstNameInput, text);
    };

    typeLastName(text) {
        cy.gType(this.lastNameInput, text);
    };

    typeUserEmail(text) {
        cy.gType(this.userEmailInput, text);
    };

    selectGender(text) {
        cy.get(`input[value="${text}"]`).check({ force: true });
    };

    typeUserNumber(number) {
        cy.gType(this.userNumberInput, number);
    };

    clickDateOfBirth() {
        cy.gClick(this.dateOfBirthInput);
    };

    selectYear(year) {
        cy.gSelect(this.yearSelect, year);
    };

    selectMonth(month) {
        cy.gSelect(this.monthSelect, month);
    };

    selectdaySelect(day) {
        cy.contains(this.daySelect, day).click();
    };

    SelectDateOfBirth(day, month, year) {
        this.clickDateOfBirth();
        this.selectYear(year.toString());
        this.selectMonth(month.toString());
        this.selectdaySelect(day.toString());
    };

    typeAutocomplete(text) {
        cy.get(this.autocompleteInput).type(text);
    };

    returnAutocomplete() {
        return cy.get(this.autocompleteOptions);
    };

    checkHobbies(hobbie) {
        cy.get(`input[type="checkbox"][id="hobbies-checkbox-${hobbie}"]`).check({ force: true });
    };

    returnUploadPicture() {
        return cy.get(this.uploadPicture);
    };

    typeCurrentAddress(address) {
        cy.gType(this.currentAddressInput, address);
    };


    selectState(state) {
        cy.gClick(this.state);
        cy.get(this.stateOrCityOptions).eq(state).click();
    };

    selectCity(city) {
        cy.get(this.city).click();
        cy.get(this.stateOrCityOptions).eq(city).click({ force: true });
    };

    clickSubmit() {
        cy.gClick(this.submitButton);
    };
};