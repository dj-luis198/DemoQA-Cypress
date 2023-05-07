///<reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { ModalDialogsPage } from '../../support/pages/modalDialogsPage'


describe('Modal Dialogs', () => {
  const homePage = new HomePage()
  const modalDialogsPage = new ModalDialogsPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickAlertsFrameWindowsCard()
    modalDialogsPage.clickModalDialogs()
  })

  it('Click on button to see modal (Small modal)', () => {
    modalDialogsPage.clickShowSmallModal()
    modalDialogsPage.returnModalTitle().should('have.text', 'Small Modal')
    modalDialogsPage.returnModalBody().should('have.text', 'This is a small modal. It has very less content')
    modalDialogsPage.closeSmallModal()
  })

  it('Click on button to see modal (large modal)', () => {
    modalDialogsPage.clickShowLargeModal()
    modalDialogsPage.returnModalLargeTitle().should('have.text', 'Large Modal')
    modalDialogsPage.returnModalLargeBody().invoke('text').should('include', 'Lorem')
    modalDialogsPage.closeLargeModal()
  })
})