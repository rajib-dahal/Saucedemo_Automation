const { defineConfig } = require("cypress");
const path = require("path");
const dotenv = require("dotenv");

module.exports = defineConfig({
  e2e: {
    experimentalPromptCommand: true,

    setupNodeEvents(on, config) {
      // Pick environment (default = staging)
      const ENV = process.env.NODE_ENV || "staging";

      // Load the corresponding .env file from root
      const envFilePath = path.resolve(__dirname, `.env.${ENV}`);
      const envConfig = dotenv.config({ path: envFilePath });

      if (envConfig.error) {
        throw new Error(`❌ Failed to load environment file: ${envFilePath}`);
      }

      // Merge env variables into Cypress config.env
      config.env = {
        ...config.env,
        username: envConfig.parsed.CYPRESS_USERNAME || process.env.CYPRESS_USERNAME,
        password: envConfig.parsed.CYPRESS_PASSWORD || process.env.CYPRESS_PASSWORD,
        token: envConfig.parsed.AUTHENTICATION_TOKEN || process.env.AUTHENTICATION_TOKEN,
        API_URL: envConfig.parsed.API_URL || process.env.API_URL,
        envName: ENV,
      };

      // Set baseUrl dynamically
      config.baseUrl = envConfig.parsed.BASE_URL || process.env.BASE_URL;

      return config;
    },

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome-report",
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
