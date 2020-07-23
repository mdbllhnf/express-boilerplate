'use strict';

exports.makeLogMessage = (lines) =>
    lines.reduce((previous, current) =>
        `${previous}\n-> ${current}`, '').trim();