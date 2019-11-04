
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {

  fs.readFile('index.html', (err,data) => {
    if (err) {
      res.writeHead(500, {"Content-Type":"text/html"});
      res.end(err.message);
    }
    else {
      res.writeHead(200, {"Content-Type":"text/html"});
      res.end(data);
    }

  });
}).listen(port, ()=> {
  console.log(`Listening on port ${port}`);
});

