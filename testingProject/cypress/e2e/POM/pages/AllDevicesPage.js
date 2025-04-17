import { ALL_DEVICES_URL } from "../helpers/devicetype";

class AllDevicesPage {
  searchField = '#quicksearch';
  checkbox = "input[name='pk']";
  messageBox = '.toast-body';
  deleteButton = '.btn.btn-red';

  navigateToAllDevicesPage() {
    cy.visit(ALL_DEVICES_URL);
  }

  get searchFieldElement() {
    return cy.get(this.searchField);
  }

  get checkboxElement() {
    return cy.xpath(this.checkbox);
  }

  get messageBoxElement() {
    return cy.get(this.messageBox);
  }

  get deleteButtonElement() {
    return cy.get(this.deleteButton);
  }

  get confirmDeleteButton() {
    return cy.contains('button', 'Delete');
  }

  searchAndDeleteDevice(deviceName) {
    this.searchFieldElement
      .should('be.visible')
      .clear()
      .type(`${deviceName}{enter}`);


    cy.contains('a', deviceName, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    this.deleteButtonElement
      .should('be.visible')
      .click({ force: true });

    this.confirmDeleteButton
      .should('be.visible')
      .click({ force: true });
  }


  verifyToastMessage(expectedText) {
    this.messageBoxElement
      .should('be.visible')
      .and('contain', expectedText);
  }
}

export const allDevicesPage = new AllDevicesPage();
