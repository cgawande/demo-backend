const userMessage = require('./user.message')
const commonMessage = require('./common.message')
const { logger } = require('../services/logger.service')
module.exports={
    ...userMessage,
    ...commonMessage
}
