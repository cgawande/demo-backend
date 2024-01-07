const utility = require('../../utils/index.js');
const repositories = require('../repositories/index.js');

const {paymentRepository} = repositories;

module.exports.createOrder = async (req, res, next) => {
    try {
      const result = await paymentRepository.createOrder(req);
      if (result) {
        res.status(utility.httpStatus('CREATED')).json({
          success: true,
          data: result,
          message: utility.getMessage(req, false, 'ORDER_CREATED'),
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



  module.exports.verifyPayment = async (req, res, next) => {
    try {
      const result = await paymentRepository.verifyPayment(req);
      if (result) {
        res.status(utility.httpStatus('OK')).json({
          success: true,
          data: result,
          message: utility.getMessage(req, false, 'VERIFY_PAYMENT'),
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


  module.exports.paymentDetails = async (req, res, next) => {
    try {
      const result = await paymentRepository.paymentDetails(req);
      if (result) {
        res.status(utility.httpStatus('OK')).json({
          success: true,
          data: result,
          message: utility.getMessage(req, false, 'DETAILS_PAYMENT'),
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

  module.exports.updateTransactionSatus = async (req, res, next) => {
    try {
      const result = await paymentRepository.updateTransactionSatus(req);
      if (result) {
        res.status(utility.httpStatus('OK')).json({
          success: true,
          data: result,
          message: utility.getMessage(req, false, 'DETAILS_PAYMENT'),
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


  module.exports.makePayment = async (req, res, next) => {
    try {
      const {value,message} = await paymentRepository.makePayment(req);
      if (value) {
        res.status(utility.httpStatus('OK')).json({
          success: true,
          data: null,
          message: utility.getMessage(req, false, 'SUCCESS'),
        });
      } else {
        res.status(utility.httpStatus('BAD_REQUEST')).json({
          success: false,
          data: null,
          message: message,
        });
      }
    } catch (error) {
      next(error);
    }
  };
