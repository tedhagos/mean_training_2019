// this  does not work
// really better to use Express for these things

const connect = require('connect');
const bodyParser = require('body-parser');
const util = require('util');

const form = require('fs').readFileSync('form.html');

connect(bodyParser.urlencoded({extended:true}), (req, res) => {
  console.log('something');
  if (req.method === 'POST') {
    console.log(`DATA : ${req.body}`);
    res.end(util.inspect(req.body));
  }
  else if(req.method === 'GET') {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(form);
  }
}).listen(3000);