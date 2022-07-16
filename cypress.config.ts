const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: "cypress/fixtures",
  video: false,
  chromeWebSecurity: false,
  viewportHeight: 1000,
  viewportWidth: 1440,
  defaultCommandTimeout: 5000,
  responseTimeout: 5000,
  taskTimeout: 5000,
  pageLoadTimeout: 5000,
  requestTimeout: 5000,
  retries: 0,
  env: {
    allure: true,
    allureResultsPath: "allure-results",
    allureLogCypress: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.ts")(on, config);
    },
    specPattern: "./cypress/e2e/test/**/*.cy.ts",
    baseUrl: "http://localhost:3000",
    experimentalSessionAndOrigin: true
  },
});
