// Callback basics

function greet(name) {
  console.log(`Hello ${name}`);
}

function userInput(callBack) {
  var mName = "John Doe";
  callBack(mName);
}

userInput(greet); 
