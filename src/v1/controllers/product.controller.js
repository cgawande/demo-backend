const utility = require('../../utils/index.js');
const repositories = require('../repositories/index.js');

const {productRepository} = repositories;

module.exports.addProduct = async (req, res, next) => {
    try {
      const result = await productRepository.addProduct(req);
      if (result) {
        res.status(utility.httpStatus('CREATED')).json({
          success: true,
          data: result,
          message: utility.getMessage(req, false, 'SUCCESS'),
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

  module.exports.getProductList = async (req, res, next) => {
    try {
      const result = await productRepository.getProductList(req);
      if (result) {
        res.status(utility.httpStatus('OK')).json({
          success: true,
          data: result,
          message: utility.getMessage(req, false, 'SUCCESS'),
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

  module.exports.updatePermission = async (req, res, next) => {
    try {
      const result = await PermissionRepository.updatePermission(req);
      if (result) {
        res.status(utility.httpStatus('OK')).json({
          success: true,
          data: result,
          message: utility.getMessage(req, false, 'SUCCESS'),
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

  module.exports.updateSubAdminPermission = async (req, res, next) => {
    try {
      const result = await PermissionRepository.updateSubAdminPermission(req);
      if (result) {
        res.status(utility.httpStatus('OK')).json({
          success: true,
          data: result,
          message: utility.getMessage(req, false, 'SUCCESS'),
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