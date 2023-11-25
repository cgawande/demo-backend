const dotenv = require('dotenv');

dotenv.config();

/**
 * Check application environment
 * @returns boolean
 */
exports.isProduction = () => {
  try {
    return this.getEnv('NODE_ENV') === 'production';
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get environment variable value
 * @param {string} envVar
 * @returns {any}
 */
exports.getEnv = (envVar) => {
  try {
    const envValue = process.env[envVar];
    if (envValue) {
      return envValue;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Set environment variable value
 * @param {string} envVar
 * @param {any} envValue
 */
exports.setEnv = (envVar, envValue) => {
  try {
    if (envValue) {
      process.env[envVar] = envValue;
    }
  } catch (error) {
    throw new Error(error);
  }
};
/**
 * Creates an object composed of the picked object properties
 * @param {object} object
 * @param {array} keys
 * @returns {object}
 */
exports.pick = (object, keys) => {
  try {
    return keys.reduce((obj, key) => {
      if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        // eslint-disable-next-line no-param-reassign
        obj[key] = object[key];
      }
      return obj;
    }, {});
  } catch (error) {
    throw new Error(error);
  }
};
