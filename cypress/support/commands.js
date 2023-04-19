import 'cypress-file-upload';
import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');
require('cy-verify-downloads').addCustomCommand();
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
  cy.get(locator).click({ force: true });
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

Cypress.Commands.add('gSelect', (locator, text) => {
  cy.get(locator).Select(text);
});

Cypress.Commands.add('Iframe', (iframe, locator) => {
  cy.frameLoaded(iframe);
  //como hay muchos ifames en la pagina tengo que especificar cual es
  return cy.iframe(iframe).find(locator);
});

Cypress.Commands.add('getIframeBody', (iframe) => {
  return cy
    .get(iframe)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
});

Cypress.Commands.add('getIframeChildrenBody', (iframe, iframe2) => {
  return cy
    .get(iframe)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
    .find(iframe2)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
});