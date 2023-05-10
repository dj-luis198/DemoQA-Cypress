import 'cypress-file-upload'
import 'cypress-iframe'
require('cypress-downloadfile/lib/downloadFileCommand')
require('cy-verify-downloads').addCustomCommand()

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('gClear', (locator) => {
  cy.get(locator).clear()
})

Cypress.Commands.add('cClick', (locator) => {
  cy.contains(locator).click({ force: true })
})

Cypress.Commands.add('gDinamicClick', (locator) => {
  cy.get(locator).eq(1).click()
})

Cypress.Commands.add('gClick', (locator) => {
  cy.get(locator).click({ force: true })
})

Cypress.Commands.add('gDblClick', (locator) => {
  cy.get(locator).dblclick()
})

Cypress.Commands.add('gRgtClick', (locator) => {
  cy.get(locator).rightclick()
})

Cypress.Commands.add('gType', (locator, text) => {
  cy.get(locator).as('locatorType')
  cy.get('@locatorType').clear()
  cy.get('@locatorType').type(text)
})

Cypress.Commands.add('gCheck', (locator) => {
  cy.get(locator).check({ force: true })
})

Cypress.Commands.add('gSelect', (locator, text) => {
  cy.get(locator).select(text)
})

Cypress.Commands.add('Iframe', (iframe, locator) => {
  cy.frameLoaded(iframe)
  //como hay muchos ifames en la pagina tengo que especificar cual es
  return cy.iframe(iframe).find(locator)
})

Cypress.Commands.add('getIframeBody', (iframe) => {
  return cy
    .get(iframe)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
})

Cypress.Commands.add('getIframeChildrenBody', (iframe, iframe2) => {
  return cy
    .get(iframe)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
    .find(iframe2)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
})

Cypress.Commands.add('randomDate', () => {
  let date = new Date(+(new Date()) - Math.floor(Math.random() * 500000000000))
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()
  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  date = [month, day, year].join('/')
  return date
})

Cypress.Commands.add('findInPage', (index, value, totalPages, nextButton, titlesLinks) => {
  let found = false
  cy.get(totalPages).as('pages')
  cy.get('@pages').its('text').then(len => {
    if (index >= len) {
      return false
    } else {
      cy.get(nextButton).eq(1).click({ force: true })
    }
    cy.get(titlesLinks).each((itemTitle) => {
      const itemText = itemTitle.text()
      if (itemText === value) {
        found = true
        cy.wrap(itemTitle).click({ force: true })
        return false
      }
    })
  }).then(() => {
    if (!found) {
      cy.findInPage(index++, value)
    }
  })
})

Cypress.Commands.add('register', (user, pass) => {
  cy.request({
    method: 'POST',
    url: '/Account/v1/User',
    body: {
      userName: user,
      password: pass
    },
  })
})

Cypress.Commands.add('loginGUI', (loginData) => {
  cy.session([loginData.userName, loginData.userPass], () => {
    cy.visit(loginData.url)
    cy.gType(loginData.nameInput, loginData.userName)
    cy.gType(loginData.passInput, loginData.userPass)
    cy.gClick(loginData.loginBtn)
    cy.url().should('contain', '/profile')
  })
})

// Custom AXE-CORE Logging

Cypress.Commands.add('customCheckAlly', () => {
  const severityIndicatorIcons = {
    minor: '⚪',
    moderate: '🌕',
    serious: '⭕',
    critical: '⛔',
  }
  function callback(violations) {
    violations.forEach((violation) => {
      const nodes = Cypress.$(
        violation.nodes.map((node) => node.target).join(',')
      )
      Cypress.log({
        name: `${severityIndicatorIcons[violation.impact]} AllY`,
        consoleProps: () => violation,
        $el: nodes,
        message: `[${violation.help}](${violation.helpUrl})`,
      })
      violation.nodes.forEach(({ target }) => {
        Cypress.log({
          name: 'ℹ▶',
          consoleProps: () => violation,
          $el: Cypress.$(target.join(',')),
          message: target,
        })
      })
    })
  }
  cy.checkA11y(null, null, callback)
})