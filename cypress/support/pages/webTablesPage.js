// <reference types="cypress" />
export class WebTablesPage {

  constructor() {
    this.webTableButoon = '#item-3'
    this.addButton = '#addNewRecordButton'
    this.firstNameInput = '#firstName'
    this.lastNameInput = '#lastName'
    this.emailInput = '#userEmail'
    this.ageInput = '#age'
    this.salaryInput = '#salary'
    this.departmentInput = '#department'
    this.submitButton = '#submit'
    this.registrationModal = '#registration-form-modal'
    this.nextButton = 'Next'
    this.searchInput = '#searchBox'
    this.bodyTable = '.rt-tbody'
    this.noDataText = '.rt-noData'
  }

  clickWebTable() {
    cy.gClick(this.webTableButoon)
  }

  clickAdd() {
    cy.gClick(this.addButton)
  }

  typeFirstName(firstN) {
    cy.gType(this.firstNameInput, firstN)
  }

  typeLastName(lastN) {
    cy.gType(this.lastNameInput, lastN)
  }

  typeEmail(email) {
    cy.gType(this.emailInput, email)
  }

  typeAge(age) {
    cy.gType(this.ageInput, age)
  }

  typeSalary(salary) {
    cy.gType(this.salaryInput, salary)
  }

  typeDepartment(dep) {
    cy.gType(this.departmentInput, dep)
  }

  clickSubmit() {
    cy.gClick(this.submitButton)
  }

  registrationForm(firstN, lastN, email, age, salary, dep) {
    this.clickAdd()
    this.typeFirstName(firstN)
    this.typeLastName(lastN)
    this.typeEmail(email)
    this.typeAge(age)
    this.typeSalary(salary)
    this.typeDepartment(dep)
    this.clickSubmit()
  }

  returnRow(row, j) {
    return cy.get(`[class="rt-tr-group"]:eq(${row})`).children('div[role="row"]').children('div[class="rt-td"]').eq(j)
  }

  returnNext() {
    return cy.contains(this.nextButton)
  }

  clickNext() {
    cy.contains('Next').click({ force: true })
  }

  SearchText(text) {
    cy.get(this.searchInput).clear()
    cy.gType(this.searchInput, text)
  }

  returnBody() {
    return cy.get(this.bodyTable)
  }

  returntextNoData() {
    return cy.get(this.noDataText)
  }
}
