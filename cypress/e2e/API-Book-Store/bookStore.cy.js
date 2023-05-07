//https://ajv.js.org/guide/getting-started.html
//https://www.youtube.com/watch?v=j-WT-4TdBt0

///<reference types="cypress" />
const Ajv = require('ajv')
import { Schema } from '../../support/schemas/createPOST'
import { SchemaToken } from '../../support/schemas/tokenPOST'
import { SchemaUser } from '../../support/schemas/userGET'
import { SchemaGBooks } from '../../support/schemas/booksGET'
import { SchemaBooksUser } from '../../support/schemas/booksUserPOST'
import { SchemaBook } from '../../support/schemas/bookGET'

describe('Account API', () => {
  const ajv = new Ajv()
  const schema = Schema
  const schemaToken = SchemaToken
  const schemaUser = SchemaUser
  const schemaGBooks = SchemaGBooks
  const schemaBooksUser = SchemaBooksUser
  const schemaBook = SchemaBook

  let userID
  let token
  let book, book2, book3
  let userName = Cypress.env('userName')
  let userPass = Cypress.env('userPass')

  it('Post - Create user', () => {
    cy.request({
      method: 'POST',
      url: '/Account/v1/User',
      body: {
        userName: userName,
        password: userPass
      },
    }).then((response) => {
      expect(response.status).is.eq(201)
      const validate = ajv.compile(schema)
      const valid = validate(response.body)
      expect(valid, 'schema valid?').to.be.true
      userID = response.body.userID
    })
  })

  it('Post - Generate Token', () => {
    cy.request({
      method: 'POST',
      url: '/Account/v1/GenerateToken',
      body: {
        userName: userName,
        password: userPass
      },
    }).then((response) => {
      expect(response.status).is.eq(200)
      const validate = ajv.compile(schemaToken)
      const valid = validate(response.body)
      expect(valid, 'schema valid?').to.be.true
      token = response.body.token
    })
  })

  it('Post - Authorized', () => {
    cy.log(token)
    cy.request({
      method: 'POST',
      url: '/Account/v1/Authorized',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        userName: userName,
        password: userPass
      },
    }).then((response) => {
      expect(response.status).is.eq(200)
      expect(response.body).is.eq(true)

    })
  })

  it('Get - User', () => {
    cy.request({
      method: 'GET',
      url: `/Account/v1/User/${userID}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        expect(response.status).to.have.eq(200)
        const validate = ajv.compile(schemaUser)
        const valid = validate(response.body)
        expect(valid, 'schema valid?').to.be.true
      })
  })

  it('Get - Books', () => {
    cy.request({
      method: 'GET',
      url: '/BookStore/v1/Books',
    })
      .then((response) => {
        expect(response.status).to.have.eq(200)
        const validate = ajv.compile(schemaGBooks)
        const valid = validate(response.body)
        expect(valid, 'schema valid?').to.be.true
        book = response.body.books[0].isbn
        book2 = response.body.books[1].isbn
        book3 = response.body.books[2].isbn
      })
  })

  it('Post - add books user', () => {
    cy.request({
      method: 'POST',
      url: '/BookStore/v1/Books',
      auth: {
        user: userName,
        pass: userPass
      },
      body: {
        userId: userID,
        collectionOfIsbns: [{ isbn: book }, { isbn: book3 }]
      },
    }).then((response) => {
      expect(response.status).is.eq(201)
      const validate = ajv.compile(schemaBooksUser)
      const valid = validate(response.body)
      expect(valid, 'schema valid?').to.be.true
      expect(response.body.books[0].isbn).to.eq(book)
    })
  })

  it('Get - Book', () => {
    cy.request({
      method: 'GET',
      url: '/BookStore/v1/Book',
      qs: {
        ISBN: book2
      },
    })
      .then((response) => {
        expect(response.status).to.have.eq(200)
        const validate = ajv.compile(schemaBook)
        const valid = validate(response.body)
        expect(valid, 'schema valid?').to.be.true
      })
  })


  it('PUT - book user', () => {
    cy.request({
      method: 'PUT',
      url: `/BookStore/v1/Books/${book}`,
      auth: {
        user: userName,
        pass: userPass
      },
      body: {
        userId: userID,
        isbn: book2
      },
    }).then((response) => {
      expect(response.status).is.eq(200)
      const validate = ajv.compile(schemaUser)
      const valid = validate(response.body)
      expect(valid, 'schema valid?').to.be.true
    })
  })

  it('DELETE - book', () => {
    cy.request({
      method: 'DELETE',
      url: '/BookStore/v1/Book',
      auth: {
        user: userName,
        pass: userPass
      },
      body: {
        userId: userID,
        isbn: book2
      },
    })
      .then((response) => {
        expect(response.status).to.have.eq(204)
      })
  })

  it('DELETE - books', () => {
    cy.request({
      method: 'DELETE',
      url: '/BookStore/v1/Books',
      qs: {
        UserId: userID
      },
      auth: {
        user: userName,
        pass: userPass
      },
    })
      .then((response) => {
        expect(response.status).to.have.eq(204)
      })
  })


  it('DELETE - User', () => {
    cy.request({
      method: 'DELETE',
      url: `/Account/v1/User/${userID}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        expect(response.status).to.have.eq(204)
      })
  })
})