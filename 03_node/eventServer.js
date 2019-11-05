const event = require('events');

module.exports.Server = function () {
  const em = new event.EventEmitter();
  
  process.nextTick(()=> {
    em.emit('start');
  });

  process.nextTick(()=> {
    em.emit('data', 'Hello World');
  });

  process.nextTick(()=> {
    em.emit('shutdown');
  });


  return em;
}