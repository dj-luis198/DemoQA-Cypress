export class ToolTipsPage {

  constructor() {
    this.toolTipsButton = 'Tool Tips'
    this.toolTipButton = '#toolTipButton'
    this.toolTip = '#buttonToolTip'
    this.toolTipTextField = '#toolTipTextField'
    this.textFieldToolTip = '#textFieldToolTip'
  }

  clickToolTipsMenu() {
    cy.contains('span[class="text"]', this.toolTipsButton).click()
  }

  returnToolTip() {
    cy.get(this.toolTipButton).trigger('mouseover')
    return cy.get(this.toolTip)
  }

  returnToolTipField() {
    cy.get(this.toolTipTextField).trigger('mouseover')
    //cy.get(this.toolTipTextField).invoke('show');
    return cy.get(this.textFieldToolTip)
  }
}