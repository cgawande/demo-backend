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
const { permissionController } = controllers;
const validateMiddleware = require("../middlewares/validate.middleware.js");

const router = Router();

router.get(
  "/permission",
  authMiddleware.checkUserAuth,
  permissionController.getPermissionList
);
router.get(
  "/user/permission/:id",
  authMiddleware.checkUserAuth,
  permissionController.getPermissionList
);
router.post(
  "/user/permission/:id",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin"]),
  permissionController.updateSubAdminPermission
);
router.post(
  "/permission",
  authMiddleware.checkUserAuth,
  validateMiddleware(accountValidator.permissionSchema),
  middlewares.resourceAccessMiddleware(["admin"]),
  permissionController.addPermission
);

router.put(
  "/permission/:id",
  authMiddleware.checkUserAuth,
  validateMiddleware(accountValidator.permissionSchema),
  middlewares.resourceAccessMiddleware(["admin"]),
  permissionController.updatePermission
);


module.exports = router;
