// basic code for HTTPS

const https = require('https');
// const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const form = fs.readFileSync('form.html');
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

https.createServer(options, (req, res)=> {
  
  // console.log(options.key);

  res.writeHead(200);
  res.end(form);
}).listen(port, ()=> {
  console.log(`listening on port ${port}`);
});

/*
Before running this app, you need to generate your self-signed
certificate. There are instructions here https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem

If you're on Windows, use git bash to run openssl commands
*/