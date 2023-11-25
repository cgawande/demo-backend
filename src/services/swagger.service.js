const cors = require('cors');
// const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const config = require('../config/index.js');

function initiateSwagger(app) {
  const {
    app: { swaggerHost, environment },
  } = config;
  const swaggerDefinition = {
    info: {
      title: 'REST API for Good guyz Application',
      version: '1.0.0',
      description: 'This is the REST API for Good guyz Application',
    },
    host: `${swaggerHost}`,
    basePath: '/api/v1',
    securityDefinitions: {
      BearerAuth: {
        type: 'apiKey',
        description: 'JWT authorization of an API',
        name: 'Authorization',
        in: 'header',
      },
    },
  };

  const options = {
    swaggerDefinition,
    apis: [path.join(path.resolve('api-docs'), '*.yaml')],
  };

  const swaggerSpec = swaggerJSDoc(options);
  app.use(
    cors({
      'Access-Control-Allow-Origin': `https://${swaggerHost}`,
    })
  );
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use((req, res, next) => {
    const {
      headers: { host },
      secure,
    } = req;
    if (secure) {
      config.app.setBaseUrl(`https://${host}/`);
    } else {
      config.app.setBaseUrl(`http://${host}/`);
    }
    next();
  });
}

module.exports = initiateSwagger;
