'use strict';

const i18n = require('i18n');

const {DEFAULT_LOCALE} = require('@configs/app');

i18n.configure({
  staticCatalog: {
    en: require('@locales/en'),
  },
  defaultLocale: DEFAULT_LOCALE,
  autoReload: true,
  updateFiles: false,
  api: {
    '__': 'trans',
  },
});

module.exports = i18n;