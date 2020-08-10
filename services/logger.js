'use strict';

const winston = require('winston');
const path = require('path');

const {ENV} = require('@configs/server');
const {
  BASE_PATH,
  MIN_LEVEL,
  CATEGORIES,
  TRANSPORTS,
} = require('@configs/logging');

const defaultLoggerConfig = {
  level: MIN_LEVEL,
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp(),
    winston.format.printf(({level, message, timestamp}) => {
      return `[${timestamp}] [${level.toUpperCase()}] [${process.pid}:${ENV}]\n${message}\n`;
    }),
  ),
};

const allTransports = {
  console: () => new winston.transports.Console(),
  singleFile: (basePath, category) => new winston.transports.File({
    filename: path.join(basePath, `${category}.log`),
  }),
};

function makeLogger(basePath, categories) {
  const logger = {
    makeMessage: (lines) =>
      lines.reduce((previous, current) =>
        `${previous}\n-> ${current}`, '').trim(),
  };
  categories.forEach((category) => {
    const transports = [];
    if (TRANSPORTS[ENV].includes('console')) {
      transports.push(allTransports.console());
    }
    if (TRANSPORTS[ENV].includes('single-file')) {
      transports.push(allTransports.singleFile(basePath, category));
    }
    logger[category] = winston.createLogger({
      ...defaultLoggerConfig,
      transports,
    });
  });
  return logger;
}

module.exports = makeLogger(BASE_PATH, CATEGORIES);