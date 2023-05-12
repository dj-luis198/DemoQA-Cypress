///<reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { BrokenLinksImagesPage } from '../../support/pages/brokenLinksImagesPage'

describe('Broken Links - Images', () => {
  const homePage = new HomePage()
  const brokenLinksImagesPage = new BrokenLinksImagesPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickElements()
    brokenLinksImagesPage.clickBrokenLinks()
  })

  it('Verificar imagenes de la pagina', () => {
    brokenLinksImagesPage.returnImageImg().each(img => {
      const href = img.prop('naturalHeight')
      expect(href).is.greaterThan(0)
    })
  })

  it('Verificar links de la pagina', () => {
    brokenLinksImagesPage.returnLinks().each(page => {
      cy.request(page.prop('href'))
    })
  })
})