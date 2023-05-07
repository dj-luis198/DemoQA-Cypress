///<reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { AlertsPage } from '../../support/pages/alertsPage'

describe('Alerts', () => {
  const homePage = new HomePage()
  const alertsPage = new AlertsPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickAlertsFrameWindowsCard()
    alertsPage.clickAlerts()

  })

  it('Click Button to see alert', () => {
    alertsPage.clickAlertComun()
    cy.on('window:alert', res => {
      expect(res).to.eq('You clicked a button')
    })
  })

  it('On button click, alert will appear after 5 seconds', () => {
    alertsPage.clickTimerAlert()
    cy.on('window:alert', res => {
      expect(res).to.eq('This alert appeared after 5 seconds')
    })
  })

  it('On button click, confirm box will appear "selected Ok"', () => {
    alertsPage.clickConfirm()
    cy.on('window:confirm', res => {
      expect(res).to.eq('Do you confirm action?')

    })
  })

  it('On button click, confirm box will appear "selected Cancel"', () => {
    alertsPage.clickConfirm()
    cy.on('window:confirm', res => {
      expect(res).to.eq('Do you confirm action?')
      return false
    })
  })

  it('On button click, prompt box will appear', () => {
    cy.window().then(function (win) {
      cy.stub(win, 'prompt').returns('Daniel Farias')
      cy.stub(win, 'alert').as('windowAlert')
      alertsPage.clickPromt()
    })
    alertsPage.returnPromptResult().invoke('text').then(res => {
      expect(res).to.eq('You entered Daniel Farias')
    })
  })

  it('On button click, prompt box will appear (cancel)', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').callsFake(() => null)
      alertsPage.clickPromt()
    })
  })
})