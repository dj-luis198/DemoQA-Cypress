export class HomePage {

    constructor() {
        this.elementsCard = 'Elements';
        this.textBoxSpan = 'Text Box';
        this.formCard = 'Forms';
    };

    clickElements() {
        cy.cClick(this.elementsCard);
    };

    clickForms() {
        cy.cClick(this.formCard);
    };

    clickTextBox() {
        cy.cClick(this.textBoxSpan);
    };
};
