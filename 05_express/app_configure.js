const express = require('express')
const app = express();
 
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port);