const utility = require('../../utils/index.js');

/**
 * Check resource access permission
 * according to user role
 * @param {Array} userTypeArr
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const resourceAccessGuard = (userTypeArr) => async (req, res, next) => {
  //const {
  //   user: {
  //     dataValues: { userType },
  //   },
  // } = req;
  try {
    // eslint-disable-next-line no-bitwise
    if (~userTypeArr.indexOf(req?.userResult?.role)) {
      next();
    } else {
      const error = new Error('INVALID_USER_ACCESS');
      error.status = utility.httpStatus('BAD_REQUEST');
      error.message = `Resource can not be accessed by ${req?.userResult?.role ?? ''}`;
      next(error);
    }
  } catch (error) {
    error.status = utility.httpStatus('UNAUTHORIZED');
    next(error);
  }
};

module.exports = resourceAccessGuard;
