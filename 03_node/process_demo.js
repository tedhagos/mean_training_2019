

process.argv.forEach((val, index) => {
  console.log(`${index} : ${val}`);
  console.log(`number of args:  ${process.argv.length}`); 
});



/*

If you run the code like this `node process_demo.js`, it will 
output the following;

0 .../node
1 .../process_demo.js

The 0th element of `process.env` is the node executable itself
and the 1st element is the name of the source program

If you run the code like this 

`node process_demo.js one two three`, it will output the following

0 .../node
1 .../process_demo.js
2 one
3 two
4 three

Exercise - Write a program that;

- checks if there is at least one command line param passed to the 
  program
- the program can accept > 1 but <= 3 params, if this is violated
  terminate the program and return a non-zero value from the 
  program

TIP: to exit from a node runtime, you can use `process.exit();`

*/