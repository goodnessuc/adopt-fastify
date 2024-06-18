const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

fastify.post('/data', async (request, reply) => {
    const { name } = request.body;
    return { hello: name };
});

const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
