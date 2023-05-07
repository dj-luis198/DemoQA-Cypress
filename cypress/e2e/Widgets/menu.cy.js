//https://github.com/dmtrKovalenko/cypress-real-events

///<reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { MenuPage } from '../../support/pages/menuPage'

describe('Menu', () => {
  const homePage = new HomePage()
  const menuPage = new MenuPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickWidgetsCard()
    menuPage.clickMenu()
  })

  it('menu sub items', () => {
    menuPage.returnSubItems().should('include.text', 'Sub Item')
  })

  it.only('menu sub sub lists', () => {
    //menuPage.returnSubSubList().should('include.text','Sub Sub Item 1');
    menuPage.returnSubSubList().then(res => {
      expect(res).is.eq('Sub Sub Item 1')
    })
  })
})