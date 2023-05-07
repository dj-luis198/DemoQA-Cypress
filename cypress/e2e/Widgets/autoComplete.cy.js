///<reference types="cypress" />
const { faker } = require('@faker-js/faker')
import { HomePage } from '../../support/pages/homePage'
import { AutoCompletePage } from '../../support/pages/autoCompletePage'

describe('AutoComplete', () => {
  const homePage = new HomePage()
  const autoCompletePage = new AutoCompletePage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickWidgetsCard()
    autoCompletePage.clickAutoComplete()
  })

  it.skip('Auto complete Type multiple color names', () => {
    //si sale repetido algun color la prueba falla
    let rand = Math.random() * 3
    rand = Math.floor(rand)
    for (let i = 0; i <= rand; i++) {
      let color = faker.helpers.arrayElement(['a', 'b', 'red', 'bl', 'magen', 'V', 'Pu'])
      autoCompletePage.typeText(color)
      autoCompletePage.selectOption()
    }
  })

  it('Auto complete Type single color name', () => {
    let color = faker.helpers.arrayElement(['a', 'b', 'red', 'bl', 'magen', 'V', 'Pu'])
    autoCompletePage.typeTextSingle(color)
    autoCompletePage.selectSingleOption()
  })
})
