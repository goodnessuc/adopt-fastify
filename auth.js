const fastify = require('fastify')();
fastify.register(require('@fastify/jwt'), {
    secret: 'supersecret'
});

// JWT authentication hook
fastify.addHook('onRequest', async (request, reply) => {
    try {
        await request.jwtVerify();
    } catch (err) {
        reply.send(err);
    }
});

fastify.post('/login', async (request, reply) => {
    const token = fastify.jwt.sign({ user: 'example' });
    return { token };
});

fastify.listen(3000);
