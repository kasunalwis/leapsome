import { faker } from '@faker-js/faker';
import { testUsers } from '@fixtures/users';
import { CreateFeedbackModal, FeedbackWall, LoginPage } from 'cypress/e2e/pages';

describe('Feedback flow', () => {
    it('Verify feedback display in feedback wall after creation', () => {
        LoginPage.visitLoginPage();
        LoginPage.loginWithCredentials(testUsers.login.username, testUsers.login.seedPassword);
        FeedbackWall.verifyFeedBackPageLoadedProperly();
        FeedbackWall.initiateCreateNewFeedBack();
        CreateFeedbackModal.fillFeedBackForm(feedBackData.title, feedBackData.body, 'tim');
        FeedbackWall.verifyFeedBackDisplayInWall(feedBackData.title, feedBackData.body);
    });

    const feedBackData = {
        title: faker.random.word(),
        body: faker.random.words()
    }
});