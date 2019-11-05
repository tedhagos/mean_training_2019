var fs = require('fs')
    , https = require('https')
    , http = require('http')
    , express = require('express')
    , keys_dir = 'keys/'
    , server_options = {
        key  : fs.readFileSync(keys_dir + 'privatekey.pem'),
        ca   : fs.readFileSync(keys_dir + 'certauthority.pem'),
        cert : fs.readFileSync(keys_dir + 'certificate.pem')
      }
    , app = express();
app.configure(function(){
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session( { secret: '' } ));
  app.use(app.router);
});
app.configure('development',function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({dumpExceptions: true, showStack:true}));
  app.set('view options', { pretty: true });
});
app.get('/', function(req, res){
  res.send('Hello World!');
});
https.createServer(server_options,app).listen(7000);
http.createServer(app).listen(8000);