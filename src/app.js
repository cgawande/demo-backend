const  express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const { logger } = require('./services/logger.service.js')
const utils = require('./utils/index.js');
const router = require('./v1/routes/index');
const services = require('./services/index.js');
const { loggerInfoMessage,loggerErrorMessage } = require('./logMessages/index.js');

const app = express();
const { NODE_ENV } = process.env;
// const isProduction = NODE_ENV === 'production';

// Middlewares
// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, PATCH');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.use(
  morgan(
    'Remote Address::remote-addr Method::method Url::url Status::status Content-Length::res[content-length] Response-Time::response-time ms Remote-User::remote-user [:date[clf]]'
  )
);
app.set('port', utils.getEnv('APP_PORT'));
// Body parser and helmet middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// API Routes
services.swagger(app)
router(app);

//Error Handler
// app.use((err, req, res, next) =>{
// if (err) {
//   loggerErrorMessage(null, { err });
// }
//   res.status(500).json({
//     message: 'Internal server error',
//     error: err,
//   })
// }
// );

app.use((error, req, res, next) => {
  console.log(error)
  const internalError = utils.httpStatus('INTERNAL_SERVER_ERROR');
  if (error) {
    loggerErrorMessage(null, { error });
  }
  let statusCode = error?.status
    ? utils.httpStatus('BAD_REQUEST')
    : internalError;
  if (error?.status === utils.httpStatus('UNAUTHORIZED')) {
    statusCode = utils.httpStatus('UNAUTHORIZED');
  }
  res.status(statusCode).json({
    success: false,
    data: null,
    error,
    message:
      statusCode === internalError
        ? utils.getMessage(req, false, 'INTERNAL_ERROR')
        : String(error?.message)
            ?.replace(new RegExp('Error:', 'g'), '')
            ?.trim(),
  });
});

app.use((req, res) => {
  const error = new Error('Not Found');
  error.status = utils.httpStatus('NOT_FOUND');
  res.status(error.status).json({
    success: false,
    data: null,
    error,
    message: error.message,
  });
});


module.exports = app