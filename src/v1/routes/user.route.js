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
  userController.forgotPassword,
);

router.post(
  "/reset-password/:id/:token",
  userMiddleWare.checkResetPasswordToken,
  userMiddleWare.checkUserIdNotExists,
  userController.resetPassword,
);

router.post(
  "/register/sub_admin",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin"]),
  userController.createUserSignUP
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
  "/sub-admin",
  authMiddleware.checkUserAuth,
  middlewares.resourceAccessMiddleware(["admin"]),
  (req, res, next) => {
    req.role = "sub-admin";
    next();
  },
  userController.getUserList
);

module.exports = router;
