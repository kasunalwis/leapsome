const feedbackWallSelectors = {
    fullScreenOption: '[title="Toggle Fullscreen"]',
    createNewFeedBackButton: '[data-test-id="createNewFeedBack"]',
    signOutLink: '[data-test-id="signOut"]',
    feedbackWallTitle: '[data-test-id="feedBackWallTitle"]',
    feedbackWallBody: '[data-test-id="feedBackWallBody"]'
}

export class FeedbackWall {
    static verifyFeedBackPageLoadedProperly() {
        cy.allure().logStep('Verify Feed back page loaded properly')
        cy.get(feedbackWallSelectors.fullScreenOption).should('be.visible');
        cy.get(feedbackWallSelectors.createNewFeedBackButton).should('be.visible');
    }

    static logOutFromApplication() {
        cy.allure().logStep('Log out from application')
        cy.get(feedbackWallSelectors.signOutLink).click();
    }

    static initiateCreateNewFeedBack() {
        cy.allure().logStep('Initiate create new feedback')
        cy.get(feedbackWallSelectors.createNewFeedBackButton).click();
    }

    static verifyFeedBackDisplayInWall(title: string, body: string, index: number = 0) {
        cy.allure().logStep('Verify feed back display in wall')
        cy.get(feedbackWallSelectors.feedbackWallTitle).eq(index).should('contain', title);
        cy.get(feedbackWallSelectors.feedbackWallBody).eq(index).should('contain', body);
    }

    static createdFeedBack(title: string, body: string, receiverId: number) {
        cy.allure().logStep('Created Feed back');
        cy.createFeedBack(title, body, receiverId);
    }
}