import { faker } from '@faker-js/faker';
import { testUsers } from '@fixtures/users';
import { FeedbackWall, LoginPage } from '@lib/index';

describe('Feedback flow via API', () => {
    beforeEach(() => {
        LoginPage.loginWithAuthToken(testUsers.login.username, testUsers.login.seedPassword);
    });

    it('Successfully perform POST call for feedback endpoint', () => {
        FeedbackWall.createdFeedBack(feedBackData.title, feedBackData.body, feedBackData.id);
    });

    it('Should not allowed to provide feedback for same user', () => {
        FeedbackWall.createdFeedBack(feedBackData.title, feedBackData.body, 1, 400);
    });

    const feedBackData = {
        title: faker.random.word(),
        body: faker.random.words(),
        id: 2
    }
});