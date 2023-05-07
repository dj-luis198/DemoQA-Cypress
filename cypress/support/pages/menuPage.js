export class MenuPage {
  constructor() {
    this.menuButton = 'Menu'
    this.mainItems = '[id=nav]>li'
  }

  clickMenu() {
    cy.contains('span[class="text"]', this.menuButton).click()
  }

  returnSubItems() {
    cy.get(this.mainItems).children('a').contains('Main Item 2').realHover()
    return cy.get(this.mainItems).eq(1)
  }

  returnSubSubList() {
    cy.get(this.mainItems).children('a').contains('Main Item 2').realHover()
    cy.get(this.mainItems).find('li').as('el').eq(2).realHover()
    return cy.get('@el').find('li').eq(0).invoke('text')
  }
}