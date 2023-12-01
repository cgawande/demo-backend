const { Router } = require("express");
const controllers = require("../controllers/index.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const middlewares = require("../middlewares/index.js");
const userMiddleWare = require("../middlewares/user.middleware.js");
const { getModule } = require("../../services/module-key.service.js");
const { accountValidator } = require("../validations/index.js");

const { USER, USER_LOGIN } = getModule();
const { userController, paymentController } = controllers;
const validateMiddleware = require("../middlewares/validate.middleware.js");

const router = Router();

router.post("/payment", paymentController.createOrder);

router.get("/payments/:id", paymentController.paymentDetails);

router.post("/payment/verify", paymentController.verifyPayment);
module.exports = router;