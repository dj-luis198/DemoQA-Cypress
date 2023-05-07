export class LinksPage {

  constructor() {
    this.linkButton = '#item-5'
    this.simpleLink = '#simpleLink'
    this.dynamicLink = '#dynamicLink'
    this.createdAPI = '#created'
    this.noContent = '#no-content'
    this.movedLink = '#moved'
    this.badRequestLink = '#bad-request'
    this.unauthorizedLink = '#unauthorized'
    this.forbiddenLink = '#forbidden'
    this.invalidUrlLink = '#invalid-url'
  }

  clickLinkButton() {
    cy.gClick(this.linkButton)
  }

  returnSimpleLink() {
    return cy.get(this.simpleLink)
  }

  returnDynamicLink() {
    return cy.get(this.dynamicLink)
  }

  clickCreated() {
    cy.gClick(this.createdAPI)
  }

  clicknoContent() {
    cy.gClick(this.noContent)
  }

  clickMoved() {
    cy.gClick(this.movedLink)
  }

  clickBadRequest() {
    cy.gClick(this.badRequestLink)
  }

  clickUnauthorized() {
    cy.gClick(this.unauthorizedLink)
  }

  clickForbidden() {
    cy.gClick(this.forbiddenLink)
  }

  clickInvalidUrl() {
    cy.gClick(this.invalidUrlLink)
  }
}