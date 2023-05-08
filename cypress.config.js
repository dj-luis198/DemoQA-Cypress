const { defineConfig } = require('cypress')
require('dotenv').config()
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const { isFileExist, findFiles } = require('cy-verify-downloads')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'demoQA',
  },
  e2e: {
    setupNodeEvents(on, config) {
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

  chromeWebSecurity: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
})
