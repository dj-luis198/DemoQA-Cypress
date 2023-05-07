export class AutoCompletePage {

  constructor() {
    this.autoCompleteButton = 'Auto Complete'
    this.autoCompleteMultipleInput = '#autoCompleteMultipleInput'
    this.autoCompleteMenu = '#autoCompleteMultipleContainer'
    this.autoCompleteSingleInput = '#autoCompleteSingleInput'
    this.autoCompleteSingleContainer = '[class^="auto-complete__menu "]'
  }

  clickAutoComplete() {
    cy.contains('span[class="text"]', this.autoCompleteButton).click()
  }

  typeText(color) {
    cy.gType(this.autoCompleteMultipleInput, color)
  }

  typeTextSingle(color) {
    cy.gType(this.autoCompleteSingleInput, color)
  }

  clickOption(option) {
    cy.get(this.autoCompleteMenu).find(`[id^="react-select-2-option-${option}"]`).click()
  }

  clickSingleOption(option) {
    cy.get(this.autoCompleteSingleContainer).find(`[id^="react-select-3-option-${option}"]`).click()
  }

  returnOptionLength() {
    return cy.get(this.autoCompleteMenu).find('[id^="react-select-2-option-"]')
  }

  returnOptionSingleLength() {
    return cy.get(this.autoCompleteSingleContainer).find('[id^="react-select-3-option-"]')
  }


  returnValuesLength() {
    return cy.get(this.values)
  }

  selectOption() {
    this.returnOptionLength().then(res => {
      let rand = Math.random() * res.length
      rand = Math.floor(rand)
      cy.log(rand)
      this.clickOption(rand)
    })
  }

  selectSingleOption() {
    this.returnOptionSingleLength().then(res => {
      let rand = Math.random() * res.length
      rand = Math.floor(rand)
      cy.log(rand)
      this.clickSingleOption(rand)
    })
  }
}