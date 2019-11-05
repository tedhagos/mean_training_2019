// basic code for HTTPS

const https = require('https');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const form = fs.readFileSync('form.html');
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

https.createServer(options, (req, res)=> {
  
  console.log(options.key);

  res.writeHead(200);
  res.end(form);
}).listen(port, ()=> {
  console.log(`listening on port ${port}`);
});

/*
resource page : https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/
*/