'use strict';

const {
  asksSchema,
  priceSchema
} = require('./schema');

const asksService = require('./asks-service');

module.exports = async (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/api/asks',
    schema: asksSchema.query,
    handler: async (request, reply) => await asksService.asks(request, fastify)
  });

  fastify.route({
    method: 'GET',
    url: '/api/asks/:values',
    schema: asksSchema.param,
    handler: async (request, reply) => await asksService.asksValues(request, fastify)
  });

  fastify.route({
    method: 'GET',
    url: '/api/asks/prices',
    schema: priceSchema.query,
    handler: async (request, reply) => await asksService.price(request, fastify)
  });

  fastify.route({
    method: 'GET',
    url: '/api/asks/prices/:values',
    schema: priceSchema.param,
    handler: async (request, reply) => await asksService.priceValues(request, fastify)
  });

  next();
};