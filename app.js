const http = require('http');
const config = require('./config');
const logger = require('./logger');

http.createServer((req, res) => {
    console.log('New incoming request');
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello world!'}));
}).listen(config.APP_PORT, () => console.log(logger.loggerMessage))
