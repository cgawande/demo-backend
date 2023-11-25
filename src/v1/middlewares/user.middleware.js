const userRepository = require('../repositories/user.repository')
const utility = require('../../utils/index.js');
const services= require("../../services/index.js")
const { bcrypt , jwt } = services
/**
 * Check email exists
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

  module.exports.checkUserEmailExistsAlready = async (req, res, next) => {
    try {
      const user = await userRepository.findUserExistByEmail(req.body.email);
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
      const user = await userRepository.findUserExistByEmail(email);
      if (!user) {
        return(
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
  

  module.exports.comparePassword = async (req , res , next) =>{
    try{
     const isPasswordMatch = bcrypt.compareUserPassword(req.body.password,req.userResult.password)
     if(isPasswordMatch){
      next()
     }else{
      return(
        res.status(utility.httpStatus('UNAUTHORIZED')).json({
          success: false,
          data: null,
          message: utility.getMessage(req, false, 'PASSWORD_NOT_MATCH'),
        }));;
     }
    }catch(error){
      next(error)
    }
  }