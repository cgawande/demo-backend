const { Op, Sequelize } = require("sequelize");
const models = require("../models/index.js");
const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { User, Permission } = models;

module.exports.getPermissionList = async (req) => {
  try {
    const { id } = req?.params;
    const where = {};
    if (id) {
      where.id = id;
    }
    return await Permission.findAll({ where: where });
  } catch (error) {
    console.log(error);
    logger("getPermission").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};
