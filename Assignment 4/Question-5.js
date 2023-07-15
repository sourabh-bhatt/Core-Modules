// Q.5 What is the difference between let and const ?

// Ans: The difference are as follows:

// 1. Reassignability: The let can be declared and its value can be assigned later.
// For example:
let a;
a = 10;
console.log(a); // Output: 10

// Whereas in const it can be assigned later. It have to be assigned with the declaration of const. 
// For example:
const b;
b = 100;
console.log(b); // Output: SynracError: Missing initializer in const declaration

// The const should be declared with the initialization.
