
const fs = require('fs');

// Async way
// fs.readFile('index.html', 'utf-8', (err, data)=> {
//   console.log(data);
// });

// Sync way
const filecontent = fs.readFileSync('index.html').toString();
console.log(filecontent);