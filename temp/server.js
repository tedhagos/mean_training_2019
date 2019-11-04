const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let msg = {"message": "Hello World"};
  res.write(JSON.stringify(msg));
  res.end();
}).listen(port, () => {
  console.log(`Listening on http port ${port}`);
});
