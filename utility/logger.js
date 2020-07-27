'use strict'

const winston = require('winston');
const path = require('path');

const { env } = require('@configs/app');
const {
    basePath,
    minLevel,
    categories,
} = require('@configs/logging');

const defaultLoggerConfig = {
    level: minLevel,
    levels: winston.config.syslog.levels,
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
            return `[${timestamp}] [${level.toUpperCase()}] [${process.pid}:${env}]\n${message}\n`;
        }),
    ),
};

function makeLogger(basePath, categories) {
    const logger = {};
    categories.forEach((category) => {
        const transports = [
            new winston.transports.File({
                filename: path.join(basePath, `${category}.log`),
            }),
        ];
        if(env === 'development') {
            transports.push(new winston.transports.Console());
        }
        logger[category] = winston.createLogger({
            ...defaultLoggerConfig,
            transports,
        });
    });
    return logger;
}

module.exports = makeLogger(basePath, categories);