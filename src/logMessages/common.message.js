const { logger } = require('../services/logger.service.js');
const { jsonToString } = require('../utils/common.js');

exports.loggerErrorMessage = (type, object) => {
  const error = jsonToString(object?.error ?? object?.error?.message);
  let message = '';
  switch (type) {
    case 'connection':
      message = `Database syncing error %s : ${error}`;
      break;
    case 'sync':
      message = `Database syncing error %s, error: ${error}`;
      break;
    case 'internal':
      message = `Send to email server, error: ${error}`;
      break;
    case 'stderr':
      message = `Seeder init error: ${jsonToString(object)}`;
      break;
    default:
      message = `Internal error: ${error}`;
      break;
  }
  logger('loggerError').error(new Error(message));
};

exports.loggerInfoMessage = (type, object) => {
  const error = jsonToString(object?.error ?? object?.error?.message);
  let message = '';
  switch (type) {
    case 'connection':
      message = 'Database connected successfully';
      break;
    case 'sync':
      message = 'Database sync successfully';
      break;
    case 'listen':
      message = `Server is running at ${object?.port} port`;
      break;
    case 'stdout':
      message = `All seeder migrated successfully ${jsonToString(object)}`;
      break;
    default:
      message = `internal error: ${error}`;
      break;
  }
  logger('loggerInfo').info(message);
};
