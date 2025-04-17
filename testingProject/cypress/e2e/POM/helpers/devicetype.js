const uniqueSuffix = Math.floor(Math.random() * 1000)
export const DEVICE_TYPE_NAME = `ANametest-${uniqueSuffix}`;
export const DEVICE_TYPE_U_HEIGHT = '2';
export const INVALID_U_HEIGHT = '-5';
export const EMPTY_STRING = '';
export const LONG_DEVICE_NAME = 'X'.repeat(256);
export const INVALID_SLUG = '@#$';

//device for rack
export const ROLE = 'Access Switch';
export const deviceType = 'Cisco';
export const UNIQUE_DEVICE_NAME = `NSTest-${uniqueSuffix}`;

//data for device
export const DEVICE_TYPE_MODEL = 'T12';
export const DEVICE_NAME = 'Arista';
export const DEVICE_INVALID_HEIGHT = '12000';

//error messages
export const ERROR_MSG_MAX_LENGTH_EXCEEDED = 'Ensure this value has at most 100 characters (it has 180).';
export const ERROR_MSG_INVALID_SLUG = 'Enter a valid “slug” consisting of letters, numbers, underscores or hyphens.';
export const ERROR_MSG_INVALID_HEIGHT = 'Ensure that there are no more than 4 digits in total.';
export const ERROR_REQUIRED_FIELD = 'This field is required.';

export const UNABLE_TO_DELETE_MESSAGE = 'Unable to delete';
export const SUCCESS_DELETE_DEVICE_MESSAGE = 'Deleted device';
export const SUCCESS_DELETE_DEVICETYPE_MESSAGE = 'Deleted device type';
export const SUCCESS_CREATE_DEVICETYPE_MESSAGE = 'Created device type';
export const SUCCESS_CREATE_DEVICE_MESSAGE = 'Created device';

//urls
export const ADD_DEVICE_TYPES_URL = 'https://demo.netbox.dev/dcim/device-types/add/';
export const ALL_DEVICES_URL = 'https://demo.netbox.dev/dcim/devices/'
export const ADD_DEVICE_URL = 'https://demo.netbox.dev/dcim/devices/add/'
export const All_DEVICES_TYPES_URL = 'https://demo.netbox.dev/dcim/device-types/';
export const RACKS_URL = 'https://demo.netbox.dev/dcim/racks/39/';