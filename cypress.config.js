const { defineConfig } = require('cypress')
const esbuildPreprocessor = require('./cypress/support/esbuild-preprocessor')
require('dotenv').config()
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const { isFileExist, findFiles } = require('cy-verify-downloads')

module.exports = defineConfig({
  projectId: 'sdhkib',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'demoQA',
  },
  e2e: {
    setupNodeEvents(on, config) {
      esbuildPreprocessor(on)
      require('cypress-mochawesome-reporter/plugin')(on)
      on('task', { downloadFile })
      on('task', { isFileExist, findFiles })
      config.env.userName = process.env.CYPRESS_USER_NAME
      config.env.userPass = process.env.CYPRESS_USER_PASS
      return config
    },

    env: {
      snapshotOnly: true,
      requestMode: true,
    },

    baseUrl: 'https://demoqa.com',

    screenshotOnRunFailure: false,
    video: false,

  },
  retries:{
    runMode:2,
    openMode:0
  },

  chromeWebSecurity: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 5000,
})
