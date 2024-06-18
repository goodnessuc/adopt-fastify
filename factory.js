const Fastify = require('fastify');

function createServer() {
    const fastify = Fastify();
    fastify.get('/', async (request, reply) => {
        return {hello: 'world'};
    });
    return fastify;
}

const server = createServer();


server.listen({port: 3000, host: '0.0.0.0'}, err => {
    if (err) throw err;
    console.log('Server listening on http://localhost:3000');
});