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
    case 'personalDetailsAdd':
      message = `Provider personal details add error: ${error}, payload: ${payload}`;
      break;
    case 'businessTypeAdd':
      message = `Provider business details add error: ${error}, payload: ${payload}`;
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
    case 'autoBooking':
      message = `Provider auto booking update error: ${error}, payload: ${payload}`;
      break;
    case 'onlineStatus':
      message = `Provider online and offline status update error: ${error}, payload: ${payload}`;
      break;
    case 'providerAdd':
      message = `Provider add by admin error: ${error}, payload: ${payload}`;
      break;
    case 'providerUpdate':
      message = `Provider update details by admin error: ${error}, payload: ${payload}`;
      break;
    case 'documentUpdate':
      message = `Provider document updated by admin error: ${error}, payload: ${payload}`;
      break;
    case 'unavailability':
      message = `Provider unavailability update details by admin error: ${error}, payload: ${payload}`;
      break;
    case 'availability':
      message = `Provider availability updated by admin error: ${error}, payload: ${payload}`;
      break;
    case 'documentCreate':
      message = `Provider document Create  by admin error: ${error}, payload: ${payload}`;
      break;
    case 'UserDocument':
      message = `Provider unavailability details get by admin error: ${error}, payload: ${payload}`;
      break;
    case 'unAvailabilityBlock':
      message = `Provider unAvailability block by admin error: ${error}, payload: ${payload}`;
      break;
    case 'unAvailabilityUnblock':
      message = `Provider unAvailability Unblock  by admin error: ${error}, payload: ${payload}`;
      break;
    case 'addExistingCategory':
      message = `Admin add existing service category for nca error: ${error}, payload: ${payload}`;
      break;
    case 'getNcaServiceCategoryList':
      message = `Admin get list of service category of nca error: ${error}, payload: ${payload}`;
      break;
    case 'updateNcaStatus':
      message = `Admin update nca status error: ${error}, payload: ${payload}`;
      break;
    case 'updateNcaLinkStatus':
      message = `Admin update nca link status error: ${error}, payload: ${payload}`;
      break;
    case 'ncaIncompleteProfileEmail':
      message = `Admin send email for nca incomplete profile error: ${error}, payload: ${payload}`;
      break;
    case 'providerSlot':
      message = `Provider slot for alliable error: ${error}, payload: ${payload}`;
      break;
    case 'stripeCustomerUpdate':
      message = `Update stripe customer error: ${error}, payload: ${payload}`;
      break;
    case 'planCanceled':
      message = `Nca plan cancelled error: ${error}, payload: ${payload}`;
      break;
    case 'updateDefaultRole':
      message = `Nca Role update error: ${error}, payload: ${payload}`;
      break;
    case 'getNcaCompanyProfileList':
      message = `Nca company list error: ${error}`;
      break;
    case 'listSubAdminProvider':
      message = `SubAdmin and provider list error: ${error}`;
      break;
    case 'getServiceProviderAmount':
      message = `Nca service provider amount error: ${error}`;
      break;
    case 'getTotalSaleCreditCardAmount':
      message = `Nca total sale credit card amount error: ${error}`;
      break;
    case 'transactionAmount':
      message = `Nca transaction amount error: ${error}`;
      break;
    case 'updateNcaPlan':
      message = `Nca plan update error: ${error}`;
      break;
    case 'getNcaBillingList':
      message = `Nca billing list error: ${error}`;
      break;
    case 'getNcaBillingDetail':
      message = `Nca billing detail error: ${error}`;
      break;
    default:
      message = `Customer error ${error}`;
      break;
  }
  logger('userError').error(new Error(message));
};
