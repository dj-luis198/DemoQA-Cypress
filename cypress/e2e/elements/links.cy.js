///<reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { LinksPage } from '../../support/pages/linksPage'

describe('links(en links se verifica que redireccionan al lugar correcto)', () => {
  const homePage = new HomePage()
  const linksPage = new LinksPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickElements()
    linksPage.clickLinkButton()
  })

  it('Veryficar link simple (sin hacer click)', () => {
    //verifico por atributos
    linksPage.returnSimpleLink().should('have.attr', 'href').and('include', 'demoqa.com')
    //verifico por propiedades
    linksPage.returnSimpleLink().should('have.prop', 'href').and('eql', 'https://demoqa.com/')
  })

  it('Veryficar link simple (haciendo click)', () => {
    //remuevo la propiedad target para que no abra en una nueva pestaña
    linksPage.returnSimpleLink().invoke('removeAttr', 'target').click()
    cy.url().should('eql', 'https://demoqa.com/')

  })

  it('Veryficar link simple (con request)', () => {
    linksPage.returnSimpleLink().then(res => {
      const href = res.prop('href')
      cy.request(href).then(res1 => {
        expect(res1.status).is.eq(200)
        expect(res1.body).include('<!doctype')
        expect(res1.body).include('<html>')
      })
    })
  })

  it('Veryficar link "Created" que envia llamada API', () => {
    cy.intercept(
      '/created'
    ).as('created')
    linksPage.clickCreated()
    cy.wait('@created').then(res => {
      expect(res.response.statusCode).is.eql(201)
      expect(res.response.statusMessage).is.eql('Created')
      expect(res.response.url).is.eql('https://demoqa.com/created')
    })
  })

  it('Veryficar link "No Content" que envia llamada API', () => {
    cy.intercept(
      '/no-content'
    ).as('noContent')
    linksPage.clicknoContent()
    cy.wait('@noContent').then(res => {
      expect(res.response.statusCode).is.eql(204)
      expect(res.response.statusMessage).is.eql('No Content')
      expect(res.response.url).is.eql('https://demoqa.com/no-content')
    })
  })

  it('Veryficar link "Moved" que envia llamada API', () => {
    cy.intercept(
      '/moved'
    ).as('moved')
    linksPage.clickMoved()
    cy.wait('@moved').then(res => {
      expect(res.response.statusCode).is.eql(301)
      expect(res.response.statusMessage).is.eql('Moved Permanently')
      expect(res.response.url).is.eql('https://demoqa.com/moved')
    })
  })

  it('Veryficar link "unauthorized" que envia llamada API', () => {
    cy.intercept(
      '/unauthorized'
    ).as('unauthorized')
    linksPage.clickUnauthorized()
    cy.wait('@unauthorized').then(res => {
      expect(res.response.statusCode).is.eql(401)
      expect(res.response.statusMessage).is.eql('Unauthorized')
      expect(res.response.url).is.eql('https://demoqa.com/unauthorized')
    })
  })

  it('Veryficar link "Forbidden" que envia llamada API', () => {
    cy.intercept(
      '/forbidden'
    ).as('forbidden')
    linksPage.clickForbidden()
    cy.wait('@forbidden').then(res => {
      expect(res.response.statusCode).is.eql(403)
      expect(res.response.statusMessage).is.eql('Forbidden')
      expect(res.response.url).is.eql('https://demoqa.com/forbidden')
    })
  })

  it('Veryficar link "invalid-url" que envia llamada API', () => {
    cy.intercept(
      '/invalid-url'
    ).as('invalid-url')
    linksPage.clickInvalidUrl()
    cy.wait('@invalid-url').then(res => {
      expect(res.response.statusCode).is.eql(404)
      expect(res.response.statusMessage).is.eql('Not Found')
      expect(res.response.url).is.eql('https://demoqa.com/invalid-url')
    })
  })
})