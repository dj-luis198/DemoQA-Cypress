const { defineConfig } = require("cypress");
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

    baseUrl:'https://demoqa.com',
  },
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
});
