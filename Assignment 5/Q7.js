// Async and await are keywords in JavaScript allows us to write asynchronous code in a more concise and readable way.
// Async functions are functions that return a promise, and the await keyword is used to wait for the promise to be fulfilled before continuing execution.

// For example:

async function doSomethingAsync() {
  const result = await someAsyncOperation();
  console.log(result);
}

doSomethingAsync();
