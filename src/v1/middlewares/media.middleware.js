/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
const find = require('lodash');
const repositories = require('../repositories/index');
const utility = require('../../utils/index');

const { mediaRepository,userRepository } = repositories;

  /**
   * Check media for
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
module.exports.checkMediaFor = async (req, res, next) => {
    const { params: { basePath, basePathArray, mediaFor } } = req;
   try {
      const basePathStr = basePath;
      const basePathStrArray = basePathArray ?? [];
      const regexp = RegExp(`${mediaFor}(\\\\|/)`);
      let message;
      let error;
      if (
        basePathStrArray.length < 1
        && basePathStrArray.some((value) => value instanceof undefined)
      ) {
        next();
      } else {
        basePathStr && basePathStrArray.push(basePathStr);
        if (basePathStrArray && basePathStrArray.length) {
          error = basePathStrArray.find(
            (element) => !element?.match(regexp)
              && (message = `Invalid media type for '${mediaFor}', in '${element}'`),
          );
        }
        if (error) {
          res.status(utility.httpStatus('BAD_REQUEST')).json({
            success: false,
            data: [],
            message,
          });
        } else {
          next();
        }
      }
    } catch (error) {
      next(error);
    }
  },

  /**
   * Check media exist by base path
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
module.exports.checkMediaExists =async (req, res, next) => {
    const { params: { basePath, basePathArray } } = req;
    try {
      const basePathStr = basePath;
      const basePathStrArray = basePathArray || [];
      let error;
      if (
        basePathStrArray.length < 1 && basePathStrArray.some((value) => value instanceof undefined)
      ) {
        next();
      } else {
        basePathStr && basePathStrArray.push(basePathStr);
        const medias = await mediaRepository.findAllByBasePathIn(
          basePathStrArray,
        );
        error = basePathStrArray.find((element) => {
          const isExist = find(medias, { basePath: element });
          return (
            !isExist?.__wrapped__.length > 0 && `Media file not found, for '${element}'`
          );
        });
        if (error) {
          error = new Error(utility.getMessage(req, false, 'MEDIA_INVALID'));
          error.status = utility.httpStatus('BAD_REQUEST');
          next(error);
        } else {
          next();
        }
      }
    } catch (error) {
      next(error);
    }
  }

  module.exports.checkUpdateMediaExist = async (req, res, next) => {
    console.log("df",req.body.profilePicture)
    const media =await  mediaRepository.getMediaBasePathByName(req.body.profilePicture)
    try {
      const {
        body: { profilePicture },
        user: { id }, params,
      } = req;
      const where = { id: id ?? params?.id };
      if (profilePicture) {
          where.profilePicture = media?.basePath;
      }
      const result = await userRepository.findOne({where:where});
      if (result) {
        Object.assign(req.params, {
          basePathArray: [],
          mediaFor: 'user',
          isUpdate: 'yes',
        });
        next();
      } else {
        Object.assign(req.params, {
          basePathArray: [media.basePath],
          mediaFor: 'user',
          basePath :media.basePath,
          isUpdate: 'yes',
        });
        next();
      }
    } catch (error) {
      next(error);
    }
  }