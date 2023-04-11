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

Cypress.Commands.add('cClick', (locator) => {
  cy.contains(locator).click({ force: true });
});

Cypress.Commands.add('gDinamicClick', (locator) => {
  cy.get(locator).eq(1).click();
});

Cypress.Commands.add('gClick', (locator) => {
  cy.get(locator).click();
});

Cypress.Commands.add('gDblClick', (locator) => {
  cy.get(locator).dblclick();
});

Cypress.Commands.add('gRgtClick', (locator) => {
  cy.get(locator).rightclick();
});

Cypress.Commands.add('gType', (locator, text) => {
  cy.get(locator).type(text);
});

Cypress.Commands.add('gCheck', (locator) => {
  cy.get(locator).check({ force: true });
});