export class TextBoxPage {

  constructor() {
    this.fullNameImput = '#userName'
    this.emailImput = '#userEmail'
    this.addressTextArea = '#currentAddress'
    this.permanentAddressTextArea = '#permanentAddress'
    this.submitButton = '#submit'
    this.nameP = '#name'
    this.emailP = '#email'
    this.addressP = 'p[id="currentAddress"]'
    this.permanentAddressP = 'p[id="permanentAddress"]'
  }

  typeFullName(text) {
    cy.gType(this.fullNameImput, text)
  }

  typeEmail(text) {
    cy.gType(this.emailImput, text)
  }

  typeAddress(text) {
    cy.gType(this.addressTextArea, text)
  }

  typePermanentAddress(text) {
    cy.gType(this.permanentAddressTextArea, text)
  }

  clickSubmit() {
    cy.gClick(this.submitButton)
  }

  returnName() {
    return cy.get(this.nameP)
  }

  returnEmail() {
    return cy.get(this.emailP)
  }

  returnAddress() {
    return cy.get(this.addressP)
  }

  returnPermanentAddress() {
    return cy.get(this.permanentAddressP)
  }
}