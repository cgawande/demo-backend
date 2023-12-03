const { Router } = require("express");
const controllers = require("../controllers/index.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const middlewares = require("../middlewares/index.js");
const userMiddleWare = require("../middlewares/user.middleware.js");
const { getModule } = require("../../services/module-key.service.js");
const { accountValidator, paymentValidator } = require("../validations/index.js");

const { USER, USER_LOGIN } = getModule();
const { userController, paymentController } = controllers;
const validateMiddleware = require("../middlewares/validate.middleware.js");

const router = Router();

router.post("/payment",
    authMiddleware.checkUserAuth,
    validateMiddleware(paymentValidator.createOrderSchema),
    paymentController.createOrder);

router.get("/payments/:id",
    authMiddleware.checkUserAuth,
    paymentController.paymentDetails);

router.post("/payment/verify",
    authMiddleware.checkUserAuth,
    paymentController.verifyPayment);

router.post("/transaction/:id",
    authMiddleware.checkUserAuth,
    paymentController.updateTransactionSatus)

module.exports = router;