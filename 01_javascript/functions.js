
function foo() {
  return "function foo";
}

var bar = function baz() {
  return "function expr baz"
}

console.log(foo());  // this hoisted to module scope
console.log(bar());  // same as foo(), hoisted also

// the next code is illegal bec baz() is not part of
// the module scope
// console.log(baz()); 