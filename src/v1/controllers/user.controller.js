const utility = require('../../utils/index.js');
const repositories = require('../repositories/index.js');

const { userRepository} = repositories;


module.exports.createUserSignUP = async (req, res, next) => {
  try {
    const result = await userRepository.userRegister(req);
    if (result) {
      res.status(utility.httpStatus('CREATED')).json({
        success: true,
        data: result,
        message: utility.getMessage(req, false, 'USER_CREATED'),
      });
    } else {
      res.status(utility.httpStatus('BAD_REQUEST')).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, 'FALSE_RESPONSE'),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.createUserLogin = async (req, res, next) => {
  try {
    const result = await userRepository.userLogin(req);
    if (result) {
      res.status(utility.httpStatus('OK')).json({
        success: true,
        data: result,
        message: utility.getMessage(req, false, 'LOGIN_SUCCESS'),
      });
    } else {
      res.status(utility.httpStatus('BAD_REQUEST')).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, 'FALSE_RESPONSE'),
      });
    }
  } catch (error) {
    next(error);
  }
};


module.exports.getUserList = async (req, res, next) => {
  try {
    const result = await userRepository.getUserList(req);
      res.status(utility.httpStatus('OK')).json({
        success: true,
        data: result,
        message: utility.getMessage(req, false, 'SUCCESS'),
      });
  } catch (error) {
    next(error);
  }
};