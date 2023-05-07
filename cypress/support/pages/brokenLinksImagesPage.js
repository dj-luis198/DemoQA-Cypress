export class BrokenLinksImagesPage {

  constructor() {
    this.brokenLinks = '#item-6'
    this.imageImg = 'img[src*="images"]'
    this.links = 'a[href]'
  }

  clickBrokenLinks() {
    cy.gClick(this.brokenLinks)
  }

  returnImageImg() {
    return cy.get(this.imageImg)
  }

  returnLinks() {
    return cy.get(this.links)
  }
}