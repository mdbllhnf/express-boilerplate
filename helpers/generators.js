'use strict';

exports.generateRecords = function(totalCount, generateRecord) {
  const result = new Array(totalCount);
  for (let index = 0; index < totalCount; index++) {
    if (typeof generateRecord !== 'function') {
      result[index] = {id: index + 1};
      continue;
    }
    result[index] = generateRecord(index + 1);
  }
  return result;
};