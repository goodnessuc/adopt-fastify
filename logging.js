const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
    request.log.info('Hello world route called');
    return { hello: 'world' };
});

fastify.listen(3000);
