// In order to handel asynchronous codes in js, we can do in following ways:

// Callbacks: Callbacks are functions that are passed as arguments to other functions and are called when the other functions have finished executing. This is a relatively old way of handling async code, and it can be difficult to write and debug code that uses callbacks.

// Promises: Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. Promises can be chained together, which makes it easy to write code that handles multiple asynchronous operations.

// async/await: Async/await is a syntactic sugar on top of promises that makes it easier to write promise-based code. With async/await, you can write code that looks like synchronous code, but it will actually be executed asynchronously.

// For example

async function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * (await factorial(n - 1));
  }
}

const result = async () => {
  const factorial5 = await factorial(5);
  console.log(factorial5); // Output: 120
};

result();
