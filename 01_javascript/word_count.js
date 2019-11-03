

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (text)=> {
  // process.stdout.write(text.toUpperCase());
  console.log(text.toUpperCase());
});
