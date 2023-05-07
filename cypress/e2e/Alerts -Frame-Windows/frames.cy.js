//https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/

///<reference types="cypress" />
///<reference types="cypress-iframe" />

import { HomePage } from '../../support/pages/homePage'
import { FramesPage } from '../../support/pages/framesPage'

describe('Frames', () => {
  const homePage = new HomePage()
  const framesPage = new FramesPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickAlertsFrameWindowsCard()
    framesPage.clickFrames()
  })

  //it.skip('frame1 (cypress-iframe)', () => {
  //framesPage.returnIframe1().should('have.text', 'This is a sample page');
  //});

  //it.skip('frame2 (cypress-iframe)', () => {
  //framesPage.returnIframe2().should('have.text', 'This is a sample page');
  // });


  //estas funcionan mejorque la dependencia ifame
  it('frame11', () => {
    framesPage.returnIframe11().should('have.text', 'This is a sample page')
  })

  it('frame22', () => {
    framesPage.returnIframe22().should('have.text', 'This is a sample page')
  })
})