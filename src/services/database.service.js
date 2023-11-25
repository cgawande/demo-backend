const mongoose = require('mongoose');
const {
  loggerErrorMessage,
  loggerInfoMessage,
} = require('../logMessages/index.js');
const config = require("../../src/config/database.js")

async function establishDbConnection() {
  try {
    await mongoose.connect(config.url);
    loggerInfoMessage('connection');
      console.log('Database connected successfully'); 
  } catch (error) {
      loggerErrorMessage('connection', { error });
    console.log('Database connection error %s', error);
  }
}

module.exports = establishDbConnection;
