'use strict';

const boom = require('boom');

module.exports = (fastify) => {
  fastify.decorate('handleError', (error, reply) => {
    if (!error) {
      return reply.send(boom.badImplementation('handleError can not be undefined api-gateway'));
    }
    
    if (fastify.isEnvironment('development')) { 
      fastify.log.error(error.stack || error);
    }

    if (error.isBoom) {
      const payload = error.output.payload;
      return reply
        .code(payload.statusCode)
        .send({
          error: payload.error,
          message: payload.message,
          statusCode: payload.statusCode
        });
    }

    return reply.send(boom.badImplementation(error));
  }, [
    'config'
  ]);  
};