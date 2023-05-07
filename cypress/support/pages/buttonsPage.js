
export class ButtonsPage {

  constructor() {
    this.buttonsButton = '#item-4'
    this.dblClickBton = '#doubleClickBtn'
    this.rightClickBtn = '#rightClickBtn'
    this.buttonClickBtn = '[class="mt-4"]>button'
    this.dblClicMssg = '#doubleClickMessage'
    this.rgtClickMssg = '#rightClickMessage'
    this.ClickMessage = '#dynamicClickMessage'
  }

  clickButtons() {
    cy.gClick(this.buttonsButton)
  }

  doubleClick() {
    cy.gDblClick(this.dblClickBton)
  }

  rightClick() {
    cy.gRgtClick(this.rightClickBtn)
  }

  clickButtonDinamic() {
    cy.gDinamicClick(this.buttonClickBtn)
  }

  returnDblClickMessg() {
    return cy.get(this.dblClicMssg)
  }

  returnRgtClickMssg() {
    return cy.get(this.rgtClickMssg)
  }

  returnClickMssg() {
    return cy.get(this.ClickMessage)
  }
}