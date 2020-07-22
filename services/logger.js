const path = require('path');
const winston = require('winston');
require('winston-daily-rotate-file');

const {
    basePath,
    fileNameFormat,
    dateFormat,
    maxFileSize,
    maxFiles,
} = require('@configs/log');

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
            filename: path.join(basePath, fileNameFormat),
            datePattern: dateFormat,
            maxSize: `${maxFileSize}m`,
            maxFiles: `${maxFiles}d`,
        }),
    ],
});
   
const { env } = require('@configs/app');
if (env !== 'production') {
    logger.add(new winston.transports.Console());
}

module.exports = logger;