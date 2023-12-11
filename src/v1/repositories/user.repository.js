const { Op, Sequelize} = require("sequelize");
const models = require("../models/index.js");
const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { User, Permission, PermissionRole ,Transaction} = models;

/**
 * Create user
 * @param {object} req
 * @returns
 */
module.exports.userRegister = async (req) => {
  try {
    const { password, confirmPassword, ...rest } = req.body;
    const hashPassword = await bcrypt.createHashPassword(password);
    const cscId = await generateUniqueRandomNumber();
    return await User.create({ ...rest, cscId: cscId, password: hashPassword });
  } catch (error) {
    console.log(error);
    logger("addUser").error(error);
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
    return await this.findTokenExistAndUpdate(user);
  } catch (error) {
    // userErrorMessage("login", { error, data: req?.body });
    logger("login").error(error);
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
    return await User.findOne({ where: where,include:[{model:PermissionRole,include:{model:Permission}}] });
  } catch (error) {
    console.log(error);
    logger("findUser").error(error);
    //userErrorMessage("findUser", { error, data: where });
    throw Error(error);
  }
};

module.exports.findTokenExist = async (token) => {
  try {
    return await User.findOne({ where: { token: token } });
  } catch (error) {
    console.log(error);
    logger("findToken").error(error);
    //userErrorMessage("findToken", { error, data: user.email });
    throw Error(error);
  }
};

module.exports.findTokenExistAndUpdate = async (user) => {
  try {
    const newtoken = await jwt.createToken({
      userId: user?.id,
      email: user?.email,
    });
    await User.update(
      { token: newtoken },
      {
        where: { id: user?.id },
      }
    );
    return newtoken;
  } catch (error) {
    console.log(error);
    logger("tokenUpadate").error(error);
    //userErrorMessage("tokenUpadate", { error, data: user.email });
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
    const limitNumber = +limit;
    let where = { role: req.role };
    // If search parameter is provided, use it to filter by username or email
    if (search) {
      where = {
        [Op.or]: [
          { fullName: { [Op.like]: `%${search}%` } }, // case-insensitive search
          { email: { [Op.like]: `%${search}%` } },
        ],
        role: req.role,
      };
    }
    // If filter parameters are provided, use them to filter by a specific field and value
    if (filterField && filterValue) {
      where[filterField] = filterValue;
    }
    // Perform the query with pagination and excluding the password field
    const users = await User.scope("activeUser").findAll({
      attributes: { exclude: ["password", "token"] },
      where,
      offset: (page - 1) * limitNumber,
      limit: limitNumber,
    });
    // Count the total number of documents for pagination
    const totalCount = await User.count({ where });
    return {
      users,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      totalCount,
    };
  } catch (error) {
    console.log(error);
    logger("userList").error(error);
    //userErrorMessage("userList", { error, data: req.role });
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
    logger("forgotPassword").error(error);
    //userErrorMessage("forgotPassword", { error, data:req.userResult.email });
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
    logger("resetPassword").error(error);
    //userErrorMessage("resetPassword", { error, data: req?.body });
    throw Error(error);
  }
};

module.exports.updatePassword = async (req, res) => {
  const { newPassword } = req.body;
  try {
    const isTrue = await this.findUserAndPasswordUpdate(
      req.userResult.id,
      newPassword
    );
    if (isTrue) {
      return isTrue;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    logger("updatePassword").error(error);
    // userErrorMessage("updatePassword", { error, data: req.userResult.email });
    throw Error(error);
  }
};

module.exports.findUserAndPasswordUpdate = async (id, password) => {
  try {
    const hashPassword = await bcrypt.createHashPassword(password);
    await User.update({ password: hashPassword }, { where: { id: id } });
    return true;
  } catch (error) {
    console.log(error);
    logger("updatePassword").error(error);
    //userErrorMessage("updatePassword", { error, data: id });
    throw Error(error);
  }
};

module.exports.updateWallet = async (req, res) => {
  const { amount } = req.body;
  try {
    const newAmount = req?.userResult?.wallet ? req?.userResult?.wallet : 0;
    const total = Number(newAmount) + Number(amount);
    await User.update(
      { wallet: total },
      { where: { email: req?.userResult?.email } }
    );
    return true;
  } catch (error) {
    console.log(error);
    logger("updateWallet").error(error);
    // userErrorMessage("updateWallet", { error, data:req.body  });
    throw Error(error);
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    return await User.destroy(
      { where: { id: id } }
    );
  } catch (error) {
    console.log(error);
    logger("deleteUser").error(error);
    // userErrorMessage("deleteUser", { error, data: id });
    throw Error(error);
  }
};

module.exports.updateUserStatus = async (req, res) => {
  let status = req.userResult.status;
  console.log(status, "stattus");
  if (status === "active") {
    status = "inactive";
  } else {
    status = "active";
  }
  try {
    return await this.updateByEmail(req?.userResult?.email, { status: status });
  } catch (error) {
    console.log(error);
    logger("updateStatus").error(error);
    // userErrorMessage("updateWallet", { error, data:req.body  });
    throw Error(error);
  }
};

module.exports.updateByEmail = async (email, obj) => {
  try {
    await User.update(obj, { where: { email: email } });
    return true;
  } catch (error) {
    console.log(error);
    logger("updateByEmail").error(error);
    // userErrorMessage("updateWallet", { error, data:req.body  });
    throw Error(error);
  }
};

module.exports.createSubAdmin = async (req) => {
  try {
    const { permissions, password, confirmPassword, ...rest } = req.body;
    const hashPassword = await bcrypt.createHashPassword(password);
    const cscId = await generateUniqueRandomNumber();
    const res = await User.create({ ...rest, cscId: cscId, password: hashPassword });
    if (res && permissions.length) {
      const result = permissions.map(async (e) => {
        PermissionRole.create({ permissionId: e.id, userId: res.id });
      });
      return await Promise.all(result);
    }else{
      return res
    }
  } catch (error) {
    console.log(error);
    logger("createSubAdmin").error(error);
    throw new Error(error);
  }
};

async function generateUniqueRandomNumber() {
  let randomFourDigitNumber;
  let existingRecord;
  do {
    // Generate a random four-digit number
    randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    // Check if the number already exists in the database
    randomFourDigitNumber = `CSC-${randomFourDigitNumber}`
     existingRecord = await User.findOne({
      where: { cscId:randomFourDigitNumber},
    });
    // If the number already exists, continue the loop to generate a new one
  } while (existingRecord);
  // At this point, randomFourDigitNumber is unique
  return randomFourDigitNumber;
}
