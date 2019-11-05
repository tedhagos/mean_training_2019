const fs = require('fs');
const http = require('http');
const path = require('path');
const zlib = require('zlib');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type','text/plain');
  res.setHeader('Content-Encoding','gzip');

  fs.createReadStream(path.join(__dirname, 'lorem.txt'))
  .pipe(zlib.createGzip())
  .pipe(res);

}).listen(port);