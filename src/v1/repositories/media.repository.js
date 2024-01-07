const fs = require('fs');
const path = require('path')
const AWS = require('aws-sdk');
const multer = require('multer');
// const sharp = require('sharp');
const HttpStatus = require('http-status');
const config = require('../../config');
const models = require('../models');
// const s3Bucket = require('../services/s3Bucket.service');
const multerStorageService = require('../../services/multerStorage.service');
const { loggers } = require("../../services/logger.service.js");
const utility = require('../../utils');


const { MediaTemp } = models;
const { Op, literal } = models.Sequelize;


 /**
   * Upload media Local/AWS
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
 module.exports.uploadMedia = async(req, res, next)=> {
    try {
      const { params } = req;
      const { mediaFor } = params;
      // const { aws: { privateBucketName, bucketName } } = config;
      // req.bucketName = (mediaFor === 'brandLogo') ? privateBucketName : bucketName;
      const multerStorage = await multerStorageService.getStorage(config.app.mediaStorage);
      // eslint-disable-next-line consistent-return
      multerStorage.single('file')
      (req, res, async (error) => {
          this.error = error;
        if (error instanceof multer.MulterError) {
          return next(error);
        }
        if (error) {
          return next(error);
        }
        // Crop images
        if (config.app.mediaStorage === 'local') {
          const fileDir = path.join(
            path.resolve(),
            `/public/uploads/${mediaFor}/thumb/`,
          );
          const fileName = req?.file?.path.split(`${mediaFor}`);
          // sharp(req.file.path)
          //   .resize(200, 200)
          //   .sharpen()
          //   .toFile(`${fileDir}${fileName[1]}`, (err) => {
          //     if (err) {
          //       this.error = err;
          //     }
          //   });
        }
        next();
      });
    } catch (error) {
      next(error);
    }
  }


module.exports.uploadMediaFile = async(req, res, next) =>{
    try {
      // const { params } = req;
      // const { mediaType } = params;
      // params.mediaType = mediaType;
      const multerStorage = await multerStorageService.getFileStorage(
        config.app.mediaStorage,
      );
      // eslint-disable-next-line consistent-return
      multerStorage.single ('file')(req, res, async (error) => {
        this.error = error;
        if (this.error instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          if (this.error.code === 'LIMIT_FILE_SIZE') {
            this.error.message = utility.getMessage(req, false, 'TOO_LARGE_FILE');
          }
          this.error.status = HttpStatus.BAD_REQUEST;
          return next(this.error);
        }
        if (this.error) {
          // An unknown error occurred when uploading.
          this.error.status = HttpStatus.BAD_REQUEST;
          return next(this.error);
        }
        // if (config.app.mediaStorage === 'local') {
        //   // Generate Image thumb
        //   if (mediaType === 'image') {
        //     await createThumb(req, next);
        //   }
        // }
        next();
      });
    } catch (error) {
      next(error);
    }
  },


  module.exports.uploadMultipleMediaFile = async(req, res, next) =>{
    try {
      // const { params } = req;
      // const { mediaType } = params;
      req.params.mediaType = 'image';
      const multerStorage = await multerStorageService.getStorage(
        config.app.mediaStorage,
      );
      // eslint-disable-next-line consistent-return
      multerStorage.array ('files')(req, res, async (error) => {
        this.error = error;
        if (this.error instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          if (this.error.code === 'LIMIT_FILE_SIZE') {
            this.error.message = utility.getMessage(req, false, 'TOO_LARGE_FILE');
          }
          this.error.status = HttpStatus.BAD_REQUEST;
          return next(this.error);
        }
        if (this.error) {
          // An unknown error occurred when uploading.
          this.error.status = HttpStatus.BAD_REQUEST;
          return next(this.error);
        }
        // if (config.app.mediaStorage === 'local') {
        //   // Generate Image thumb
        //   if (mediaType === 'image') {
        //     await createThumb(req, next);
        //   }
        // }
        next();
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * Save media file
   * @param {Object} req
   */
 module.exports.create = async({
    params, file, headers, req,
  }) =>{
    try {
      let result = '';
      const mediaType = config.app.mediaStorage === 'local' ? params.mediaType : 'image';

      const imageDir = path.join(__dirname, `../../${file.path}`);
      // const ext = path.extname(file.originalname).split('.').pop();
      const HTTPs = 'https';
      if (config.app.mediaStorage === 's3' && params.mediaType === 'image') {
        const originalFileObj = file.transforms.findIndex((data) => data.id === 'original');
        if (originalFileObj >= 0) {
          // eslint-disable-next-line no-param-reassign
          file.key = file.transforms[originalFileObj].key;
        }
      }

      const mediaData = {
        name: file.filename || file.originalname,
        basePath: file.path || file.key,
        imagePath: imageDir,
        baseUrl: `${HTTPs}://${headers.host}/${file.path}`,
        mediaType,
        mediaFor: params.mediaFor,
        isThumbImage: false,
        status: 'pending',
      };
      // Upload image on s3
      if (config.app.mediaStorage === 's3') {
        if (params.mediaFor === 'video-track' && params.mediaType === 'image') {
          mediaData.baseUrl = config.aws.s3PublicBucketUrl + file.key;
        } else if (params.mediaFor === 'video-track' && params.mediaType === 'video') {
          mediaData.baseUrl = config.aws.s3PublicBucketUrl + file.key;
        } else {
          mediaData.baseUrl = config.aws.s3PublicBucketUrl + file.key;
        }
        result = await MediaTemp.create(mediaData);
      } else {
        result = await MediaTemp.create(mediaData);
      }
      return result;
    } catch (error) {
      loggers.error(`Media file create error: ${error}, user id: ${req?.user?.id} `);
      throw Error(error);
    }
  }

    /**
   * Save multiple media file
   * @param {Object} req
   */
    module.exports.createMultiple = async (req,res,next) =>{
      const {
        params, files, headers, connection,
      } = req;
      try {
        const HTTPs = connection.encrypted === undefined ? 'http' : 'https';
        const mediaDataArray = files.map((file) => ({
          name: file.filename,
          basePath: file.path,
          baseUrl: `${HTTPs}://${headers.host}/${file.path}`,
          mediaType: file.mimetype,
          mediaFor: params.mediaFor,
          status: 'used',
        }));
       const mediaArr= await MediaTemp.bulkCreate(mediaDataArray);
       req.mediaArr = mediaArr;
       next()
      } catch (error) {
        console.log(error)
        throw Error(error);
      }
    },

    /**
   * Find all media file by base_path
   * @param {Array} paths
   */
   module.exports.findAllByBasePathIn =async(paths) =>{
        try {
          const where = {
            status: 'pending',
            basePath: {
              [Op.in]: paths,
            },
          };
          return await MediaTemp.findAll({ where });
        } catch (error) {
          loggers.error(`Media find all by base path error: ${error}`);
          throw Error(error);
        }
      }

  /**
   * Find  media file by base_path and unlink
   * @param {Array} paths
   */
  module.exports.findMediaByBasePathAndUnlink = async(paths) => {
    try {
      const where = { basePath: paths };
      const mediaData = await MediaTemp.findOne({ where });
      if (mediaData) {
        await this.unlinkMedia(mediaData);
        await mediaData.update({ status: 'deleted' });
      }
      return true;
    } catch (error) {
      loggers.error(`Media find media by base path and unlink error: ${error}`);
      throw Error(error);
    }
  }
  /**
   * Unlink media file
   * @param {Object} media
   */
 module.exports.unlinkMedia = async(media) => {
    const fileDir = media.basePath;
    const objects = [{ Key: media.basePath }];
    // eslint-disable-next-line prefer-regex-literals
    const regexp = RegExp('image(\\\\|/)');
    if (fileDir && fileDir.match(regexp)) {
      const imagePathArray = fileDir.split('/');
      const imageName = imagePathArray.pop();
      imagePathArray.push('thumb');
      imagePathArray.push(imageName);
      const thumbPath = imagePathArray.join('/');
      if (thumbPath) {
        objects.push({ Key: thumbPath });
      }
    }
    const imageObj = { objects };
    if (config.app.mediaStorage === 's3') {
      if (media.mediaFor === 'video-track') {
        s3Bucket.unlinkVideoFromS3(imageObj);
      } else {
        s3Bucket.unlinkMediaFromS3(imageObj);
      }
    } else {
      // For local delete media
      await this.unlinkMediaFromLocal(media);
    }
  },

  /**
   * unlink media file from local
   * @param {Object} media
   */
module.exports.unlinkMediaFromLocal = async (media) => {
  try {
    console.log(media.basePath)
    const fileDir = path.join(path.resolve('./'), `${media.basePath}`);
    // eslint-disable-next-line no-unused-expressions
    fs.existsSync(fileDir) && fs.unlinkSync(fileDir);

    const regexp = RegExp('image(\\\\|/)');
    if (fileDir && fileDir.match(regexp)) {
      const imagePathArray = fileDir.split('/');
      const imageName = imagePathArray.pop();
      imagePathArray.push('thumb');
      imagePathArray.push(imageName);
      const thumbPath = imagePathArray.join('/');
      // eslint-disable-next-line no-unused-expressions
      fs.existsSync(thumbPath) && fs.unlinkSync(thumbPath);
    }
  } catch (error) {
    loggers.error(`Media unlink media from local error: ${error}`);
    throw Error(error);
  }
};

 /**
   * Change media status
   * @param {Array} paths
   */
module.exports.markMediaAsUsed = async (paths, t) => {
  const transaction = t || (await models.sequelize.transaction());
  try {
    const mediaData = {
      status: 'used',
    };
    const result = await MediaTemp.update(
      mediaData,
      {
        where: {
          basePath: {
            [Op.in]: paths,
          },
        },
      },
      {
        transaction,
      }
    );
    if (!t) {
      await transaction.commit();
    }
    return result;
  } catch (error) {
    if (!t) {
      await transaction.rollback();
    }
    mediaErrorMessage('mediaUsed', { error, data: paths });
    throw Error(error);
  }
};

module.exports.getMediaBasePathByName= async (baseName) =>{
  try {
    const where = {
      status: 'pending',
      name:baseName
    };
 return await MediaTemp.findOne({where:where})
  } catch (error) {
    mediaErrorMessage('getBaseUrl', { error, data: baseName });
    throw Error(error);
  }
}

module.exports.getMediaBasePath= async (basePath) =>{
  try {
    const where = {
      status: 'pending',
      basePath:baseName
    };
 return await MediaTemp.findOne({where:where})
  } catch (error) {
    mediaErrorMessage('getBaseUrl', { error, data: baseName });
    throw Error(error);
  }
}



module.exports.findAllAndRemove = async()=> {
  try {
    const where = {
      [Op.and]: literal('TIMESTAMPDIFF(MINUTE, `created_at`, NOW()) > 30'),
      status: 'pending',
    };
    const result = await MediaTemp.findAll({ where });
    const pendingMediaIds = [];
    const unlinkMediaPromises = result.map((media) => {
      pendingMediaIds.push(media.id);
      return this.unlinkMedia(media);
    });
    unlinkMediaPromises.push(
      MediaTemp.destroy({
        where: {
          id: {
            [Op.in]: pendingMediaIds,
          },
        },
      }),
    );

    await Promise.all(unlinkMediaPromises);

    return result;
  } catch (error) {
    loggers.error(`Media find all and remove error: ${error}`);
    throw Error(error);
  }
};