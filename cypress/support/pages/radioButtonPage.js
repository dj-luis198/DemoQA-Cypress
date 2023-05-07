export class RadioButtonPage {

  constructor() {
    this.radioButton = '#item-2'
    this.yesRadioButton = '#yesRadio[type="radio"]'
    this.impressiveButton = '#impressiveRadio'
    this.noButton = '#noRadio'
    this.successText = '.text-success'
  }

  clickRadioButton() {
    cy.gClick(this.radioButton)
  }

  selectYes() {
    return cy.gCheck(this.yesRadioButton)
  }

  returnSuccessText() {
    return cy.get(this.successText)
  }

  clickImpressive() {
    return cy.gCheck(this.impressiveButton)
  }

  returnNoOption() {
    return cy.get(this.noButton)
  }
}