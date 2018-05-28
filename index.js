'use strict';

process.on('uncaughtException', (error) => console.error(error));
process.on('uncaughtRejection', (error) => console.error(error));

require('./src/server');