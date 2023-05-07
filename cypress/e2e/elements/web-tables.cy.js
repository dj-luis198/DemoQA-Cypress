// <reference types="cypress" />
const { faker } = require('@faker-js/faker')
import { HomePage } from '../../support/pages/homePage'
import { WebTablesPage } from '../../support/pages/webTablesPage'


describe('Web Tables', () => {
  const homePage = new HomePage()
  const webTablePage = new WebTablesPage()

  let data

  before(() => {
    cy.fixture('searchTable').then(d => {
      data = d
    })
  })

  beforeEach(() => {
    cy.visit('/')
    homePage.clickElements()
    webTablePage.clickWebTable()
  })

  it('validar ingresar 10 usuarios a la tabla', () => {
    let count = 3

    for (let i = 0; i <= 10; i++) {
      let firstN = faker.name.firstName()
      let lastN = faker.name.lastName()
      let email = faker.internet.email()
      let age = faker.finance.account(2)
      let salary = faker.finance.account()
      let dep = faker.address.direction()
      let array = [firstN, lastN, age, email, salary, dep]

      webTablePage.registrationForm(firstN, lastN, email, age, salary, dep)
      webTablePage.returnNext().invoke('prop', 'disabled').then(res => {
        if (res) {
          for (let j = 0; j < 6; j++) {
            webTablePage.returnRow(count, j).invoke('text').then(resp => {
              expect(resp).is.eql(array[j])
            })
          }
        } else {
          count = 0
          webTablePage.clickNext()
        }
        count++
      })
    }
  })

  it('validar buscar en la tabla (con resultados) ', () => {
    data.true.search.forEach(function (text) {
      webTablePage.SearchText(text)
      webTablePage.returnBody().invoke('text').then(res => {
        expect(res).have.string(text)
      })
    })
  })

  it('intentar buscar en la tabla (sin resultados) ', () => {
    data.fail.search.forEach(function (text) {
      webTablePage.SearchText(text)
      webTablePage.returntextNoData().invoke('text').then(res => {
        expect(res).have.string('No rows found')
      })
    })
  })
})