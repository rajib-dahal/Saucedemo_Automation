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

      // In CI/CD, .env files might not exist, so we don't throw an error.
      // We log a warning instead and rely on process.env variables.
      if (envConfig.error) {
        console.warn(`⚠️  Warning: Failed to load environment file: ${envFilePath}. Relying on system environment variables.`);
      }

      const parsedEnv = envConfig.parsed || {};

      // Merge env variables into Cypress config.env
      config.env = {
        ...config.env,
        username: parsedEnv.CYPRESS_USERNAME || process.env.CYPRESS_USERNAME,
        password: parsedEnv.CYPRESS_PASSWORD || process.env.CYPRESS_PASSWORD,
        token: parsedEnv.AUTHENTICATION_TOKEN || process.env.AUTHENTICATION_TOKEN,
        API_URL: parsedEnv.API_URL || process.env.API_URL,
        envName: ENV,
      };

      // Set baseUrl dynamically
      config.baseUrl = parsedEnv.BASE_URL || process.env.BASE_URL;

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
