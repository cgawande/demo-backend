const { Router } = require("express");
const controllers = require("../controllers/index.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const middlewares = require("../middlewares/index.js");
const userMiddleWare = require("../middlewares/user.middleware.js");
const { getModule } = require("../../services/module-key.service.js");
const { accountValidator } = require("../validations/index.js");

const { USER, USER_LOGIN } = getModule();
const { userController } = controllers;
const validateMiddleware = require("../middlewares/validate.middleware.js");
const { access } = require("fs");

const router = Router();

router.post(
  USER.slug,
  userMiddleWare.checkUserEmailExistsAlready,
  validateMiddleware(accountValidator.userAccountSignUpSchema),
  userController.createUserSignUP
);

router.post(
  USER_LOGIN.slug,
  userMiddleWare.checkUSerEmailNotExists,
  userMiddleWare.comparePassword,
  userController.createUserLogin
);

router.get(
  "/admin",
  // authMiddleware.checkUserAuth,
  // middlewares.resourceAccessMiddleware(["admin"]),
  (req, res) => {
    res.status(200).json({ message: "hello" });
  }
);

router.post(
  "/forgot-password",
  userMiddleWare.checkUSerEmailNotExists,
  userController.forgotPassword
);

router.post(
  "/reset-password",
  validateMiddleware(accountValidator.userAccountResetPasswordSchema),
  userMiddleWare.checkResetPasswordToken,
  userMiddleWare.checkUserIdNotExists,
  userController.resetPassword
);

router.post(
  "/change-password",
  authMiddleware.checkUserAuth,
  validateMiddleware(accountValidator.userAccountChangePasswordSchema),
  userMiddleWare.comparePassword,
  userController.updatePassword
);

router.post(
  "/register/sub-admin",
  //authMiddleware.checkUserAuth,
  userMiddleWare.checkUserEmailExistsAlready,
  validateMiddleware(accountValidator.userAccountSignUpSchema),
  //middlewares.resourceAccessMiddleware(["admin"]),
  (req, res, next) => {
    req.body.role = "sub-admin";
    next();
  },
  userController.createSubAdmin
);

router.get(
  "/users",
   authMiddleware.checkUserAuth,
   middlewares.resourceAccessMiddleware(["admin"]),
  (req, res, next) => {
    req.role = "user";
    next();
  },
  userController.getUserList
);


router.get(
  "/users/:id",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin"]),
  userMiddleWare.checkUserIdNotExists,
  userController.getUserData
);

router.put(
  "/users/:id",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin"]),
  userMiddleWare.checkUserIdNotExists,
  userController.updateStatus
);
router.delete(
  "/users/:id",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin"]),
  userMiddleWare.checkUserIdNotExists,
  userController.deleteUser
)

router.post(
  "/users/:id",
  authMiddleware.checkUserAuth,
  validateMiddleware(accountValidator.userUpdateRoleSchema),
  middlewares.resourceAccessMiddleware(["admin"]),
  userMiddleWare.checkUserIdNotExists,
  userController.updateUserRole
)

router.get(
  "/sub-admin",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin"]),
  (req, res, next) => {
    req.role = "sub-admin";
    next();
  },
  userController.getUserList
);
router.get(
  "/token",
  authMiddleware.checkUserAuth,
  userController.getUserDataByToken
);

router.post(
  "/add-wallet",
  authMiddleware.checkUserAuth,
  userController.updateWallet
);
module.exports = router;
