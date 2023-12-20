const utility = require("../../utils/index.js");
const repositories = require("../repositories/index.js");

const { userRepository, mediaRepository } = repositories;

/**
 * Upload media Local/AWS
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
module.exports.uploadMedia = async (req, res, next) => {
  try {
    return await mediaRepository.uploadMedia(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports.saveMedia = async (req, res, next) => {
  try {
    const result = await mediaRepository.createMultiple(req,res,next);
    // res.status(utility.httpStatus("CREATED")).json({
    //   success: true,
    //   data: result,
    //   message: "",
    // });
  } catch (error) {
    next(error);
  }
};

module.exports.uploadMediaFile = async (req, res, next) => {
  try {
     await mediaRepository.uploadMultipleMediaFile(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports.test = async (req, res, next) => {
  try {
    const result = await mediaRepository.uploadMultipleMedia(req);
    res.status(utility.httpStatus("CREATED")).json({
      success: true,
      data: result,
      message: "",
    });
  } catch (error) {
    next(error);
  }
};
