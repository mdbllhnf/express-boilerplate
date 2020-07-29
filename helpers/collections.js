'use strict';

const lodash = require('lodash');

exports.paginateRecords = function(records, {page, perPage}) {
  const chunks = lodash.chunk(records, perPage);
  const chunk = chunks[page - 1] || [];
  return {
    pagination: {
      page,
      perPage,
      pages: chunks.length,
      total: records.length,
      totalPerPage: chunk.length,
    },
    records: chunk,
  };
};