const { logger } = require('../services/logger.service.js');
const { jsonToString } = require('../utils/common.js');

exports.userErrorMessage = (type, object) => {
  const { data, bodyData, where } = object;
  const error = jsonToString(object?.error);
  const payload = jsonToString(data ?? bodyData);
  let message = '';
  switch (type) {
    case 'addUser':
      message = `user add error: ${error}, payload: ${payload}`;
      break;
    case 'login':
      message = `user login error: ${error}, payload: ${payload}`;
      break;
    case 'userList':
      message = `user list error: ${error}, payload: ${payload}`;
      break;
    case 'findUser':
      message = `find user error: ${error}, payload: ${payload}`;
      break;
    case 'getPassword':
      message = `user get password  error: ${error}, payload: ${payload}`;
      break;
    case 'forgotPassword':
      message = `user forgot password error: ${error}, payload: ${payload}`;
      break;
    case 'adminAdd':
      message = `Admin add error: ${error}, payload: ${payload}`;
      break;
    case 'resetPassword':
      message = `reset password error: ${error}, payload: ${payload}`;
      break;
      case 'updatePassword':
        message = `update password error: ${error}, payload: ${payload}`;
        break;
    case 'updateWallet':
      message = `update wallet  error: ${error}, payload: ${payload}`;
      break;
    case 'deleteUser':
      message = `delete user error: ${error}, payload: ${payload}`;
      break;
    case 'documentAdd':
      message = `Provider documents add error: ${error}, payload: ${payload}`;
      break;
    case 'servicesAdd':
      message = `Provider services add error: ${error}, payload: ${payload}`;
      break;
    case 'list':
      message = `Get user list error: ${error}, payload: ${payload}`;
      break;
    case 'details':
      message = `Get user details error: ${error}, payload: ${payload}`;
      break;
    case 'statusUpdate':
      message = `User status update error: ${error}, payload: ${payload}, where: ${jsonToString(
        where
      )}`;
      break;
    case 'details':
      message = `Get user details error: ${error}, payload: ${payload}`;
      break;
    case 'documentDetails':
      message = `Get document details error: ${error}, payload: ${payload}`;
      break;
    case 'businessDetails':
      message = `Get business details error: ${error}, payload: ${payload}`;
      break;
    case 'serviceDetails':
      message = `Get Service details error: ${error}, payload: ${payload}`;
      break;
    case 'personalDetails':
      message = `Get Personal details error: ${error}, payload: ${payload}`;
      break;
    case 'serviceStatusUpdate':
      message = `User service status update error: ${error}, payload: ${payload}`;
      break;
    case 'availabilityAdd':
      message = `User availability add error: ${error}, payload: ${payload}`;
      break;
    case 'unAvailabilityAdd':
      message = `User availability add error: ${error}, payload: ${payload}`;
      break;
    case 'userUpdate':
      message = `User details update error: ${error}, payload: ${payload}`;
      break;
    default:
      message = `Customer error ${error}`;
      break;
  }
  logger('userError').error(new Error(message));
};
