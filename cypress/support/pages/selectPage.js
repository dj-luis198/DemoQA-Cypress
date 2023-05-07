export class SelectPage {

  constructor() {
    this.SelectMenu = 'Select Menu'

    this.selectInput = '#withOptGroup'
    this.selectOption = 'Select Option'
    this.singleValue = 'div[class$=-singleValue]'

    this.oldSelectMenu = '#oldSelectMenu'
    this.selectOne = '#selectOne'
    this.selectTitle = 'Select Title'

    this.controlClass = 'div[class$="-control"]'
    this.select = 'Select...'

    this.selectMultiple = '#cars'
  }

  clickSelectMenu() {
    cy.contains('span[class="text"]', this.SelectMenu).click()
  }

  //////////////////////////////

  clickSelectInput() {
    cy.contains(this.selectInput, this.selectOption).click()
  }

  returnMenuOptions() {
    return cy.get(this.selectInput).find('div[class$="-menu"]')
  }

  selectToOption(option) {
    cy.get(`[id=react-select-2-option-${option}]`).click()
  }

  returnSingleValue() {
    return cy.get(this.selectInput).find(this.singleValue)
  }

  //////////////////////

  selectOldSelectMenu(text) {
    return cy.get(this.oldSelectMenu).select(text)
  }

  selectOldSelectMenuValue(value) {
    return cy.get(this.oldSelectMenu).select(value)
  }

  returnOptionValue(value) {
    return cy.get(`option[value="${value}"]`)
  }


  ///////////////////////

  clickSelectTitle() {
    cy.contains(this.selectOne, this.selectTitle).click()
  }

  returnMenuOptTitle() {
    return cy.get(this.selectOne).find('div[class$="-menu"]')
  }

  selectToOptionTitle(option) {
    cy.get(`[id=react-select-3-option-${option}]`).click()
  }

  returnSingleValueTitle() {
    return cy.get(this.selectOne).find(this.singleValue)
  }

  ////////////////////

  clickMultiselectDropDown() {
    cy.contains(this.controlClass, this.select).click()
  }

  returnOptionsDropDown() {
    return cy.get(this.controlClass).eq(2).siblings('div[class$="-menu"]')
  }

  selectToOptionDropDown(option) {
    cy.get(`[id=react-select-4-option-${option}]`).click()
  }

  returnselectOptionDropDown() {
    return cy.get(this.controlClass).eq(2).find('[class$="-multiValue"]')
  }

  //////////////////////

  selectoptionsCars(option) {
    cy.get(this.selectMultiple).select(option)
  }

  returnOptionsSelected() {
    return cy.get(this.selectMultiple).find('option:selected')
  }
}