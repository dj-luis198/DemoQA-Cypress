export class BookStorePaginationPage {

  constructor() {
    this.bookStoreButton = 'Book Store'
    this.rowsPerPageSelect = 'select[aria-label="rows per page"]'
    this.totalPages = '.-pageInfo>.-totalPages'
    this.nextButton = 'button.-btn'
    this.titlesLinks = 'div.rt-td div>span>a'
  }

  clickBookStoreButton() {
    cy.contains('span[class="text"]', this.bookStoreButton).click({ force: true })
  }

  selectRowsPerPage() {
    cy.get(this.rowsPerPageSelect).select('5', { force: true })
  }

  findItem(value) {
    cy.findInPage(0, value, this.totalPages, this.nextButton, this.titlesLinks)
  }
}