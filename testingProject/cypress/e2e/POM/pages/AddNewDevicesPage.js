import { ADD_DEVICE_URL } from '../helpers/devicetype';

class AddNewDevicesPage {
  nameInput = '#id_name';
  deviceRoleDropdown = '#id_role-ts-control';
  roleOption = '#id_role-ts-dropdown .option';
  deviceTypeDropdown = '#id_device_type-ts-control';
  dropDownOption = '#id_device_type-ts-dropdown .option';
  siteDropdown = '#id_site-ts-dropdown .option';
  firstSite = '#id_site-ts-control';
  statusOption = '#id_status-ts-dropdown .option';
  status = '#id_status-ts-control';
  createButton = 'button[name="_create"]';
  toastMessageXpath = "//div[@class='toast-body']";
  cancelButton = "//a[contains(@class, 'btn-float')]";

  visitAddDevicePage() {
    cy.visit(ADD_DEVICE_URL);
  }
  get nameField() {
    return cy.get(this.nameInput);
  }

  get toastMessage() {
    return cy.xpath(this.toastMessageXpath);
  }

  get deviceRoleField() {
    return cy.get(this.deviceRoleDropdown);
  }

  get deviceTypeField() {
    return cy.get(this.deviceTypeDropdown);
  }

  get getCreateButton() {
    return cy.get(this.createButton);
  }

  get cancelButton() {
    return cy.xpath(this.cancelButton);
  }

  verifyToastMessage(expectedText) {
    this.toastMessage
      .should('be.visible', { timeout: 150000 })
      .and('contain', expectedText);
  }

  fillDeviceForm(name, role, deviceType) {
    this.nameField.clear().type(name);
    this.deviceRoleField.click();
    cy.get(this.roleOption)
      .contains(role)
      .click({ force: true });
    this.deviceTypeField.click();

    if (deviceType) {
      cy.get(this.dropDownOption)
        .contains(deviceType)
        .should('be.visible')
        .click({ force: true });
    } else {
      cy.get(this.dropDownOption)
        .first()
        .should('be.visible')
        .click({ force: true });
    }
    this.getCreateButton
      .should('be.visible')
      .click();
  }

  createDevice(name, role, deviceType, statusText = 'Decommissioning') {
    this.visitAddDevicePage();
    this.selectStatus(statusText);
    this.selectFirstSite();
    this.fillDeviceForm(name, role, deviceType);
  }

  selectStatus(statusText) {
    cy.get(this.status).parent('.ts-control').click();
    cy.get(this.statusOption).contains(statusText).should('be.visible').click({ force: true });
  }
  
  selectFirstSite() {
    cy.get(this.firstSite)
      .parent('.ts-control')
      .click();

    cy.get(this.siteDropdown)
      .first()
      .should('be.visible')
      .click({ force: true });
  }
}

export const addNewDevicesPage = new AddNewDevicesPage();
