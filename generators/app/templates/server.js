const Hapi = require('hapi');
const Inert = require('inert');
const PORT = process.env.PORT || 3000; // Default PORT 3000

const server = new Hapi.Server({port: PORT});

const Plugins = [Inert]; // The Inert plugin allows hapi to serve static content

const provision = async () => {

  await server.register(Plugins);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {directory: {
      path: 'build', // The directory to serve all assets out of NOTE: All paths relative to this path
      index: true // If index file is found we will serve it at the root of the directory. NOTE: Defaults to true
    }}
  }); // register a single route to grab all static files

  await server.start();
  console.log(`Server running @ ${server.info.uri}`);

}

provision();
