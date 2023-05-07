///<reference types="cypress" />
const { faker } = require('@faker-js/faker')
import { HomePage } from '../../support/pages/homePage'
import { PracticeFormPage } from '../../support/pages/practiceFormPage'

describe('Practice form', () => {
  const homePage = new HomePage()
  const practiceFormPage = new PracticeFormPage()
  let auto
  let firsName = faker.name.firstName()
  let lastName = faker.name.lastName()
  let email = faker.internet.email()
  let gender = faker.helpers.arrayElement(['Male', 'Female', 'Other'])
  let movil = faker.phone.number()
  let monthDateBirth = faker.datatype.number({ min: 1, max: 11 })
  let dayDateBirth = faker.datatype.number({ min: 1, max: 28 })
  let yearDateBirth = faker.datatype.number({ min: 1970, max: 2002 })
  let address = faker.address.secondaryAddress()
  let hobbis = faker.helpers.arrayElement(['1', '2', '3'])

  before(() => {
    cy.fixture('autocomplete').then(data => {
      auto = data
    })
  })

  beforeEach(() => {
    cy.visit('/')
    homePage.clickForms()
    practiceFormPage.clickPracticeForm()
  })

  it('test case description', () => {
    practiceFormPage.typeFirstName(firsName)
    practiceFormPage.typeLastName(lastName)
    practiceFormPage.typeUserEmail(email)
    practiceFormPage.selectGender(gender)
    practiceFormPage.typeUserNumber(movil)
    practiceFormPage.SelectDateOfBirth(dayDateBirth, monthDateBirth, yearDateBirth)
    practiceFormPage.typeAutocomplete(auto.subjects1.txt)
    practiceFormPage.returnAutocomplete().each(function ($ele) {
      if ($ele.text().includes('Arts')) {
        cy.wrap($ele).click()
      }
    })
    practiceFormPage.checkHobbies(hobbis)
    practiceFormPage.returnUploadPicture().attachFile('cat.jpg')
    practiceFormPage.returnUploadPicture().invoke('prop', 'value').then(res => {
      expect(res).include('cat.jpg')
    })
    practiceFormPage.typeCurrentAddress(address)
    practiceFormPage.selectState('2')
    practiceFormPage.selectCity('1')
  })
})