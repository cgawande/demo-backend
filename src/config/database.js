const utils = require('../utils/index.js');

module.exports = {
  host: utils.getEnv('DB_HOST'),
  port: utils.getEnv('DB_PORT'),
  username: utils.getEnv('DB_USER'),
  password: utils.getEnv('DB_PASSWORD'),
  db: utils.getEnv('DB_NAME'),
  url:utils.getEnv('URL'),
  timezone: '+00:00',
  dialect: 'mysql',
};