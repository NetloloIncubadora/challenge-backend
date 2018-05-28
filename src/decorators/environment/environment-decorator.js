'use strict';

module.exports = (fastify) => {
  fastify.decorate('isEnvironment', (environment) => environment === fastify.config.env, [ 'config' ]);  
};