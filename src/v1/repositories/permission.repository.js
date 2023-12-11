const { Op, Sequelize } = require("sequelize");
const models = require("../models/index.js");
const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { User, Permission,PermissionRole } = models;

module.exports.getPermissionList = async (req) => {
  try {
    const { id } = req?.params;
    const where = {};
    if (id) {
      return await User.findAll({ where: {id:id}, include:{model:Permission} });
    }
    return await Permission.findAll({ where: where });
  } catch (error) {
    console.log(error);
    logger("getPermission").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.addPermission = async (req) => {
  try {
      return await Permission.create(req.body);
  } catch (error) {
    logger("addPermission").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.updatePermission = async (req) => {
  const {id}= req.params
  try {
      await Permission.update(req.body,{where:{id:id}});
      return true
  } catch (error) {
    logger("updatePermission").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};



module.exports.updateSubAdminPermission = async (req) => {
  const {id}= req.params
  const {permissions } =req.body
  try {
    if (permissions.length) {
      await this.deleteSubAdminPermission(req)
      const result = permissions.map(async (e) => {
        PermissionRole.create({ permissionId: e.id, userId: id });
      });
      return await Promise.all(result);
    }
  } catch (error) {
    logger("updatePermission").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};


module.exports.deleteSubAdminPermission = async (req) => {
  const {id}= req.params
  try {
    const res =await PermissionRole.destroy({where:{userId:id}})
  } catch (error) {
    logger("updatePermission").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};
