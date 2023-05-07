export class BrowserWindowsPage {

  constructor() {
    this.browserWindowsButton = 'Browser Windows'
    this.tabButton = '#tabButton'
    this.windowButton = '#windowButton'
    this.messageWindowButton = '#messageWindowButton'
  }

  clickBrowserWindows() {
    cy.cClick(this.browserWindowsButton)
  }

  clickTabButton() {
    cy.gClick(this.tabButton)
  }

  clickWindowButton() {
    cy.gClick(this.windowButton)
  }

  clickMessageWindow() {
    cy.gClick(this.messageWindowButton)
  }
}