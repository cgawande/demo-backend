const bcrypt = require('bcryptjs');

/**
 * Function to Encrypt Password
 * @param {string} password
 */
module.exports.createHashPassword = async (password) => {
    try {
      const salt = await bcrypt.genSalt();
      return await bcrypt.hash(password, salt);
    } catch (error) {
      accountErrorMessage('createHashPassword', { error });
      throw Error(error);
    }
  };

  /**
 * Function to Check Password
 * @param {string} password
 * @param {string} hashPassword
 */
module.exports.compareUserPassword = async (password, hashPassword) => {
    if (password && hashPassword) {
    return await bcrypt.compare(password, hashPassword);
    }
    return false;
  };