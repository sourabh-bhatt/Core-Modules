// Q.3 Difference between var & let?

// Ans: Both var and let are used to declare variables in javascript. But inspite having the functionality of declaring variables they have a few differences:

// 1. Scope:
// The variables we declare using var have the scope of gloabal scope or functions scope.
// But with let they have block scope. Which means they are only available in the block where they are declared.
// Example with var
function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10 (accessible outside the block)
}
exampleVar();

// Example with let
function exampleLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // Error: y is not defined (only accessible within the block)
}
exampleLet();

// 2. Hoisting:
// Variable declared using var are hosited on the top of their scope, which means they can be accessed
// before the declaration. But their value will be undefined.
// But variables declared using let are not hoisted. And if we try to access them from their top, we get a
// reference error. And thus we fall in a temporal dead zone (until it is declared)

// Example with var
console.log(a); // Output: undefined (hoisted)
var a = 5;

// Example with let
console.log(b); // ReferenceError: b is not defined (not hoisted)
let b = 10;

// 3. Re-declaration:
// Variables declared usign var can be re declared in the same scope.
// Whereas in let we can re declare the same variable. Doing so can cause a syntax error.

// Example with var
var x = 5;
var x = 10; // No error, x is re-declared
console.log(x); // Output: 10

// Example with let
let y = 15;
let y = 20; // SyntaxError: Identifier 'y' has already been declared
console.log(y);
