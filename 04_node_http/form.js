const http = require('http');
const form = require('fs').readFileSync('form.html');

const port = process.env.PORT || 3000;


const app = http.createServer((req,res) => {

  let jsonMessage = {"message":"Hello"};

  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write(form);
  res.end();

});

app.listen(port, () => {
  console.log("Listening on port 3000");
});