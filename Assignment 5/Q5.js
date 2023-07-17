// Callbacks are functions that are passed as arguments to other functions and are called when the other functions have finished executing.

// Callbacks are an important part of asynchronous JavaScript, as they allow you to write code that does not block the main thread while waiting for an asynchronous operation to complete.

// Callback Hell is a term used to describe the problem of nested callbacks that can make code difficult to read and maintain.

// Callback hell can occur when you use callbacks to chain together multiple asynchronous operations. For example, the following code shows an example of callback hell:

// For example

asyncOperation1(function (result1) {
  asyncOperation2(result1, function (result2) {
    asyncOperation3(result2, function (result3) {});
  });
});

// The above example is going in a callback hell.
