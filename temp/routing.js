const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res)=> {

  let url = req.url.trim().toLowerCase();
  let method = req.method;
  let msg = "";
  let responseCode = 404;

  switch(url) {
    case "/":
      responseCode = 404;
      msg = {"msg": "no route here"};
      break;
    case "/author":
      if(method === 'GET' || method === 'POST') {
        msg = {"msg": "Author page"};
        responseCode = 200;
      }
      break;
    case "/book":
      if(method === 'GET' || method === 'POST') {
        msg = {"msg": "Book page"};
        responseCode = 200;
      }
      break;
    default:
        msg = {"msg": "no route here"};
  }

  res.writeHead(responseCode, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(msg));
}).listen(port, () => {
  console.log(`Listening on http port ${port}`);
});
