const utility = require("../../utils/index.js");
const repositories = require("../repositories/index.js");

const { userRepository } = repositories;

module.exports.createUserSignUP = async (req, res, next) => {
  try {
    const result = await userRepository.userRegister(req);
    if (result) {
      res.status(utility.httpStatus("CREATED")).json({
        success: true,
        data: "success",
        message: utility.getMessage(req, false, "USER_CREATED"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
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
      res.status(utility.httpStatus("OK")).json({
        success: true,
        token: result,
        data: req.userResult,
        message: utility.getMessage(req, false, "LOGIN_SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.forgotPassword = async (req, res, next) => {
  try {
    const result = await userRepository.forgotPassword(req);
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        ...result,
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.getUserList = async (req, res, next) => {
  try {
    const result = await userRepository.getUserList(req);
    res.status(utility.httpStatus("OK")).json({
      success: true,
      data: result,
      message: utility.getMessage(req, false, "SUCCESS"),
    });
  } catch (error) {
    next(error);
  }
};

module.exports.resetPassword = async (req, res, next) => {
  try {
    const result = await userRepository.userResetPassword(req);
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        success: true,
        message: utility.getMessage(req, false, "SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updatePassword = async (req, res, next) => {
  try {
    const result = await userRepository.updatePassword(req);
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        success: true,
        message: utility.getMessage(req, false, "SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateWallet = async (req, res, next) => {
  try {
    const result = await userRepository.updateWallet(req);
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        success: true,
        message: utility.getMessage(req, false, "SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.getUserDataByToken = async (req, res, next) => {
  try {
    const token = req.userResult.token;
    const result = await userRepository.findTokenExist(token);
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        data: result,
        message: utility.getMessage(req, false, "SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.getUserData = async (req, res, next) => {
  try {
    const result = req.userResult;
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        data: result,
        message: utility.getMessage(req, false, "SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const result = await userRepository.deleteUser(req)
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        data: result,
        message: utility.getMessage(req, false, "SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateStatus = async (req, res, next) => {
  try {
    const result = await userRepository.updateUserStatus(req)
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        data: result,
        message: utility.getMessage(req, false, "SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateUserRole = async (req, res, next) => {
  try {
    const email=req.userResult.email
    const role = req?.body?.role
    const result = userRepository.updateByEmail(email,{role:role})
    if (result) {
      res.status(utility.httpStatus("OK")).json({
        data: result,
        message: utility.getMessage(req, false, "SUCCESS"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
}; 

module.exports.createSubAdmin = async (req, res, next) => {
  try {
    const result = await userRepository.createSubAdmin(req);
    if (result) {
      res.status(utility.httpStatus("CREATED")).json({
        success: true,
        data: "success",
        message: utility.getMessage(req, false, "USER_CREATED"),
      });
    } else {
      res.status(utility.httpStatus("BAD_REQUEST")).json({
        success: false,
        data: null,
        message: utility.getMessage(req, false, "FALSE_RESPONSE"),
      });
    }
  } catch (error) {
    next(error);
  }
};