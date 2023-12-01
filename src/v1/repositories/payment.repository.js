require("dotenv").config();
const { Op, Sequelize } = require("sequelize");
const models = require("../models/index.js");
const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { paymentRepository } = models;
const crypto = require("crypto");
const path = require("path");

const cors = require("cors");

const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

module.exports.createOrder = async (req) => {
  const payment_capture = 1;
  const { amount, currency } = req.body;
  const options = {
    amount: Number(amount) * 100,
    currency: currency ?? "INR",
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    return await razorpay.orders.create(options);
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
    } = req.body;
    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac("sha256",process.env.key_secret);
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest("hex");
    console.log("digest", digest, "razor", razorpaySignature);
    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature) {
      return { value: false, msg: "Transaction not legit!" };
    } else {
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
