// const express = require('express');
// const app = express();

const app = require('express')();
const home = require('./routes/home');
const homePost = require('./routes/homePost');
app.set('port', process.env.PORT || 3000);


app.get('/', home.index );
app.post('/', homePost.index);


app.listen(app.get('port'));