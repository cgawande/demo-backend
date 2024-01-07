const { Router } = require("express");
const controllers = require("../controllers/index.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const middlewares = require("../middlewares/index.js");
const userMiddleWare = require("../middlewares/user.middleware.js");
const { getModule } = require("../../services/module-key.service.js");
const {
  accountValidator,
  paymentValidator,
} = require("../validations/index.js");

const { USER, USER_LOGIN } = getModule();
const { productController, permissionController, mediaController } = controllers;
const validateMiddleware = require("../middlewares/validate.middleware.js");

const router = Router();

router.get(
  "/product",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin", "sub-admin"]),
  productController.getProductList
);
router.put(
  "/product/:id",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin", "sub-admin"]),
  productController.changeProductStatus);

router.post(
  "/product/:mediaFor",
  authMiddleware.checkUserAuth,
  (req, res, next) => {
    const { params, body } = req;
    params.apiName = 'media';
    Object.assign(body, params);
    next();
  },
  mediaController.uploadMediaFile,
  userMiddleWare.checkProductExist,
  mediaController.saveMedia,
  productController.addProduct

);
router.put(
  "/permission/:id",
  authMiddleware.checkUserAuth,
  validateMiddleware(accountValidator.permissionSchema),
  middlewares.resourceAccessMiddleware(["admin"]),
  permissionController.updatePermission
);

router.post(
  "/assign",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin"]),
  productController.assignProductToSubAdmin
);

module.exports = router;
