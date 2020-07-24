'use strict';

exports.makeLogMessage = (lines) =>
    lines.reduce((previous, current) =>
        `${previous}\n-> ${current}`, '').trim();

exports.generateRecords = (totalCount, singleRecordGenerator) => {
    const result = new Array(totalCount);
    for(let index = 0; index < totalCount; index++) {
        if(typeof singleRecordGenerator !== 'function') {
            result[index] = { id: index + 1 };
            continue;
        }
        result[index] = singleRecordGenerator(index + 1);
    }
    return result;
};