const userRepository = require('./user.repository');
const paymentRepository =require('./payment.repository');
const PermissionRepository = require('./permission.repository');
const productRepository = require("./product.repository");
const mediaRepository = require("./media.repository")
module.exports = {
    userRepository,
    paymentRepository,
    PermissionRepository,
    productRepository,
    mediaRepository
}