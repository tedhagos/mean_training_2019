

var string = "This is a string";
var integer = 1;
var float = 1.0;
var boolean = true;
var mnull = null;
var mundefined; // = undefined;
var obj = new Object();
var obj_too = {name:"John Doe", email: "jdoe@gmail.com"};
var array = [];
var array_too = new Array();
var func = function() {
  return "Hello";
}

console.log("string : ", typeof(string));
console.log("integer : ", typeof(integer));
console.log("float : ", typeof(float));
console.log("boolean : ", typeof(boolean));
console.log("mnull : ", typeof(mnull));
console.log("mundefined : ", typeof(mundefined));
console.log("obj : ", typeof(obj));
console.log("obj_too : ", typeof(obj_too));
console.log("array : ", typeof(array));
console.log("array_too : ", typeof(array_too));
console.log("func : ", typeof(func));