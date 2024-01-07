const { Op, Sequelize } = require("sequelize");
const models = require("../models/index.js");
const crypto = require("crypto");
const path = require("path");
const cors = require("cors");
const shortid = require("shortid");
const Razorpay = require("razorpay");

const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { Transaction, User } = models;
const userRepository = require("./user.repository.js")


const razorpay = new Razorpay({
  key_id: "rzp_test_dv3hsJ5Ue3U5gl",
  key_secret: "vg4hIiDeNlV6eGmnIhs3aYG2",
});

module.exports.createOrder = async (req) => {
  const payment_capture = 1;
  const { amount, currency, type } = req.body;
  const options = {
    amount: Number(amount) * 100,
    currency: currency ?? "INR",
    receipt: shortid.generate() + `${Date.now()}`,
  };
  try {
    const res = await razorpay.orders.create(options);
    const body = {
      paymentId: "",
      userId: req?.userResult.id,
      type: type ?? "credit",
      orderId: res?.id,
      chargeAmount: amount,
    };
    const transaction = await Transaction.create(body);
    return { ...res, transactionId: transaction.id };
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
      amount,
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
      // const newAmount = req?.userResult?.wallet ? req?.userResult?.wallet : 0;
      // const total = Number(newAmount) + Number(amount);
      // await User.update(
      //   { wallet: total },
      //   { where: { email: req?.userResult?.email } }
      // );
      await Transaction.update(
        { status: "completed" },
        { where: { orderId: razorpayOrderId } }
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
  const transactionId = req.params.id;
  const { status } = req.body;
  try {
    await Transaction.update({ status: status }, {
      where: { id: transactionId },
    });
    return true;
  } catch (error) {
    console.log(error);
    userErrorMessage("forgotPassword", { error, data: user.email });
    throw Error(error);
  }
};


module.exports.makePayment = async (req, res) => {
  const { amount } = req.body
  try {
    const balance = await userRepository.getWalletBalance(req);
    if(balance<amount){
      return {
        value:false,
        message:"You dont have a sufficient balance please recharge your wallet"
      }
    }else{
      let minimumBalance = balance - amount;
      if(minimumBalance <100){
        return {
          value:false,
          message:"Please maintain wallet balance Rs 100,please recharge your wallet"
        }
      }else{
        const body = {
          paymentId: "",
          userId: req?.userResult.id,
          type: "debit",
          status:"completed",
          amount: amount,
        };
        const transaction = await Transaction.create(body);
        return { value:true,message:"success" ,transactionId: transaction.id };
      }
    }
  } catch (error) {
    console.log(error);
    logger("makePayment").error(error);
    throw Error(error);
  }
};
