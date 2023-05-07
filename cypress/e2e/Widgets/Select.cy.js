//https://www.youtube.com/watch?v=PpzKIRVkn_0&list=PLMZdod-kiMhKiRztQX_rng7EfcI5OteMR&index=15

///<reference types="cypress" />
const { faker } = require('@faker-js/faker')
import { HomePage } from '../../support/pages/homePage'
import { SelectPage } from '../../support/pages/selectPage'

describe('Select Menu', () => {
  const homePage = new HomePage()
  const selectPage = new SelectPage()

  let singleOp = faker.helpers.arrayElement(
    [
      { index: '0-0', value: 'Group 1, option 1' },
      { index: '0-1', value: 'Group 1, option 2' },
      { index: '1-0', value: 'Group 2, option 1' },
      { index: '1-1', value: 'Group 2, option 2' },
      { index: '2', value: 'A root option' },
      { index: '3', value: 'Another root option' }
    ])

  beforeEach(() => {
    cy.visit('/')
    homePage.clickWidgetsCard()
    selectPage.clickSelectMenu()
  })

  it('Select Value (id and tabindex)', () => {
    selectPage.clickSelectInput()
    selectPage.returnMenuOptions().should('be.visible')
    selectPage.selectToOption(singleOp.index)
    selectPage.returnSingleValue().should('have.text', singleOp.value)
  })

  it('Old Style Select Menu (select option por text)', () => {
    selectPage.selectOldSelectMenu('Blue').should('have.value', '1')
    selectPage.returnOptionValue('1').invoke('prop', 'selected').should('eq', true)
  })

  it('Old Style Select Menu (select option por value)', () => {
    selectPage.selectOldSelectMenuValue('1')
      .find('option:selected').as('selectV')
      .invoke('text')
      .should('eq', 'Blue')
    cy.get('@selectV').invoke('val').should('eq', '1')
  })

  it('Select One (es igual al primero)', () => {
    selectPage.clickSelectTitle()
    selectPage.returnMenuOptTitle().should('be.visible')
    selectPage.selectToOptionTitle('0-0')
    selectPage.returnSingleValueTitle().should('have.text', 'Dr.')
  })

  it('Multiselect drop down (sin select)', () => {
    selectPage.clickMultiselectDropDown()
    selectPage.returnOptionsDropDown().should('be.visible')
    selectPage.selectToOptionDropDown('3')
    selectPage.selectToOptionDropDown('1')
    selectPage.returnselectOptionDropDown().invoke('text').should('eq', ['Red', 'Blue'].join(''))
  })

  it('Standard multi select (con select)', () => {
    selectPage.selectoptionsCars(['Volvo', 'Audi'])
    selectPage.returnOptionsSelected().invoke('text').should('eq', ['Volvo', 'Audi'].join(''))

  })
})