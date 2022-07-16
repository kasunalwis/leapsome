import { testUsers } from '@fixtures/users';
import { FeedbackWall, LoginPage } from 'cypress/e2e/pages';

describe('Authentication flow', () => {
    it('Verify valid user can login and logout from the application', () => {
        LoginPage.visitLoginPage();
        LoginPage.loginWithCredentials(testUsers.login.username, testUsers.login.seedPassword);
        FeedbackWall.verifyFeedBackPageLoadedProperly();
        FeedbackWall.logOutFromApplication();
        LoginPage.verifyLoginPageLoadedProperly();
    });

    it('Verify error validation for invalid login credentials', () => {
        LoginPage.visitLoginPage();
        LoginPage.loginWithCredentials(testUsers.login.username, 'test@123');
        LoginPage.verifyIncorrectCredentialsMessage();
    });
});