const fs = require('fs');

const file = fs.createReadStream('form.html');

file.on('error', (err) => {
  console.log(err.messge);
});

file.on('end', () => {
  console.log('Finished reading');
});

file.on('data', (data) => {
  console.log(data.toString());
});