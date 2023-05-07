export class CheckBoxPage {

  constructor() {
    this.checkBoxButton = '#item-1'
    this.expandsButton = '[title="Expand all"]'
    this.collapseButton = '[title="Collapse all"]'
    this.allCheckBox = 'ol [class="rct-checkbox"]'
    this.allToggleColapse = '.rct-collapse'
    this.allCheckedBox = '[class="rct-icon rct-icon-check"]'
    this.successText = '.text-success'
  }

  clickCheckBox() {
    cy.gClick(this.checkBoxButton)
  }

  expandsAll() {
    cy.gClick(this.expandsButton)
  }

  collapseAll() {
    cy.gClick(this.collapseButton)
  }

  returnAllCheckBox() {
    return cy.get(this.allCheckBox)
  }

  returnAllToggle() {
    return cy.get(this.allToggleColapse)
  }

  checkOption(option) {
    cy.gCheck(`[id="tree-node-${option}"]`)
  }

  returnAllChecked() {
    return cy.get(this.allCheckedBox)
  }

  returnNameChecked() {
    return cy.get(this.allCheckedBox).parent('span').siblings('span[class="rct-title"]')
  }

  returnAllSuccessText() {
    return cy.get(this.successText)
  }
}