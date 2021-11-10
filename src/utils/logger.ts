import winston = require('winston');

const logConfiguration = {
    transports: [
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
        }),
        new winston.transports.File({
            filename: 'logs/info.log',
            level: 'info',
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'warn',
        }),
    ],
    format: winston.format.json(),
};

export const logger = winston.createLogger(logConfiguration);
