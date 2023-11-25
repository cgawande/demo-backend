const authMiddleWare = require('./auth.middleware')
const userMiddleWare = require('./user.middleware')
const validateMiddleWare = require('./validate.middleware')
const resourceAccessMiddleware = require('./resource-access.middleware.js');
module.exports = {
    authMiddleWare,
    userMiddleWare,
    validateMiddleWare,
    resourceAccessMiddleware
}
