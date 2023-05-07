//https://www.youtube.com/watch?v=zL9PxwQrRtQ
//https://qaboxletstestcypresspracticesite.netlify.app/
//How to work with Sliders in Cypress?
//1. Slider of Input type equal to Range
//2. Customized Slider Components
//3. Cypress Commands used
//           a. .invoke('val')
//          b. .invoke('attr') &
//          c. .trigger('event-name')

///<reference types="cypress" />
import { HomePage } from '../../support/pages/homePage'
import { SliderPage } from '../../support/pages/sliderPage'

describe('Slider', () => {
  const homePage = new HomePage()
  const sliderPage = new SliderPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickWidgetsCard()
    sliderPage.clickSlider()
  })

  it('slider input type= range utilizando stepUp', () => {
    sliderPage.moveSlider(90)
    sliderPage.returnValueSlider().should('have.value', 90)
  })
})