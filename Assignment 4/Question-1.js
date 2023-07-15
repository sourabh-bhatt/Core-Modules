// Q.1 Explain Hoisting in JavaScript

// The hoisting in javascript is known as a variable or a function's declaration are moved on the top
// of their scope, during the compilation phase before the code being executed.
// By this we can use variables and functions before they are actually declared in the code.

// The hoisting can be done in 2 ways.

// 1: By using variable declaration that is only using `var`

test = 10; // it will output 10
console.log(test); //hoisted but it will show undefined - it will not throw any error
var test = 5; //varible declaration

// Based on hoisting, the code is actually interpreted like this:
var test; // Variable declaration is hoisted to the top
test = 10;
console.log(test);
test = 5;
//Output - 10

// 2: By using function declaration
// The function declaration also hoist. Its scope also moved above the current scope to the top.
// It defines the function definition automatically on the top of the code, before execution.
// Note: The function hoisting dosen't work with function expressions and arrow functions.
funcHoisting(); //it will be hoisted
function funcHoisting() {
  console.log("Hii");
}
//Output -- Hii after the hoisting

// Note: The const and let are not hoisted.
