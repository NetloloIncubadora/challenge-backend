'use strict';

module.exports = async (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async (request, reply) => `The plot device and I will be your guide. {${fastify.config.env}} api-challenge-backend`
  });
  next();
};