// server.js asd

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
  });

  await server.register(Inert);

  // Set up static file serving
  server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: 'public',
      },
    },
  });

  // // Home route
  // server.route(require('./src/routes/homeRoutes'));

  // // Admin route
  // server.route(require('./src/routes/adminRoutes'));

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
