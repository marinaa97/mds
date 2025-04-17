import { All_DEVICES_TYPES_URL } from "../helpers/devicetype";

class AllDevicesTypesPage {
  searchField = '//input[@id="quicksearch"]';
  checkbox = "//input[@name='pk']";
  messageBox = '//div[@class="toast-body"]';
  deleteButton = "//a[@class='btn btn-red']";

  navigateToAllDevicesTypesPage() {
    cy.visit(All_DEVICES_TYPES_URL);
  }

  getSearchField() {
    return cy.xpath(this.searchField);
  }

  get toastMessage() {
    return cy.xpath(this.messageBox);
  }

  get confirmDeleteButton() {
    return cy.contains('button', 'Delete', { timeout: 10000 });
  }

  searchAndDeleteDeviceType(deviceName) {
    this.getSearchField()
      .should('be.visible')
      .clear()
      .type(`${deviceName}{enter}`);


    cy.contains('a', deviceName, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.xpath(this.deleteButton, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
  }

  confirmDelete() {
    this.confirmDeleteButton
      .should('be.visible')
      .click({ force: true });

  }
  
  verifyToastMessage(expectedText) {
    this.toastMessage
      .should('be.visible')
      .and('contain', expectedText);
  }
}

export const allDevicesTypesPage = new AllDevicesTypesPage();
