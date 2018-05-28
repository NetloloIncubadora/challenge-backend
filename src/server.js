'use strict';

const options = {
  logger: true
};

if ((process.env.app_environment === 'test') || (process.env.app_environment === 'production')) {
  Reflect.deleteProperty(options, 'logger');
}

const fastify = require('fastify')(options);

require('./plugins')
  .forEach((plugin) => Array.isArray(plugin) ?
    plugin.forEach((route) => fastify.register(route.register, route.options)) :
    fastify.register(plugin.register, plugin.options));

require('./decorators')
  .forEach((decorate) => decorate(fastify));

require('./middlewares')
  .forEach((middleware) => fastify.use(middleware));

fastify.setNotFoundHandler((request, reply) => reply
  .code(404)
  .send({
    error: "Not Found",
    message: `Resource was not found`,
    statusCode: 404
  })
);

fastify.setErrorHandler((error, request, reply) => fastify.handleError(error, reply));
fastify.ready((error) => _ready(error));

const _ready = (error) => {
  if (error) throw new Error(`Unable to register the Plugins: ${error}`);
  console.log(fastify.printRoutes());
  fastify.swagger();
};

const start = async (fastify) => {
  try {
    await fastify.listen(fastify.config.server);
    const server = fastify.server.address();
    fastify.log.info(`Server running at: ${server.address}:${server.port}, family: ${server.family}, using environment: ${fastify.config.env}`);
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start(fastify);