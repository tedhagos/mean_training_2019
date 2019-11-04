const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let url = req.url;
  let method = req.method;
  let msg = `
    requestUrl : ${url}
    requestMethod : ${method}
  `;

  res.write(JSON.stringify(msg));
  res.end();
}).listen(port, () => {
  console.log(`Listening on http port ${port}`);
});
