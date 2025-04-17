//TASK2

import { deviceTypePage } from '../pages/DeviceTypePage';
import { loginPage } from '../pages/LoginPage';
import { 
  DEVICE_TYPE_MODEL, 
  DEVICE_NAME,
  DEVICE_TYPE_NAME,
  DEVICE_TYPE_U_HEIGHT,
  SUCCESS_CREATE_DEVICETYPE_MESSAGE,
  INVALID_SLUG,
  ERROR_MSG_MAX_LENGTH_EXCEEDED,
  ERROR_REQUIRED_FIELD,
  ERROR_MSG_INVALID_SLUG,
  ERROR_MSG_INVALID_HEIGHT,
  DEVICE_INVALID_HEIGHT
} from '../helpers/devicetype';

import {
  VALID_USERNAME,
  VALID_PASSWORD
} from '../helpers/constants';

describe('Create Device Type', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.login(VALID_USERNAME, VALID_PASSWORD);
        deviceTypePage.visitCreatingDevicePage();
      });

  it('Test: Successfully creating a new device type', () => {
    deviceTypePage.createDeviceType(DEVICE_NAME, DEVICE_TYPE_NAME,'',DEVICE_TYPE_U_HEIGHT);
    deviceTypePage.verifyToastMessage(SUCCESS_CREATE_DEVICETYPE_MESSAGE);
  });

  it('Test: Attempt to create a device type with empty required fields', () => {
    deviceTypePage.uHeightField.clear();
    deviceTypePage.createBtn.click();
    deviceTypePage.verifyInvalidInputField(deviceTypePage.modelInput);
    deviceTypePage.verifyValidationMessage(deviceTypePage.modelValidationMessage, ERROR_REQUIRED_FIELD);
    deviceTypePage.verifyInvalidInputField(deviceTypePage.modelInput);
    deviceTypePage.verifyUHeightRequiredError(ERROR_REQUIRED_FIELD);
  });

  it('Test: Attempt to create a device type with invalid characters in the slug field', () => {
    deviceTypePage.createDeviceType(DEVICE_NAME,DEVICE_TYPE_MODEL, INVALID_SLUG, DEVICE_TYPE_U_HEIGHT);
    deviceTypePage.checkErrorMessage(ERROR_MSG_INVALID_SLUG);
});

it('Test: Attempt to create a device type with a slug field exceeding 100 characters', () => {
    const LONG_SLUG = 'a'.repeat(180);
    deviceTypePage.createDeviceType(DEVICE_NAME,DEVICE_TYPE_MODEL,LONG_SLUG, DEVICE_TYPE_U_HEIGHT);
    deviceTypePage.checkErrorMessage(ERROR_MSG_MAX_LENGTH_EXCEEDED)
});

it('Test: Check height field when entering excessive digits', () => {
    deviceTypePage.visitCreatingDevicePage();
    deviceTypePage.createDeviceType(DEVICE_NAME, DEVICE_TYPE_MODEL,'', DEVICE_INVALID_HEIGHT);
    deviceTypePage.checkErrorMessage(ERROR_MSG_INVALID_HEIGHT);
});
it('Test: Verify visibility of elements', () => {
    const selectors = [
        deviceTypePage.manufacturerDropdown,
        deviceTypePage.modelInput,
        deviceTypePage.slugInput,
        deviceTypePage.uHeightField,
        deviceTypePage.createBtn,
        deviceTypePage.createAndAddButton,
        deviceTypePage.cancelButton,
        deviceTypePage.checkboxUtilization,
        deviceTypePage.checkboxFulldepth,
        deviceTypePage.partNumber,
        deviceTypePage.parentChildStatus,
        deviceTypePage.airflow,
        deviceTypePage.weight,
        deviceTypePage.weightUnit,
        deviceTypePage.commentsField
    ];

    deviceTypePage.checkElementsVisibility(selectors);
  });
  
});
