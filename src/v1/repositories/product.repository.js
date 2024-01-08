const { Op, Sequelize } = require("sequelize");
const models = require("../models/index.js");
const { userErrorMessage } = require("../../logMessages/index.js");
const services = require("../../services/index.js");
const { logger } = require("../../services/logger.service.js");
const { bcrypt, jwt, sendEmail } = services;
const { User, Permission, PermissionRole, Product, ProductMedia, AssignProduct,VerifyProduct } = models;

module.exports.getProductList = async (req) => {
  try {
    const { userResult, params: { id }, body: { status } } = req;
    const where = {};
    if (id) {
      return await Product.findOne({ where: { id: id }, include: [{ model: ProductMedia, }] });
    }
    if (status) {
      where.status = status
    }
    if (userResult.role === "sub-admin") {
      where.assignUser = userResult.id
      return await AssignProduct.findAll({ where: where, include: [{ model: User, }, { model: Product, include: { model: ProductMedia } }] });
    }
    return await Product.findAll({ where: where, include: [{ model: ProductMedia }] });
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

module.exports.addVerifyProduct = async (req) => {
  try {
    const userId = req.userResult.id;
    const {applicantName,phoneNumber,aadharNumber,aadharUpdateDetails,productId} = req.body
    const option={
      applicantName:applicantName,
      phoneNumber:phoneNumber,
      enrollementNumber:aadharNumber,
      aadharUpdateDetails:aadharUpdateDetails,
      productId:productId,
      userId:userId,
    }
    const res = await VerifyProduct.create(option);
    const result = await this.insertMedia(req, res.id)
    return { result: res, mediaArr: req.mediaArr }
  } catch (error) {
    console.log(error)
    logger("addVerifyProduct").error(error);
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
          [Op.notIn]: ["reCheck", "completed","approved","cancel", "failed"],
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
    const productData= productIds.map((ele) => ({
     userId: userId,
     productId:ele
    }));
   return await AssignProduct.bulkCreate(productData);
  } catch (error) {
    console.log(error)
    logger("assignProduct").error(error);
    //userErrorMessage("userList", { error, data: req.role });
    throw Error(error);
  }
};

module.exports.changeProductStatus = async (req) => {
  const { body, params: { id } } = req;
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