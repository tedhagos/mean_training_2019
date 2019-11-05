
const events = require('events');

let em = new events.EventEmitter();

// this is the code that listens
em.on('start', (data) => {
  console.log(data);
});

em.on('end', (data) => {
  console.log(data);
});

em.on('data', (data) => {
  console.log(data);
});

// Server code
const server = () => {
  process.nextTick(() => {
    em.emit('start', "Server starting");
  });

  process.nextTick(() => {
    em.emit('data', 10);
  });

  process.nextTick(() => {
    em.emit('end', "Server shutting down");
  });
}

server();