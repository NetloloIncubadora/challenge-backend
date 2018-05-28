'use strict';

module.exports = (fastify) => {
  fastify.decorate('config', {
    serviceName: process.env.SERVICE_NAME || fastify.API_NAME,
    env: process.env.app_environment || 'development',
    charset: process.env.CHARSET || 'utf8',
    server: {
      host: process.env.app_host || '127.0.0.1',
      port: process.env.app_port || '49160',
      requestTimeout: process.env.request_timeout || '30000'
    }
  }, ['ENUMS']);
};