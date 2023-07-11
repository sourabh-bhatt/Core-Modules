// Q.1 Explain Hoisting in JavaScript

// The hoisting in javascript is known as a variable or a function's declaration are moved on the top
// of their scope, during the compilation phase before the code being executed.
// By this we can use variables and functions before they are actually declared in the code.

// The hoisting can be done in 2 ways

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
