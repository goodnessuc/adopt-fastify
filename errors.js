const fastify = require('fastify')();

fastify.setErrorHandler((error, request, reply) => {
    reply.status(500).send({ error: 'Something went wrong!' });
});

fastify.get('/', async (request, reply) => {
    throw new Error('Oops!');
});

fastify.listen(3000);
