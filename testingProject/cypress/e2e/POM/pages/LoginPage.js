import { LOGIN_URL,GITHUB_NETBOX_URL } from "../helpers/constants";

class LoginPage{
    logoElement = '//img[@class="hide-theme-light logo"]'; 
    usernameInputfield = '#id_username';
    passwordInputfield = '#id_password'; 
    signinButton = 'button[type="submit"]';
    messageSpan = '.alert-danger';
    messageBox ='//div[@class="toast-body"]';
    clickHereLink = '//a[text()="Click here"]';
    netboxLink = '//a[text()="NetBox"]';
 
    visit() {
      cy.visit(LOGIN_URL);
    }
    
    get UsernameInput() {
      return cy.get(this.usernameInputfield);
    }
    
    get PasswordInput() {
      return cy.get(this.passwordInputfield);
    }

    get SigninButton() {
      return cy.get(this.signinButton);
    }
        
    get toastMessage() {
      return cy.xpath(this.messageBox);
    }

    verifyToastMessage(expectedText) {
      this.toastMessage
        .should('be.visible')
        .and('contain', expectedText);
    }

    checkFieldInvalid(selector) {
      cy.get(selector).should('have.class', 'is-invalid');
    }

    login(email, password) {
      if (email !== null && email !== undefined && email !== '') {
        this.UsernameInput.clear().type(email);
      }
      if (password !== null && password !== undefined && password !== '') {
        this.PasswordInput.clear().type(password);
      }
      this.SigninButton.click();
    }

    checkElementsVisibility(elementSelectors) {
      elementSelectors.forEach(selector => {
        if (selector.startsWith('//')) {
          cy.xpath(selector).should('be.visible');
        } else {
          cy.get(selector).should('be.visible');
        }
        });
    }

    checkLinkVisibilityAndHref(text) {
      cy.contains(text)
        .should('be.visible')
        .should('have.attr', 'href');
      }

    checkGitHubUrl() {
      cy.origin('https://github.com', () => {
        cy.url().should('include', GITHUB_NETBOX_URL);
      });
    }
}
    
export const loginPage = new LoginPage();
