const { defineConfig } = require("cypress")
require("dotenv").config()

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,

    env:{
      username:process.env.CYPRESS_USERNAME,
      password:process.env.CYPRESS_PASSWORD,

      
      
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      }
  },
});

