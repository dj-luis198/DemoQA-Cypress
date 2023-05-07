///<reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { BrowserWindowsPage } from '../../support/pages/browserWindowsPage'

describe('Browser windows', () => {
  const homePage = new HomePage()
  const browserWindowsPage = new BrowserWindowsPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickAlertsFrameWindowsCard()
    browserWindowsPage.clickBrowserWindows()
  })

  it('New tab', () => {
    browserWindowsPage.clickTabButton()
    cy.intercept(
      'https://demoqa.com/sample'
    ).as('tab')
    cy.wait('@tab').then(res => {
      expect(res.response.statusCode).to.eq(200)
      expect(res.response.url).to.eq('https://demoqa.com/sample')
    })
  })

  it('New window', () => {
    browserWindowsPage.clickWindowButton()
    cy.intercept(
      'https://demoqa.com/sample'
    ).as('window')
    cy.wait('@window').then(res => {
      expect(res.response.statusCode).to.eq(200)
      expect(res.response.url).to.eq('https://demoqa.com/sample')
    })
  })
})