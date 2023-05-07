//https://testersdock.com/cypress-hover/
//https://docs.cypress.io/api/commands/hover
//npm i cypress-real-events -D complemento si no funcionan las opciones dadas

import { HomePage } from '../../support/pages/homePage'
import { ToolTipsPage } from '../../support/pages/toolTipsPage'

describe('Slider', () => {
  const homePage = new HomePage()
  const toolTipsPage = new ToolTipsPage()



  beforeEach(() => {
    cy.visit('/')
    homePage.clickWidgetsCard()
    toolTipsPage.clickToolTipsMenu()

  })

  it('Tool tips butoon, si es un evento javascript utilizamos trigger("mouseover") para activar el tool tip', () => {
    toolTipsPage.returnToolTip().should('be.visible').and('have.text', 'You hovered over the Button')
  })

  it('Tool tips text field ', () => {
    toolTipsPage.returnToolTipField().should('be.visible').and('have.text', 'You hovered over the text field')
  })
})