//TASK1

import { loginPage } from '../pages/LoginPage';
import {
  VALID_USERNAME,
  VALID_PASSWORD,
  INVALID_USERNAME,
  INVALID_PASSWORD,
  WHITESPACE_USERNAME,
  WHITESPACE_PASSWORD,
  SPECIAL_CHARS_USERNAME,
  EMPTY_USERNAME,
  EMPTY_PASSWORD,
  LINK_TEXT_CLICK_HERE,
  LINK_TEXT_NETBOX,
  LOGIN_ERROR_MESSAGE,
  BASE_URL,
  LOGGED_IN,
  SIGNUP_FULL_URL
} from '../helpers/constants';

describe('Login tests', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it('Test: Verify the display of elements on the login page', () => {
    loginPage.checkElementsVisibility([
        loginPage.logoElement,
        loginPage.clickHereLink,
        loginPage.netboxLink,
        loginPage.usernameInputfield,
        loginPage.passwordInputfield,
        loginPage.signinButton
      ]);
  });
  it('Test: Successful login', () => {
    loginPage.login(VALID_USERNAME, VALID_PASSWORD);
    cy.url().should('eq', BASE_URL);
    loginPage.verifyToastMessage(LOGGED_IN)
  });

  it('Test: Unsuccessful login, incorrect password', () => {
    loginPage.login(VALID_USERNAME, INVALID_PASSWORD);
    loginPage.verifyToastMessage(LOGIN_ERROR_MESSAGE);
  });

  it('Test: Unsuccessful login, non-existing user', () => {
    loginPage.login(INVALID_USERNAME, INVALID_PASSWORD);
    loginPage.verifyToastMessage(LOGIN_ERROR_MESSAGE);
  });

  it('Test: Unsuccessful login, empty fields', () => {
    loginPage.login(EMPTY_USERNAME, EMPTY_PASSWORD);
    loginPage.checkFieldInvalid(loginPage.usernameInputfield);
    loginPage.checkFieldInvalid(loginPage.passwordInputfield);
  });

  it('Test: Unsuccessful login, empty password field', () => {
    loginPage.login(VALID_USERNAME, EMPTY_PASSWORD);
    loginPage.checkFieldInvalid(loginPage.passwordInputfield);
  });

  it('Test: Unsuccessful login, empty username field', () => {
    loginPage.login(EMPTY_USERNAME, VALID_PASSWORD);
    loginPage.checkFieldInvalid(loginPage.usernameInputfield);
  });

  it('Test: Incorrect login, input with spaces', () => {
    loginPage.login(WHITESPACE_USERNAME, WHITESPACE_PASSWORD);
    loginPage.verifyToastMessage(LOGIN_ERROR_MESSAGE);
  });

  it('Test: Unsuccessful login, disallowed characters', () => {
    loginPage.login(SPECIAL_CHARS_USERNAME, INVALID_PASSWORD);
    loginPage.verifyToastMessage(LOGIN_ERROR_MESSAGE);
  });

  it('Test: Check the visibility of links and validity ', () => {
    loginPage.checkLinkVisibilityAndHref(LINK_TEXT_CLICK_HERE);
    loginPage.checkLinkVisibilityAndHref(LINK_TEXT_NETBOX);
    cy.xpath(loginPage.netboxLink).click();
    loginPage.checkGitHubUrl;

    loginPage.visit();
    cy.xpath(loginPage.clickHereLink).click();
    cy.url().should('eq', SIGNUP_FULL_URL);
  });
  
});
