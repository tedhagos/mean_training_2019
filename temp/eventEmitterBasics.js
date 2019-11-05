
const s = require('./eventServer');
const em = s.Server();


em.on('start', ()=> {
  console.log('server starting');
});

em.on('data', (chunk)=> {
  console.log(chunk);
});

em.on('shutdown', ()=> {
  console.log('server stopping');
});

