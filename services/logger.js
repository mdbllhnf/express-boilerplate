const path = require('path');
const winston = require('winston');
require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
            return `${timestamp} ${level.toUpperCase()}: ${message}`;
        }),
    ),
    transports: [
        new winston.transports.DailyRotateFile({
            filename: path.join('logs', 'general-%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            maxSize: '50m',
            maxFiles: '30d',
        }),
    ],
});
   
const { env } = require('@configs/app');
if (env !== 'production') {
    logger.add(new winston.transports.Console());
}

module.exports = logger;