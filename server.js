// NODE SERVER
/*
Source: https://openclassrooms.com/en/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466231-demarrez-votre-serveur-node
Note: Need aliases for commands installed locally:
  alias ng="/Users/...project_path.../node_modules/@angular/cli/bin/ng"
  alias nodemon=/Users/...project_path.../node_modules/nodemon/bin/nodemon.js
*/

/* -------------------------------------------------------------------------- *\
    1) Imports the required elements (node package, express app from app.js).
\* -------------------------------------------------------------------------- */

const http = require('http');
const app = require('./app');

/* -------------------------------------------------------------------------- *\
    2) Defines the port on which 'app' runs.
\* -------------------------------------------------------------------------- */

//Port = default or, if none defined, 3000.
//NormalizePort() returns a valid default value (given as number or string).
const normalizePort = val =>
{
  const port = parseInt(val, 10);
  if (isNaN(port))
    return val;
  if (port >= 0)
    return port;
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/* -------------------------------------------------------------------------- *\
    3) Handles server errors.
\* -------------------------------------------------------------------------- */

const errorHandler = error =>
{
  if (error.syscall !== 'listen')
    throw error;
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code)
  {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/* -------------------------------------------------------------------------- *\
    4) Launches the server.
\* -------------------------------------------------------------------------- */

//Create the server using 'app'(which manages the request->response process).
const server = http.createServer(app);

//Configures the server to handle errors and listen to changes on the app's port.
server.on('error', errorHandler);
server.on('listening', () =>
{
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});
server.listen(port);
