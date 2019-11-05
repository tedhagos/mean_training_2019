/*
to debug this
node --inspect formProcess.js
then open a tab in chrome:://inspect/#devices
then "Open Dedicated DevTools for node"

Then, set breakpoints

*/

const http = require('http');
const form = require('fs').readFileSync('form.html');
const qstring = require('querystring');

const port = process.env.PORT || 3000;


const app = http.createServer((req,res) => {

  const { headers, method, url } = req;

  let mUrl = req.url;
  let mMethod = req.method;
  let body = new Array();

  res.setHeader('Content-Type', 'text/html');

  if(mUrl.toLowerCase() == '/' && mMethod == 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(form);
  }

  req.on('data', (chunk) => {
    // console.log('on data ' + chunk);
    body.push(chunk);
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('Request ended ', body);
    let formData = qstring.parse(body);
    

    // let retval = {
    //   "lastname": "Doe",
    //   "email": "abc"
    // };

    let retval = {
      "lastname": formData.lastname,
      "email": formData.email
    };

    res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(retval));
  });

});

app.listen(port, () => {
  console.log("Listening on port 3000");
});