const { defineConfig } = require("cypress")
require("dotenv").config()

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    experimentalPromptCommand: true,

    env:{
      username:process.env.CYPRESS_USERNAME,
      password:process.env.CYPRESS_PASSWORD,
      token: process.env.AUTHENTICATION_TOKEN,
      API_URL: process.env.API_URL
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      },

      
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mochawesome-report",
    "overwrite": false,
    "html": false,
    "json": true
    }
  },
});

