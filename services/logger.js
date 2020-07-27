'use strict'

const winston = require('winston');
const path = require('path');

const { env } = require('@configs/app');

const commonLogFormat = winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
        return `[${timestamp}] [${level.toUpperCase()}] [${process.pid}:${env}]\n${message}\n`;
    }),
);

module.exports = {
    general: winston.createLogger({
        level: 'debug',
        levels: winston.config.syslog.levels,
        format: commonLogFormat,
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                filename: path.join('logs', 'general.log'),
            }),
        ],
    }),
};