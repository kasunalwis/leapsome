const feedbackPageSelectors = {
    fullScreenOption: '[title="Toggle Fullscreen"]',
    createNewFeedBackButton: '[type="button"]',
    signOutLink: '[data-test-id="signOut"]'
}

export class FeedbackPage {
    static verifyFeedBackPageLoadedProperly() {
        cy.get(feedbackPageSelectors.fullScreenOption).should('be.visible');
        cy.get(feedbackPageSelectors.createNewFeedBackButton).should('be.visible');
    }

    static logOutFromApplication() {
        cy.get(feedbackPageSelectors.signOutLink).click();
    }
}