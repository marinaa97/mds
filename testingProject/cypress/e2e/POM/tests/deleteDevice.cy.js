//TASK4

import { allDevicesTypesPage } from "../pages/AllDevicesTypesPage";
import { addNewDevicesPage } from "../pages/AddNewDevicesPage";
import { loginPage } from '../pages/LoginPage';
import { deviceTypePage } from '../pages/DeviceTypePage';
import { allDevicesPage } from "../pages/AllDevicesPage";
import { 
  DEVICE_TYPE_NAME, 
  DEVICE_TYPE_U_HEIGHT, 
  ROLE, 
  UNIQUE_DEVICE_NAME, 
  SUCCESS_CREATE_DEVICE_MESSAGE, 
  UNABLE_TO_DELETE_MESSAGE, 
  SUCCESS_CREATE_DEVICETYPE_MESSAGE, 
  SUCCESS_DELETE_DEVICE_MESSAGE, 
  DEVICE_NAME,
  SUCCESS_DELETE_DEVICETYPE_MESSAGE
} from '../helpers/devicetype';
import { VALID_USERNAME, VALID_PASSWORD } from '../helpers/constants';

describe('Delete device', () => {

    before(() => {
      loginPage.visit();
      loginPage.login(VALID_USERNAME, VALID_PASSWORD);
      deviceTypePage.createDeviceType(DEVICE_NAME,DEVICE_TYPE_NAME,'',DEVICE_TYPE_U_HEIGHT);
      addNewDevicesPage.verifyToastMessage(SUCCESS_CREATE_DEVICETYPE_MESSAGE);
      
      addNewDevicesPage.createDevice(UNIQUE_DEVICE_NAME, ROLE, DEVICE_TYPE_NAME);
      addNewDevicesPage.verifyToastMessage(SUCCESS_CREATE_DEVICE_MESSAGE);
      allDevicesTypesPage.navigateToAllDevicesTypesPage();
    });
   
    it('Test: Check delete device and device type', () => {
      allDevicesTypesPage.searchAndDeleteDeviceType(DEVICE_TYPE_NAME);
      allDevicesTypesPage.verifyToastMessage(UNABLE_TO_DELETE_MESSAGE);
      allDevicesPage.navigateToAllDevicesPage();
   
      allDevicesPage.searchAndDeleteDevice(UNIQUE_DEVICE_NAME);
      allDevicesPage.verifyToastMessage(SUCCESS_DELETE_DEVICE_MESSAGE);
      allDevicesTypesPage.navigateToAllDevicesTypesPage();
      allDevicesTypesPage.searchAndDeleteDeviceType(DEVICE_TYPE_NAME);
   
      allDevicesTypesPage.confirmDelete();
      allDevicesTypesPage.verifyToastMessage(SUCCESS_DELETE_DEVICETYPE_MESSAGE);
    });

  });
  