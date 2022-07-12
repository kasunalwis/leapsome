
import { testUsers } from '../../fixtures/users';
import { LoginPage } from '../pages';
import { FeedbackPage } from '../pages/feedback_page';

describe('Authentication flow', () => {
    it('Verify valid user can login and logout from the application', () => {
        LoginPage.visitLoginPage();
        LoginPage.loginWithCredentials(testUsers.login.username, testUsers.login.seedPassword);
        FeedbackPage.verifyFeedBackPageLoadedProperly()
        FeedbackPage.logOutFromApplication();
        LoginPage.verifyLoginPageLoadedProperly();
    });

    it('Verify error validation for invalid login credentials', () => {
        LoginPage.visitLoginPage();
        LoginPage.loginWithCredentials(testUsers.login.username, 'test@123');
        LoginPage.verifyIncorrectCredentialsMessage();
    });
});