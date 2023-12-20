const authMiddleWare = require('./auth.middleware')
const userMiddleWare = require('./user.middleware')
const validateMiddleWare = require('./validate.middleware')
const resourceAccessMiddleware = require('./resource-access.middleware.js');
const mediaMiddleware = require('./media.middleware');
module.exports = {
    authMiddleWare,
    userMiddleWare,
    validateMiddleWare,
    resourceAccessMiddleware,
    mediaMiddleware
}
