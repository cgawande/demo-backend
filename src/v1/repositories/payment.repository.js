const { Op, Sequelize } = require("sequelize");
const models = require("../models/index.js");
const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { TransactionModel, userModel } = models;
const crypto = require("crypto");
const path = require("path");

const cors = require("cors");

const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_dv3hsJ5Ue3U5gl",
  key_secret: "vg4hIiDeNlV6eGmnIhs3aYG2",
});

let count = 1
module.exports.createOrder = async (req) => {
  const payment_capture = 1;
  const { amount, currency, type } = req.body;
  const options = {
    amount: Number(amount) * 100,
    currency: currency ?? "INR",
    receipt: shortid.generate() + `${count}`,
  };
  count++
  try {
    const res = await razorpay.orders.create(options);
    const body = {
      paymentId: "",
      userId: req?.userResult._id,
      type: type ?? "",
      orderId: res?.id,
    };
    const transaction = await TransactionModel.create(body);
    return { ...res, transactionId: transaction._id };
  } catch (error) {
    // logger('userError').error(new Error(error.message));
    console.log(error);
    userErrorMessage("addUser", { error, data: req?.body });
    throw new Error(error);
  }
};

module.exports.verifyPayment = async (req) => {
  try {
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      amount
    } = req.body;
    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac("sha256", process.env.key_secret);
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest("hex");
    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature) {
      return { value: false, msg: "Transaction not legit!" };
    } else {
      const newAmount = req?.userResult?.wallet ? req?.userResult?.wallet : 0;
      const total = Number(newAmount) + Number(amount)
      await userModel.updateOne(
        { email: req?.userResult?.email },
        { $set: { wallet: total } }
      );
      await TransactionModel.updateOne(
        { orderId: razorpayOrderId },
        { $set: { status: "completed" } }
      );
      return {
        value: true,
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
      };
    }
    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
  } catch (error) {
    // logger('userError').error(new Error(error.message));
    console.log(error);
    userErrorMessage("addUser", { error, data: req?.body });
    throw new Error(error);
  }
};

module.exports.paymentDetails = async (req) => {
  let paymentId = req.params.id;
  try {
    return await razorpay.payments.fetch(paymentId, {
      "expand[]": "card",
    });
  } catch (error) {
    console.log(error);
    userErrorMessage("addUser", { error, data: req?.body });
    throw new Error(error);
  }
};

module.exports.updateTransactionSatus = async (req, res) => {
  const transactionId = req.params.id
  const { status, } = req.body;
  try {
    await TransactionModel.findByIdAndUpdate(transactionId, {
      $set: { status: status },
    });
    return true
  } catch (error) {
    console.log(error)
    userErrorMessage('forgotPassword', { error, data: user.email });
    throw Error(error);
  }
};