//https://www.youtube.com/watch?v=MO4ulNqfPhA

//<reference types="cypress" />
import { HomePage } from '../../support/pages/homePage'
import { ProgressBarPage } from '../../support/pages/progressBarPage'

describe('Progress Bar', () => {
  const homePage = new HomePage()
  const progressBarPage = new ProgressBarPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickWidgetsCard()
    progressBarPage.clickProgressBar()

  })

  it('Progress bar', () => {

  })
})