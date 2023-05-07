//https://stackoverflow.com/questions/64606194/cypress-access-to-an-iframe-into-another-iframe

///<reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { NestedFamesPage } from '../../support/pages/nestedFramesPage'

describe('Nested frames', () => {
  const homePage = new HomePage()
  const nestedFramesPage = new NestedFamesPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickAlertsFrameWindowsCard()
    nestedFramesPage.clickNestedFrames()
  })

  it('Nested frames', () => {
    nestedFramesPage.returnFrameChildren().should('have.text', 'Child Iframe')
  })
})