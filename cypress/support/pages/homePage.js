export class HomePage {

    constructor() {
        this.elementsCard = 'Elements';
        this.textBoxSpan = 'Text Box';
        this.formCard = 'Forms';
        this.AlertsFrameWindowsCard = 'Alerts, Frame & Windows';
    };

    clickAlertsFrameWindowsCard() {
        cy.cClick(this.AlertsFrameWindowsCard);
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
