'use strict';

module.exports = (fastify) => {
  const ROUTES = {
    API_NAME: 'api-challenge-backend',
    NOUNS_RESOURCE_SERVICES: {
      NOUNS: 'apis'
    }
  };

  fastify.decorate('ENUMS', Object.freeze(Object.assign({}, ROUTES)));
};