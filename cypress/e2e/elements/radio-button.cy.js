// <reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { RadioButtonPage } from '../../support/pages/radioButtonPage'

describe('Radio button', () => {
  const homePage = new HomePage()
  const radioButtonPage = new RadioButtonPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickElements()
    radioButtonPage.clickRadioButton()
  })

  it('seleccionar el radio button "Yes"', () => {
    radioButtonPage.selectYes().should('be.checked')
    radioButtonPage.returnSuccessText().invoke('text').then(res => {
      expect(res).is.eql('Yes')
    })
  })

  it('seleccionar el radio button "Impressive"', () => {
    radioButtonPage.clickImpressive().should('be.checked')
    radioButtonPage.returnSuccessText().invoke('text').then(res => {
      expect(res).is.eql('Impressive')
    })
  })

  it('Validar que la opcion radio button "No" nose encuentra habilitado', () => {
    radioButtonPage.returnNoOption().should('be.disabled')
  })
})