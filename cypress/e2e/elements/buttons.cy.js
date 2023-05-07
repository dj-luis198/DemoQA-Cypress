// <reference types="cypress" />
import { HomePage } from '../../support/pages/homePage'
import { ButtonsPage } from '../../support/pages/buttonsPage'

describe('Buttons', () => {
  const homePage = new HomePage()
  const buttonsPage = new ButtonsPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickElements()
    buttonsPage.clickButtons()
  })

  it('validar dar doble click', () => {
    buttonsPage.doubleClick()
    buttonsPage.returnDblClickMessg().invoke('text').then(res => {
      expect(res).to.eql('You have done a double click')
    })
  })

  it('validar dar click derecho', () => {
    buttonsPage.rightClick()
    buttonsPage.returnRgtClickMssg().invoke('text').then(res => {
      expect(res).to.eql('You have done a right click')
    })
  })

  it('validar dar click en el boton', () => {
    buttonsPage.clickButtonDinamic()
    buttonsPage.returnClickMssg().invoke('text').then(res => {
      expect(res).to.eql('You have done a dynamic click')
    })
  })
})