export class AccordianPage {

  constructor() {
    this.accordianButton = 'Accordian'
    this.accordionItems = '.card'
    this.section1Heading = '#section1Heading'
    this.section2Heading = '#section2Heading'
    this.section3Heading = '#section3Heading'
    this.statusSection = '[class^="collapse"]'
  }

  clickAccordian() {
    cy.contains('span[class="text"]', this.accordianButton).click()
  }

  returnAccordionItems() {
    return cy.get(this.accordionItems)
  }

  collapseAll() {
    cy.get(this.accordionItems).find('[class^="collapse"]').each(function (item) {
      cy.wrap(item).invoke('removeClass', 'show')
    })
  }

  clickSection1() {
    cy.get(this.section1Heading).click({ force: true })
  }

  returnSection1() {
    return cy.get(this.section1Heading)
  }

  clickSection2() {
    cy.gClick(this.section2Heading)
  }

  returnSection2() {
    return cy.get(this.section2Heading)
  }

  returnSection3() {
    return cy.get(this.section3Heading)
  }

  clickSection3() {
    cy.gClick(this.section3Heading)
  }

  returnStatusSection1() {
    return cy.get(this.accordionItems).eq(0).find(this.statusSection)
  }

  returnStatusSection2() {
    return cy.get(this.accordionItems).eq(1).find(this.statusSection)
  }

  returnStatusSection3() {
    return cy.get(this.accordionItems).eq(2).find(this.statusSection)
  }
}