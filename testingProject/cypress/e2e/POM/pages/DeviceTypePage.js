import { ADD_DEVICE_TYPES_URL } from '../helpers/devicetype';

class DeviceTypePage {
    manufacturerName = '#id_manufacturer-ts-control';
    modelName = '#id_model';
    errorMessageModel = '.invalid-feedback';
    slugName = '#id_slug';
    errorMessageSlug = '//div[@class="form-text text-danger"]';
    uHeightInput = '#id_u_height';
    createButton = '//button[@name="_create"]';
    createAndAddButton = '//button[@name="_addanother"]';
    cancelButton = '//a[@class="btn btn-outline-secondary btn-float"]';
    messageBox = '//div[@class="toast-body"]';
    checkboxUtilization = '#id_exclude_from_utilization';
    checkboxFulldepth = '#id_is_full_depth';
    partNumber = '#id_part_number';
    parentChildStatus = '#id_subdevice_role-ts-control';
    airflow = '#id_airflow-ts-control';
    weight = '#id_weight';
    weightUnit = "//input[@id='id_weight_unit-ts-control']";
    commentsField = '#id_comments';
    error = 'div.form-text.text-danger';

    visitCreatingDevicePage() {
      cy.visit(ADD_DEVICE_TYPES_URL);
    }
    get manufacturerDropdown() {
      return cy.get(this.manufacturerName);
    }
  
    get modelInput() {
      return cy.get(this.modelName);
    }
  
    get slugInput() {
      return cy.get(this.slugName);
    }
  
    get uHeightField() {
      return cy.get(this.uHeightInput);
    }
  
    get createBtn() {
      return cy.xpath(this.createButton);
    }
  
    get toastMessage() {
      return cy.xpath(this.messageBox);
    }
  
    get modelValidationMessage() {
        return cy.get(this.errorMessageModel);
    }
    verifyValidationMessage(messageElement, expectedMessage) {
      messageElement.should('contain.text', expectedMessage).and('be.visible');
    }

    verifyInvalidInputField(inputElement) {
      inputElement.should('have.class', 'is-invalid');
    }

    verifyUHeightRequiredError(expectedMessage) {
      this.uHeightField
        .parent()
        .find('.invalid-feedback')
        .should('be.visible')
        .and('contain', expectedMessage);
    }
    verifyToastMessage(expectedText) {
      this.toastMessage
      .should('be.visible')
      .and('contain', expectedText);
    }

    checkErrorMessage(expectedMessage) {
      cy.get(this.error)
      .should('be.visible')
      .and('contain', expectedMessage);
    }

    createDeviceType(manufacturer, model, slug, uHeight) {
        this.visitCreatingDevicePage();
        this.manufacturerDropdown.click();
        cy.get('.option').contains(manufacturer).click();
        this.modelInput.clear().type(model);
        if (slug) {
            this.slugInput.clear().type(slug);
        }
        this.uHeightField.clear().type(uHeight);
        this.createBtn.click();
    }

    checkElementsVisibility(elementSelectors) {
        elementSelectors.forEach(selector => {
            if (typeof selector === 'string') {
                if (selector.startsWith('//')) {
                    cy.xpath(selector).should('be.visible');
                } else {
                    cy.get(selector).should('be.visible');
                }
            } else {
                console.error(selector);
            }
        });
    }
  }
  
  export const deviceTypePage = new DeviceTypePage();
  
