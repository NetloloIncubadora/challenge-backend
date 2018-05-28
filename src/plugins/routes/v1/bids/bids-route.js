'use strict';

const {
  bidsSchema,
  priceSchema
} = require('./schema');

const bidsService = require('./bids-service');

module.exports = async (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/api/bids',
    schema: bidsSchema.query,
    handler: async (request, reply) => await bidsService.bids(request, fastify)
  });

  fastify.route({
    method: 'GET',
    url: '/api/bids/:values',
    schema: bidsSchema.param,
    handler: async (request, reply) => await bidsService.bidsValues(request, fastify)
  });

  fastify.route({
    method: 'GET',
    url: '/api/bids/prices',
    schema: priceSchema.query,
    handler: async (request, reply) => await bidsService.price(request, fastify)
  });

  fastify.route({
    method: 'GET',
    url: '/api/bids/prices/:values',
    schema: priceSchema.param,
    handler: async (request, reply) => await bidsService.priceValues(request, fastify)
  });

  next();
};