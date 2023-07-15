// Q.2 Explain Temporal Dead Zone?

// Ans: Temporal Dead Zone is a behavior that occurs when trying to access
// a variable that has been declared but not yet initialized. This behavior can cause unexpected errors in code.
// During temporal dead zone which is the period between the start of the scope and the actual declaration of the variable, accessing the variable would result in a ReferenceError. This is because the variable exists in the scope but has not been assigned a value yet.

console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization

let myVariable = 10;
console.log(myVariable);

// Above, the first console.log statement throws a ReferenceError because myVariable is accessed before it is declared. This is because the variable is in the temporal dead zone until it reaches the line where it is declared.
// Once the variable declaration is encountered, it is assigned the specified value, and any subsequent references to the variable will work as expected.
// We can easily hoist the let and const but they cant be accessed before the initialization
