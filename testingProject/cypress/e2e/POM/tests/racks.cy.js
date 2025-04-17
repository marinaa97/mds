//TASK3

import { racksPage } from '../pages/RacksPage';
import { loginPage } from '../pages/LoginPage';
import {addNewDevicesPage} from '../pages/AddNewDevicesPage';
import {DEVICE_TYPE_NAME, ROLE} from '../helpers/devicetype';

import{VALID_USERNAME,VALID_PASSWORD,} from '../helpers/constants';
describe('Manipulate with rack', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.login(VALID_USERNAME, VALID_PASSWORD);
    racksPage.visitRacksPage(); 
  });
    it('Test: Add new device', () => {
      racksPage.scrollToRackElement();   
      racksPage.interactWithRackElevation(); 
      addNewDevicesPage.fillDeviceForm(DEVICE_TYPE_NAME, ROLE);
      addNewDevicesPage.verifyToastMessage('Created device');
    });

    it('Test: Prevent adding device with duplicate name to rack', () => {
      racksPage.scrollToRackElement();   
      racksPage.interactWithRackElevation(); 
      addNewDevicesPage.fillDeviceForm(DEVICE_TYPE_NAME, ROLE);
      addNewDevicesPage.verifyToastMessage('Device name must be unique per site.')
    });
  
});
