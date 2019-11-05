
const Router = require('router');
const router = Router();
const bodyParser = require('body-parser');
const http = require('http');
const form = require('fs').readFileSync('form.html');
const finalhandler = require('finalhandler');

const port = process.env.PORT || 3000;

router.use(bodyParser.urlencoded({extended:true}));

router.get('/',(req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(form);
});

router.post('/', (req, res) => {
  console.log(req.body.lastname);
  console.log(req.body.firstname);
  console.log(req.body.email);
  formData = {
    "name" : req.body.firstname + " " + req.body.lastname,
    "email" : req.body.email
  }
  
  res.writeHead(200, {'Content-Type':'application/json'});
  res.end(JSON.stringify(formData));
});

http.createServer((req, res) => {
  router(req, res, finalhandler(req,res));
}).listen(port);