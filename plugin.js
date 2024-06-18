const fastify = require('fastify')();

// Example: Registering a CORS plugin
fastify.register(require('@fastify/cors'), {
    origin: '*'
});

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, err => {
    if (err) throw err;
    console.log('Server listening on http://localhost:3000');
});
