const environmentUtil = require('./environment.js');
const commonUtil = require('./common.js');

module.exports = {
  ...environmentUtil,
  ...commonUtil,
};
