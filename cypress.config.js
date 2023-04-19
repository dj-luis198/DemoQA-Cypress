const { defineConfig } = require("cypress");
const { faker } = require('@faker-js/faker');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const { isFileExist, findFiles } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile });
      on('task', { isFileExist, findFiles });

    },

    baseUrl: 'https://demoqa.com',
  },
  chromeWebSecurity: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
});
