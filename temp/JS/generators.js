

function* numberFactory() {
  // can't use yield inside inner function
  // [1,2,3,4,5,6,7].forEach((el) => {
  //   yield el;
  // });	
  
  for(let i=1; i<5;i++) {
    yield i;
  }
}

let iterable = numberFactory();
console.log(iterable.next().value);

// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// var gen = generator(10);

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next().value);
// // expected output: 20