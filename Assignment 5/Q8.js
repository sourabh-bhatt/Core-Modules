// Try and catch blocks are used to handle errors in JavaScript.
// The try block contains the code that we want to execute, and the catch block contains the code that we want to execute if an error occurs.

// For example

try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
}
