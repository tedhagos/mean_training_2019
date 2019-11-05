const http = require('http');
const form = require('fs').readFileSync('form.html');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  body = new Array();
  let formData = {};
  if(req.method === 'GET') {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(form);
  }
  else {
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      formData = Buffer.concat(body).toString();
      console.log(`BODY content : ${formData}`);
    });

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(JSON.stringify(formData));
  }

}).listen(port);