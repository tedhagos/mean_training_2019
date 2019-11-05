
const http = require('http');
const queryString = require('querystring');
const form = require('fs').readFileSync('form.html');
const util = require('util');

const server = http.createServer();

server.on('request', (req, res) => {
  
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(form);
  }
  
  let body = new Array();
  let postData ="";
  req.on('data', (chunk) => {
    // body.push(chunk);
    postData += chunk;
  });

  req.on('end', () => {
    // let data = Buffer.concat(body).toString();
    let qdata = queryString.parse(postData);
    let formData = {
      "lastname" : qdata.lastname,
      "firstname" : qdata.firstname,
      "email": qdata.email
    }
    console.log(formData);
    res.writeHead(200, {'Content-Type':'text/html'});
    // res.end(util.inspect(qdata));
    res.end(JSON.stringify(formData));
  });

});

server.listen(3000);