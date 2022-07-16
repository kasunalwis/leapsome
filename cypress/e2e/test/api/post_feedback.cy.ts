import { faker } from '@faker-js/faker';
import { testUsers } from '@fixtures/users';
import { FeedbackWall, LoginPage } from 'cypress/e2e/pages';

describe('Feedback flow via API', () => {
    it('Successfully perform POST call for feedback endpoint', () => {
        LoginPage.loginWithAuthToken(testUsers.login.username, testUsers.login.seedPassword);
        FeedbackWall.createdFeedBack(feedBackData.title, feedBackData.body, feedBackData.id);
    });

    const feedBackData = {
        title: faker.random.word(),
        body: faker.random.words(),
        id: 2
    }
});