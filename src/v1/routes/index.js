const { Router } = require('express');
const path = require('path');
const userRoutes = require('./user.route')

const router = Router();
const register = (app) => {
  app.use(router);
  app.get('*', (req, res) => {
    res.render('pageNotFound');
    // if (!req.path.includes('/api')) {
    //   res.sendFile(path.join(`${path.resolve('./')}/../../build/index.html`));
    // }
  });
  router.use('/api/v1', [userRoutes]);
};
module.exports = register;