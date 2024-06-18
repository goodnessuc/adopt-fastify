// // Import the Fastify library
// const fastify = require('fastify')({ logger: true });
//
// // Define a simple GET route
// fastify.get('/', async (request, reply) => {
//     return { hello: 'world' };
// });
//
// // Define a POST route
// fastify.post('/data', async (request, reply) => {
//     const { name } = request.body;
//     return { hello: name };
// });
//
// // Run the server
// const start = async () => {
//     try {
//         await fastify.listen(3000);
//         fastify.log.info(`Server listening on ${fastify.server.address().port}`);
//     } catch (err) {
//         fastify.log.error(err);
//         process.exit(1);
//     }
// };
// start();
