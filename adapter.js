const fastify = require('fastify')();
const awsLambdaFastify = require('aws-lambda-fastify');

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

const proxy = awsLambdaFastify(fastify);
exports.handler = proxy;
