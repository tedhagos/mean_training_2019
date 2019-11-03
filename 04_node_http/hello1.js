const http = require('http');

const port = process.env.PORT || 3000;

const app = http.createServer((req,res) => {

  let jsonMessage = {"message":"Hello"};

  res.writeHead(200, {'Content-Type' : 'application/json'});
  res.write(JSON.stringify(jsonMessage));
  res.end();

});

app.listen(port, () => {
  console.log("Listening on port 3000");
});

