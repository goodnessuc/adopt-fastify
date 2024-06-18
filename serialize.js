const fastify = require('fastify')();

fastify.get('/user', {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' }
                }
            }
        }
    }
}, async (request, reply) => {
    return { id: 1, name: 'John Doe' };
});

fastify.listen(3000);
