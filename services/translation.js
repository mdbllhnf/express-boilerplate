'use strict';

const i18n = require('i18n');

const {LOCALE} = require('@configs/server');

i18n.configure({
  staticCatalog: {
    en: require('@locales/en'),
  },
  defaultLocale: LOCALE,
  autoReload: true,
  updateFiles: false,
  api: {
    '__': 'trans',
  },
});

module.exports = i18n;