//Function Statement aka Function Declartion
function a() {
  console.log("a called");
}
a();

//Function expression
var b = function () {
  return 1;
};
b();

//Anonymous Function
// function () {

// }

//Named Function Expression
var b = function z() {
  return 1;
};
b();

//Parameters and Arguments
var b = function (param1) {
  return param1;
};

let arg1 = "Hello, World!";
b(arg1);

//First class functions
var b = function (param1) {
  console.log(param1); // prints " f() {} "
};
b(function () {});

// Other way of doing the same thing:
var b = function (param1) {
  console.log(param1);
};
function xyz() {}
b(xyz); // same thing as prev code

// we can return a function from a function:
var b = function (param1) {
  return function () {};
};
console.log(b()); //we log the entire fun within b.

//Arrow Functions
const arrowFunction = () => {
    return "Ben!";
}