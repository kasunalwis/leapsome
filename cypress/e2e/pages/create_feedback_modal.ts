const createFeedbackModalSelectors = {
    feedBackTitle: '[data-test-id="feedBackTitle"]',
    feedBackComment: '[data-test-id="feedBackComment"]',
    feedBackDropDown: '[data-test-id="feedBackDropDown"]',
    feedBackSubmit: '[data-test-id="feedBackSubmit"]'
}

export class CreateFeedbackModal {
    static fillFeedBackForm(title: string, comment: string, receiver: string) {
        cy.allure().logStep('Start filling feed back form')
        cy.get(createFeedbackModalSelectors.feedBackTitle).eq(0).type(title);
        cy.get(createFeedbackModalSelectors.feedBackComment).eq(0).type(comment);
        cy.get(createFeedbackModalSelectors.feedBackDropDown).eq(0).select(receiver);
        cy.get(createFeedbackModalSelectors.feedBackSubmit).eq(0).click();
    }
}