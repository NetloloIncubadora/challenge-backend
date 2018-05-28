'use strict';

module.exports = {
  register: require('fastify-swagger'),
  options: {
    swagger: {
      info: {
        title: 'API-CHALLENGE',
        description: 'this is documentation routes API-CHALLENGE',
        version: '0.1.0'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    },
    exposeRoute: true
  }
};