//* A javaScript function is a block of code that performs a task.

//! A FUNCTION DECLARATION (defining a function)
function square(number) {
   return number * number;
}

//! A FUNCTION CALL (calling/executing a function)
const result = square(5);

console.log(result);

//! A FUNCTION DECLARATION 
function name(params) {
  // statements
  // have access to "this" keyword
}

//! A FUNCTION EXPRESSION
const name = function(params) {
  //statements
}

//! A ARROW FUNCTION (modern way)
const name = (params) => {
  //statements
}

function sayHi(name) {
  console.log(`Hi, ${name}`);
}

sayHi('Aradhya');


//!    FUNCTION RETURN - every function in javaScript returns undefined

function add(a, b) {
  return a + b;
}

const sum = add(2, 2);

console.log(sum);

//************************************************** */

function test() {
  return true;
  return false; // this never gets executed
}

const bool = test();

console.log(bool);


//!                      ARROW FUNCTION

const square = (number) => {
      return number * number;
}

const result = square(5);

console.log(result); 


//! PARAMETERS - used when defining a function
//! ARGUMENTS - they are real values passed when making a func call

const sayHi = (firstName) => {
  console.log(`Hi, ${firstName}`);
}