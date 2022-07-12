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
  e2e: {
    specPattern: "./cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000",
  },
});
