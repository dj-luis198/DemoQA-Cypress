const { faker } = require('@faker-js/faker')
import { HomePage } from '../../support/pages/homePage'
import { TextBoxPage } from '../../support/pages/textBoxPage'


describe('text box', () => {
  const homePage = new HomePage()
  const textBoxPage = new TextBoxPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickElements()
    homePage.clickTextBox()
  })

  it('test case description', () => {
    const fullName = faker.name.fullName()
    const email = faker.internet.email()
    const address = faker.address.streetAddress()
    const permanentAddress = faker.address.streetAddress()

    textBoxPage.typeFullName(fullName)
    textBoxPage.typeEmail(email)
    textBoxPage.typeAddress(address)
    textBoxPage.typePermanentAddress(permanentAddress)
    textBoxPage.clickSubmit()
    textBoxPage.returnName().invoke('text').then(res => {
      expect(res.trim()).is.eql(`Name:${fullName}`)
    })
    textBoxPage.returnEmail().invoke('text').then(res => {
      expect(res.trim()).is.eql(`Email:${email}`)
    })
    textBoxPage.returnAddress().invoke('text').then(res => {
      expect(res.trim()).is.eql(`Current Address :${address}`)
    })
    textBoxPage.returnPermanentAddress().invoke('text').then(res => {
      expect(res.trim()).is.eql(`Permananet Address :${permanentAddress}`)
    })

  })
})