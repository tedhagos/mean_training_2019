const express = require('express');
const app = express();

// const app = require('express')();
const home = require('./routes/home');
const homePost = require('./routes/homePost');
app.set('port', process.env.PORT || 3000);

app.use('/', express.static('public'));
app.use('/res2', express.static('img'));

app.use('/author',(req, res, next) => {
  let startTime = new Date();
  res.on('finish', () => {
    let endTime = new Date();
    console.log(`Time elapsed : ${endTime - startTime}`);
  });
  next();
});

app.get('/', home.index );
app.post('/', homePost.index);

app.get('/book', (req, res) => {
  res.send('BOOK page');
});
app.get('/book/:id', (req, res) => {
  res.send(`Parameters passed : ${req.params.id}`);
});



app.listen(app.get('port'));