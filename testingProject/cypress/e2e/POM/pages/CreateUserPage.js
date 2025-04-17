class CreateUserPage {
  usernameField = '#id_username';
  passwordField = '#id_password';
  submitButton = '//button[@type="submit"]';

  get usernameFieldElement() {
    return cy.get(this.usernameField);
  }

  get passwordFieldElement() {
    return cy.get(this.passwordField);
  }

  get submitButtonElement() {
    return cy.xpath(this.submitButton);
  }

  createUser(username, password) {
    this.usernameFieldElement.type(username);
    this.passwordFieldElement.type(password);
    this.submitButtonElement.click();
  }
}

export const createUserPage = new CreateUserPage();
