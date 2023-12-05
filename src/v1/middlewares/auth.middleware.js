const jwt = require('../../services/jwt.service.js');
const utility = require('../../utils/index.js');
const repositories = require('../repositories/index.js');
const {UserModel} = require('../models/index.js');
const {  userRepository } = repositories;
/**
 * Check user authorization
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
// module.exports.authValidateRequest = async (req, res, next) => {
//   try {
//     if (req.headers && req.headers.authorization) {
//       const parts = req.headers.authorization.split(' ');
//       const unauthorizedError = utility.httpStatus('UNAUTHORIZED');
//       if (parts.length === 2) {
//         const scheme = parts[0];
//         const token = parts[1];
//         if (/^Bearer$/i.test(scheme)) {
//           const decodedToken = jwt.verifyToken(token);
//           if (decodedToken) {
//             const user = await accountRepository.findOne({
//               id: decodedToken.id,
//             });
//             if (user) {
//               const userToken = await accountRepository.getDeviceDetailByToken(
//                 token
//               );
//               if (userToken) {
//                 req.user = user;
//                 req.userToken = userToken;
//                 next();
//               } else {
//                 const error = new Error('TOKEN_BAD_FORMAT');
//                 error.status = unauthorizedError;
//                 error.message = utility.getMessage(
//                   req,
//                   false,
//                   'SESSION_EXPIRE'
//                 );
//                 next(error);
//               }
//             } else {
//               const error = new Error();
//               error.status = unauthorizedError;
//               error.message = utility.getMessage(
//                 req,
//                 false,
//                 'ACCOUNT_INACTIVE'
//               );
//               next(error);
//             }
//           } else {
//             const error = new Error('TOKEN_NOT_FOUND');
//             error.status = utility.httpStatus('BAD_REQUEST');
//             error.message = utility.getMessage(
//               req,
//               false,
//               'UNAUTHORIZED_USER_ACCESS'
//             );
//             next(error);
//           }
//         } else {
//           const error = new Error('TOKEN_BAD_FORMAT');
//           error.status = unauthorizedError;
//           error.message = utility.getMessage(req, false, 'SESSION_EXPIRE'); // 'Format is Authorization: Bearer [token]';
//           next(error);
//         }
//       } else {
//         const error = new Error('TOKEN_BAD_FORMAT');
//         error.status = unauthorizedError; // HttpStatus['401'];
//         error.message = utility.getMessage(
//           req,
//           false,
//           'UNAUTHORIZED_USER_ACCESS'
//         ); // 'Format is Authorization: Bearer [token]';
//         next(error);
//       }
//     } else {
//       const error = new Error('TOKEN_NOT_FOUND');
//       error.status = utility.httpStatus('UNAUTHORIZED');
//       error.message = utility.getMessage(
//         req,
//         false,
//         'UNAUTHORIZED_USER_ACCESS'
//       );
//       next(error);
//     }
//   } catch (e) {
//     const error = new Error('TOKEN_NOT_FOUND');
//     error.status = utility.httpStatus('UNAUTHORIZED');
//     error.message = utility.getMessage(req, false, 'SESSION_EXPIRE'); // 'Format is Authorization: Bearer [token]';
//     next(error);
//   }
// };

/**
 * Check user authorization
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
module.exports.checkUserAuth = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.split(' ')[1];
      const isTokenExist = await userRepository.findTokenExist(token);
      if (isTokenExist.token && isTokenExist?.status=='active') {
        const decodedToken= jwt.verifyToken(token);
        if(decodedToken){
        req.userResult = isTokenExist;
        next()
        }else{
          const error = new Error('INVALID_TOKEN');
        error.status = utility.httpStatus('UNAUTHORIZED');
        error.message = utility.getMessage(req, false, 'SESSION_EXPIRE');
        next(error);
        }
      } else {
        const error = new Error('TOKEN_NOT_FOUND');
        error.status = utility.httpStatus('UNAUTHORIZED');
        error.message = utility.getMessage(req, false, 'SESSION_EXPIRE');
        next(error);
      }
    } else {
      const error = new Error('TOKEN_NOT_FOUND');
      error.status = utility.httpStatus('UNAUTHORIZED');
      error.message = utility.getMessage(
        req,
        false,
        'UNAUTHORIZED_USER_ACCESS'
      );
      next(error);
    }
  } catch (e) {
    const error = new Error('TOKEN_NOT_FOUND');
    error.status = utility.httpStatus('UNAUTHORIZED');
    error.message = utility.getMessage(req, false, 'UNAUTHORIZED_USER_ACCESS'); // 'Format is Authorization: Bearer [token]';
    next(error);
  }
};

module.exports.isRoleCheck = async (req, res, next) => {
  const isAdminExist = await UserModel.findOne({
     email: req.body.email },
  );
  if (isAdminExist) {
    if (isAdminExist.role === "admin") {
      next();
    } else {
      const isUserExist = await UserModel.findOne(
        { email: req.body.email });
      if (isUserExist) {
        if (isUserExist.role === "user") {
          next();
        } else {
          res.status(401).json({
            message: "you are not user",
          });
        }
      } else {
        res.status(404).json({
          message: "User not found",
        });
      }
    }
  } else {
    res.status(404).json({
      message: "Admin not found",
    });
  }
};

module.exports.isAdminCheck = async (req, res, next) => {
  try {
     const userId=req.userId
    const isAdminExist = await UserModel.findOne({ _id: userId });
    if (isAdminExist) {
      if (isAdminExist.role === "admin") {
        next();
      } else {
        res.status(401).json({
          message: "you are not admin",
        });
      }
    } else {
      res.status(404).json({
        message: "Admin not found",
      });
    }

  } catch (err) {
    res.status(400).json({
      success: "failure",
      message: "Error occured " + err.message,
    });
  }
}
