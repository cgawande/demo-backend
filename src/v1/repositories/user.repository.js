const { Op, Sequelize } = require("sequelize");
const models = require("../models/index.js");
const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { userModel } = models;

/**
 * Create user
 * @param {object} req
 * @returns
 */
module.exports.userRegister = async (req) => {
  try {
    //console.log(kjjkjkdfjg)
    const { password, confirmPassword, ...rest } = req.body;
    const hashPassword = await bcrypt.createHashPassword(password);
    return await userModel.create({ ...rest, password: hashPassword });
  } catch (error) {
    // logger('userError').error(new Error(error.message));
    console.log(error);
    userErrorMessage("addUser", { error, data: req?.body });
    throw new Error(error);
  }
};

/**
 * login user
 * @param {object} req
 * @returns
 */
module.exports.userLogin = async (req) => {
  try {
    const user = req.userResult;
    return this.findTokenExistAndUpdate(user);
  } catch (error) {
    userErrorMessage("login", { error, data: req?.body });
    throw new Error(error);
  }
};

/**
 * find user by email
 * @param {object} email
 * @returns
 */
module.exports.findUserExist = async (where) => {
  try {
    return await userModel.findOne(where);
  } catch (error) {
    userErrorMessage("findUser", { error, data: where });
    throw Error(error);
  }
};

module.exports.findTokenExist = async (token) => {
  try {
    return await userModel.findOne({ token: token });
  } catch (error) {
    console.log(error);
    userErrorMessage("findUser", { error, data: user.email });
    throw Error(error);
  }
};

module.exports.findTokenExistAndUpdate = async (user) => {
  try {
    const newtoken = await jwt.createToken({ userId: user.id });
    await userModel.updateOne({ email: user.email }, { token: newtoken });
    return newtoken;
  } catch (error) {
    console.log(error);
    userErrorMessage("findUser", { error, data: user.email });
    throw Error(error);
  }
};

module.exports.getUserList = async (req) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      filterField,
      filterValue,
    } = req.query;

    // Create a base query
    let query = { role: req.role };
    // If search parameter is provided, use it to filter by username or email
    if (search) {
      query = {
        $or: [
          { username: { $regex: search, $options: "i" } }, // case-insensitive search
          { email: { $regex: search, $options: "i" } },
        ],
        role: req.role,
      };
    }

    // If filter parameters are provided, use them to filter by a specific field and value
    if (filterField && filterValue) {
      query[filterField] = filterValue;
    }

    // Perform the query with pagination and excluding the password field
    const users = await userModel
      .find(query)
      .select("-password")
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    // Count the total number of documents for pagination
    const totalCount = await userModel.countDocuments(query);

    return {
      users,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      totalCount,
    };
  } catch (error) {
    console.log(error);
    userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.forgotPassword = async (req) => {
  try {
    const token = await jwt.createToken({ userId: req.userResult.id });
    const emailSend = await sendEmail(
      req.userResult.email,
      token,
      req.userResult.id
    );
    return {
      success: "success",
      message: "Email sent successfully",
    };
  } catch (error) {
    console.log(error);
    userErrorMessage("forgotPassword", { error, data: user.email });
    throw Error(error);
  }
};

module.exports.userResetPassword = async (req, res) => {
  const { id, token } = req.body;
  const { newPassword, confirmPassword } = req.body;
  try {
    const isTrue = await this.findUserAndPasswordUpdate(id, newPassword);
    if (isTrue) {
      return isTrue;
    } else {
      return isTrue;
    }
  } catch (error) {
    console.log(error);
    userErrorMessage("forgotPassword", { error, data: user.email });
    throw Error(error);
  }
};

module.exports.updatePassword = async (req, res) => {
  const { newPassword } = req.body;
  try {
    const isTrue = await this.findUserAndPasswordUpdate(
      req.userResult._id,
      newPassword
    );
    if (isTrue) {
      return isTrue;
    } else {
      return isTrue;
    }
  } catch (error) {
    console.log(error);
    userErrorMessage("forgotPassword", { error, data: user.email });
    throw Error(error);
  }
};

module.exports.findUserAndPasswordUpdate = async (id, password) => {
  try {
    const hashPassword = await bcrypt.createHashPassword(password);
    await userModel.findByIdAndUpdate(id, {
      $set: { password: hashPassword },
    });
    return true;
  } catch (error) {
    console.log(error);
    userErrorMessage("findUser", { error, data: user.email });
    throw Error(error);
  }
};

module.exports.updateWallet = async (req, res) => {
  const { amount } = req.body;
  try {
    const newAmount = req?.userResult?.wallet ? req?.userResult?.wallet : 0;
    const total = Number(newAmount) +Number(amount)
    await userModel.updateOne(
      { email: req?.userResult?.email },
      { $set: { wallet: total } }
    );
    return true;
  } catch (error) {
    console.log(error);
    userErrorMessage("forgotPassword", { error, data: user.email });
    throw Error(error);
  }
};
