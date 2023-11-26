const userRepository = require('../repositories/user.repository')
const utility = require('../../utils/index.js');
const services = require("../../services/index.js")
const { bcrypt, jwt } = services
/**
 * Check email exists
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

module.exports.checkUserEmailExistsAlready = async (req, res, next) => {
  try {
    const user = await userRepository.findUserExist({email:req.body.email});
    if (user) {
      return (
        res.status(utility.httpStatus('CONFLICT')).json({
          success: false,
          data: null,
          message: utility.getMessage(req, false, 'EMAIL_EXIST'),
        }));;
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports.checkUSerEmailNotExists = async (req, res, next) => {
  try {
    const {
      body: { email, userType },
    } = req;
    const user = await userRepository.findUserExist({email:email});
    if (!user) {
      return (
        res.status(utility.httpStatus('NOT_FOUND')).json({
          success: false,
          data: null,
          message: utility.getMessage(req, false, 'EMAIL_NOT_EXIST'),
        }));;
    } else {
      req.userResult = user;
      next();
    }
  } catch (error) {
    next(error);
  }
};


module.exports.comparePassword = async (req, res, next) => {
  try {
    const isPasswordMatch = await bcrypt.compareUserPassword(req.body.password, req.userResult.password)
    if (isPasswordMatch) {
      next()
    } else {
      return (
        res.status(utility.httpStatus('UNAUTHORIZED')).json({
          success: false,
          data: null,
          message: utility.getMessage(req, false, 'PASSWORD_NOT_MATCH'),
        }));;
    }
  } catch (error) {
    next(error)
  }
}

module.exports.checkPassword = async (req, res, next) => {
  const { newPassword, confirmPassword } = req.body;
  try {
    if (newPassword === confirmPassword) {
      next()
    } else {
      return (
        res.status(utility.httpStatus('UNAUTHORIZED')).json({
          success: false,
          data: null,
          message: utility.getMessage(req, false, 'PASSWORD_NOT_MATCH'),
        }));;
    }
  } catch (error) {
    next(error)
  }
}


module.exports.checkResetPasswordToken = async (req, res, next) => {
  const { id, token } = req.body;
  try {
    const decodedToken = jwt.verifyToken(token);
    if (decodedToken) {
      next()
    }
    else {
      return (
        res.status(utility.httpStatus('UNAUTHORIZED')).json({
          success: false,
          data: null,
          message: utility.getMessage(req, false, 'INVALID_TOKEN'),
        }));;
    }
  } catch (error) {
    next(error)
  }
};


module.exports.checkUserIdNotExists = async (req, res, next) => {
  try {
    const { id, token } = req.body;
    const user = await userRepository.findUserExist({_id:id});
    if (!user) {
      return (
        res.status(utility.httpStatus('NOT_FOUND')).json({
          success: false,
          data: null,
          message: utility.getMessage(req, false, 'USER_NOT_EXIST'),
        }));;
    } else {
      req.userResult = user;
      next();
    }
  } catch (error) {
    next(error);
  }
};