const { Router } = require('express');
const path = require('path');
const userRoutes = require('./user.route');
const paymentRoutes = require('./payment.routes');
const permission = require('./permission.routes');
const product  = require("./product.routes");
const media = require("./media.route");

const router = Router();
const register = (app) => {
  app.use(router);
  app.get('*', (req, res) => {
    res.render('pageNotFound');
    // if (!req.path.includes('/api')) {
    //   res.sendFile(path.join(`${path.resolve('./')}/../../build/index.html`));
    // }
  });
  router.use('/api/v1', [userRoutes,paymentRoutes,permission,product,media]);
};
module.exports = register;