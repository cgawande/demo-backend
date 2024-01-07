const { Op, Sequelize } = require("sequelize");
const models = require("../models/index.js");
const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { User, Permission, PermissionRole, Product, ProductMedia } = models;

module.exports.getProductList = async (req) => {
  try {
    const { id } = req?.params;
    const where = {};
    if (id) {
      return await User.findAll({
        where: { id: id },
        include: [{ model: PermissionRole, include: { model: Permission } }],
      });
    }
    return await Product.findAll({ where: where, include: [{ model: ProductMedia, }] });
  } catch (error) {
    console.log(error);
    logger("getProductList").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.addProduct = async (req) => {
  try {
    const userId = req.userResult.id;
    const body = { ...req.body, userId: userId };
    delete body.files;
    const res = await Product.create(body);
    const result = await this.insertMedia(req, res.id)
    return { result: res, mediaArr: req.mediaArr }
  } catch (error) {
    console.log(error)
    logger("addProduct").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.insertMedia = async (req, productId) => {
  try {
    const mediaArr = req.mediaArr;
    const mediaDataArray = mediaArr.map((file) => ({
      productId: productId,
      name: file.name,
      basePath: file.basePath,
      baseUrl: file.baseUrl
    }));
    return await ProductMedia.bulkCreate(mediaDataArray);
  } catch (error) {
    console.log(error)
    logger("insertMedia").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.updatePermission = async (req) => {
  const { id } = req.params;
  try {
    await Permission.update(req.body, { where: { id: id } });
    return true;
  } catch (error) {
    logger("updatePermission").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.updateSubAdminPermission = async (req) => {
  const { id } = req.params;
  const { permissions } = req.body;
  try {
    if (permissions.length) {
      await this.deleteSubAdminPermission(req);
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
  const { id } = req.params;
  try {
    const res = await PermissionRole.destroy({ where: { userId: id } });
  } catch (error) {
    logger("updatePermission").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};



module.exports.checkProductExist = async (req) => {
  const { userResult, body } = req;
  try {
 return await Product.findOne({
      where: {
        userId: userResult.id,
        type: body.type,
        updateType: body.updateType,
        status: {
          [Op.notIn]: ["reCheck", "completed", "cancel", "failed"],
        },
      }
    });
  } catch (error) {
    logger("productExist").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.assignProductToSubAdmin = async (req) => {
  const {body:{cscId,userIds} } = req;
  try {
     return await Product.update(
        { assignUser: cscId }, // Adjust this according to your update requirements
        {
          where: {
            userId: {
              [Sequelize.Op.in]: userIds,
            },
            cscId: cscId,
          },
        }
      );
  } catch (error) {
    logger("productExist").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

