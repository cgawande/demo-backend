const ejs = require('ejs');
const path = require('path');
const { loggerErrorMessage } = require('../logMessages/index.js');

module.exports = {
  /**
   * Generate templates
   * @param {object} model
   * @param {object} rules
   * @param {array} errors
   */
  generateEjsTemplate(req) {
    return new Promise((resolve, reject) => {
      const ejsFilePath = path.join(__dirname, `../ejs/${req.template}`);
      ejs.renderFile(ejsFilePath, { data: req }, (err, result) => {
        if (err) {
          loggerErrorMessage({ error: err });
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};
