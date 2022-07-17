declare namespace Cypress {
    interface Chainable<Subject> {
        loginWithAuthToken(email: string, password: string,): Chainable<any>;
        createFeedBack(title: string, body: string, receiverId: number, expectedStatusCode: number): Chainable<any>;
    }
}