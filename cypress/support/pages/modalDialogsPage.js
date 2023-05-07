export class ModalDialogsPage {

  constructor() {
    this.modalDialogsButton = 'Modal Dialogs'
    this.showSmallModal = '#showSmallModal'
    this.modalSmallBody = '.modal-body'
    this.modalSmallTitle = '#example-modal-sizes-title-sm'
    this.closeSmallButton = '#closeSmallModal'
    this.showLargeModal = '#showLargeModal'
    this.modalLargeTitle = '#example-modal-sizes-title-lg'
    this.modalLargeBody = '[class="modal-body"]>p'
    this.closeLargeButton = '#closeLargeModal'
  }

  clickModalDialogs() {
    cy.contains('span[class="text"]', this.modalDialogsButton).click()
  }

  clickShowLargeModal() {
    cy.gClick(this.showLargeModal)
  }

  clickShowSmallModal() {
    cy.gClick(this.showSmallModal)
  }

  returnModalLargeTitle() {
    return cy.get(this.modalLargeTitle)
  }

  returnModalTitle() {
    return cy.get(this.modalSmallTitle)
  }

  returnModalLargeBody() {
    return cy.gClick(this.modalLargeBody)
  }

  returnModalBody() {
    return cy.gClick(this.modalSmallBody)
  }

  closeSmallModal() {
    cy.gClick(this.closeSmallButton)
  }

  closeLargeModal() {
    cy.gClick(this.closeLargeButton)
  }
}