const events = require('events');

// Server code
function startServer() {
  const e = new events.EventEmitter();
  
  process.nextTick(() => {
    e.emit('start', 'Server starting');
  });

  process.nextTick(() => {
    let counter = 0;
    let timer = setInterval(() => {
      if (counter++ < 5) {
        e.emit('data', counter);
      }
      else {
        e.emit('shutdown', 'Server shutting down');
        clearInterval(timer);
      }
    }, 2000);
  });
  return e;
}

const server = startServer();

server.on('start', (msg) => {
  console.log(msg);
});
server.on('shutdown', (msg) => {
  console.log(msg);
});
server.on('data', (data) => {
  console.log(data);
});