const app = require('./app')
const socketIO = require('socket.io');
const services = require('./services/index.js');
const { loggerInfoMessage } = require('./logMessages/index.js');
const { database,logger } = services;
const port = app.get('port') ?? 3000;



const server = app.listen(port, () => { 
    loggerInfoMessage('listen', { port: port ?? 3000 });
    database();
    console.log(`Server listening on port ${port}`)});
   



  
