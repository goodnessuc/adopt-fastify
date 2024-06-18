const fastify = require('fastify')();
const cors_plugin = require('@fastify/cors')

// Example: Registering a CORS plugin

fastify.register(cors_plugin, {
    origin: '*'
});