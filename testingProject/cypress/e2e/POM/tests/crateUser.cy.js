import { BASE_URL, SIGNUP_FULL_URL, VALID_PASSWORD, VALID_USERNAME} from '../helpers/constants';
import { createUserPage } from '../pages/CreateUserPage';

describe('Create user', () => {
  it('Test: Successful user creation', () => {
    cy.visit(SIGNUP_FULL_URL);
    createUserPage.createUser(VALID_USERNAME, VALID_PASSWORD);
    cy.url().should('eq', BASE_URL);
  });
});
