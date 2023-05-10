// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
import 'cypress-mochawesome-reporter/register'
import 'cypress-axe'
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-plugin-api'
import 'cypress-real-events'
import './commands'

Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

// Alternatively you can use CommonJS syntax:
// require('./commands')