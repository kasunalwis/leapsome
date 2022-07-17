let ACCESS_TOKEN: string;
let API_URL: string = 'http://localhost:3022';

Cypress.Commands.add('loginWithAuthToken', (username, password) => {
  cy.session([username, password], () => {
    loginRequest(username, password);
  });
});

Cypress.Commands.add('createFeedBack', (title, body, receiverId, expectedStatusCode) => {
  feedback(title, body, receiverId, expectedStatusCode);
});

function loginRequest(username: string, password: string) {
  cy.request({
    method: 'POST',
    url: API_URL + '/auth/sign-in',
    headers: {
      Accept: 'application/json'
    },
    body: {
      username: username,
      password: password
    }
  }).then(({ body, status }) => {
    expect(status, 'Successfully login').to.equal(200);
    ACCESS_TOKEN = 'Bearer ' + body.accessToken;
    window.localStorage.setItem('Authorization', ACCESS_TOKEN);
  });
}

function feedback(title: string, body: string, receiverId: number, expectedStatusCode: number) {
  if (ACCESS_TOKEN) {
    cy.request({
      method: 'POST',
      url: API_URL + '/feedback',
      headers: {
        Authorization: ACCESS_TOKEN
      },
      body: {
        body: body,
        receiverId: receiverId,
        title: title
      },
      failOnStatusCode: false
    }).then(({ status }) => {
      expect(status, 'Feedback created').to.equal(expectedStatusCode);
    });
  } else {
    throw new Error('Please login before calling internal api endpoints');
  }
}