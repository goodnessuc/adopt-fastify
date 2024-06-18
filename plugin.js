const fastify = require('fastify')();
const cors_plugin = require('@fastify/cors')

// Example: Registering a CORS plugin

fastify.register(cors_plugin, {

    origin: '*'

});


fastify.get('/', async (request, reply) => {

    return {hello: 'world'};

});


fastify.listen(3000, err => {

    if (err) throw err;

    console.log('Server listening on http://localhost:3000');

});

