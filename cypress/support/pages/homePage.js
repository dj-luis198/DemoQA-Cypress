export class HomePage {

    constructor() {
        this.elementsCard = 'Elements';
        this.textBoxSpan='Text Box';
    }

    clickElements() {
        cy.cClick(this.elementsCard);
    }

    clickTextBox() {
        cy.cClick(this.textBoxSpan);
    }
}
