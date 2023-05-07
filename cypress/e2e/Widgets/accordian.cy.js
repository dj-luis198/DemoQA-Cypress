import { HomePage } from '../../support/pages/homePage'
import { AccordianPage } from '../../support/pages/accordianPage'

describe('Accordian', () => {
  const homePage = new HomePage()
  const accordianPage = new AccordianPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickWidgetsCard()
    accordianPage.clickAccordian()
  })

  it('Select firs section', () => {
    accordianPage.returnAccordionItems()
    accordianPage.returnSection1().should('have.text', 'What is Lorem Ipsum?')
    accordianPage.returnStatusSection1().should('have.class', 'show')
    accordianPage.returnStatusSection2().should('not.have.class', 'show')
    accordianPage.returnStatusSection3().should('not.have.class', 'show')
    accordianPage.clickSection1()
    accordianPage.returnStatusSection1().should('not.have.class', 'show')
  })

  it('Select second section', () => {
    accordianPage.returnAccordionItems()
    accordianPage.returnSection2().should('have.text', 'Where does it come from?')
    accordianPage.returnStatusSection1().should('have.class', 'show')
    accordianPage.returnStatusSection2().should('not.have.class', 'show')
    accordianPage.returnStatusSection3().should('not.have.class', 'show')
    accordianPage.clickSection2()
    accordianPage.returnStatusSection1().should('not.have.class', 'show')
    accordianPage.returnStatusSection2().should('have.class', 'show')
    accordianPage.returnStatusSection3().should('not.have.class', 'show')
  })

  it('Select third section', () => {
    accordianPage.returnAccordionItems()
    accordianPage.returnSection3().should('have.text', 'Why do we use it?')
    accordianPage.returnStatusSection1().should('have.class', 'show')
    accordianPage.returnStatusSection2().should('not.have.class', 'show')
    accordianPage.returnStatusSection3().should('not.have.class', 'show')
    accordianPage.clickSection3()
    accordianPage.returnStatusSection1().should('not.have.class', 'show')
    accordianPage.returnStatusSection2().should('not.have.class', 'show')
    accordianPage.returnStatusSection3().should('have.class', 'show')
  })
})