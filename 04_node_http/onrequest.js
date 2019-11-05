// this works
// use this to demo the stream nature of
// node objects

const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=> {
  res.writeHead(200);
  res.end('Hello');
});
server.listen(3000);