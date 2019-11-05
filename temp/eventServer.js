const event = require('events');


module.exports.Server = function() {

  const em = new event.EventEmitter();

  process.nextTick(()=> {
    em.emit('start');
    em.emit('data', 'Sample data');
    em.emit('shutdown');
  });

  return em;
}


