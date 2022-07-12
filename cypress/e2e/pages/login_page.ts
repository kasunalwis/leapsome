const loginPageSelectors = {
    username: '[id="username"]',
    password: '[id="password"]',
    submitButton: '[type="submit"]',
    invalidCredentialsMessage: '[data-test-id="invalidCredentials"]'
}

export class LoginPage {
    static visitLoginPage() {
        cy.visit('');
    }

    static loginWithCredentials(username: string, password: string) {
        cy.intercept('POST', /auth\/sign-in/).as('waitForLogin');
        cy.get(loginPageSelectors.username).type(username);
        cy.get(loginPageSelectors.password).type(password);
        cy.get(loginPageSelectors.submitButton).click();
        cy.wait('@waitForLogin');
    }

    static verifyLoginPageLoadedProperly() {
        cy.get(loginPageSelectors.username).should('be.visible');
        cy.get(loginPageSelectors.password).should('be.visible');
        cy.get(loginPageSelectors.submitButton).should('be.visible');
    }

    static verifyIncorrectCredentialsMessage() {
        cy.get(loginPageSelectors.invalidCredentialsMessage).should('be.visible');
    }
}