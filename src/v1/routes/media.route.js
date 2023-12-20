const { Router } = require('express');
const controllers = require('../controllers');
const validations = require('../validations');
const middlewares = require('../middlewares/index');

const router = Router();
const { mediaValidator } = validations;
const { mediaController } = controllers;
const { authMiddleWare ,mediaMiddleware} = middlewares;

router.post(
  '/media/upload/:mediaFor/:mediaType',
  // authMiddleWare.authValidateRequest,
  (req, res, next) => {
    const { params, body } = req;
    params.apiName = 'media';
    Object.assign(body, params);
    next();
  },
  // validateMiddleware(mediaValidator.uploadSchema),
  mediaController.uploadMedia,
  mediaController.saveMedia,
);
router.post(
  '/test/:mediaFor/:mediaType',
  (req, res, next) => {
    const { params, body } = req;
    params.apiName = 'media';
    Object.assign(body, params);
    next();
  },
  mediaController.test,
)
// router.post(
//   '/public/upload/:mediaFor/:mediaType',
//   (req, res, next) => {
//     const { params, body } = req;
//     params.apiName = 'media';
//     Object.assign(body, params);
//     next();
//   },
//   validateMiddleware(mediaValidator.uploadSchema),
//   mediaController.uploadMedia,
//   mediaController.saveMedia,
// );

router.post(
  '/media/upload/:mediaFor',
  (req, res, next) => {
    const { params, body } = req;
    params.apiName = 'media';
    Object.assign(body, params);
    next();
  },
  mediaController.uploadMediaFile,
  mediaController.saveMedia,
);

module.exports = router;
