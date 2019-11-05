
const events = new require('events');
const em = require('./eventServer');

const server = em.Server();

server.on('start', () => {
  console.log("starting");
});

server.on('data', (chunk) => {
  console.log(`data : ${chunk}`);
});

server.on('shutdown', () => {
  console.log("shutting down");
});

