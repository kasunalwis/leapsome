import "./commands";
import "@shelex/cypress-allure-plugin";

Cypress.on("uncaught:exception", (promise) => {
  if (promise) {
    return false;
  }
});
