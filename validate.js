const fastify = require('fastify')();

fastify.post('/data', {
    schema: {
        body: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                age: { type: 'integer' }
            },
            required: ['name', 'age']
        }
    }
}, async (request, reply) => {
    return { status: 'Data is valid' };
});

fastify.listen({ port: 3000, host: '0.0.0.0' });
