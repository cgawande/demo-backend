const database = require('./database.service')
const logger = require('./logger.service.js');
const jwt= require('./jwt.service')
const bcrypt = require('./bcrypt.service')
const swagger = require('./swagger.service')

module.exports={
    database,
    jwt,
    logger,
    bcrypt,
    swagger,
}