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
    const { userResult } = req;
    const where = {};
    if (userResult.role === "sub-admin") {
      return await Product.findAll({ where: { assignUser: userResult.id }, include: [{ model: ProductMedia, }] });
    }
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
  const { body: { userId, productIds }, userResult } = req;
  try {
    const res = await Product.update(
      { assignUser: userId, status: "assigned" }, // Adjust this according to your update requirements
      {
        where: {
          id: {
            [Sequelize.Op.in]: productIds,
          }
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error)
    logger("productExist").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.changeProductStatus = async (req) => {
  const {body, params: { id } } = req;
  try {
    return await Product.update({ status: body.status }, {
      where: {
        assignUser: userResult.id,
        id: id,
      }
    });
  } catch (error) {
    logger("changeProductStatus").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};