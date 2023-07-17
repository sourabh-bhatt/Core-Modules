// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. Promises can be chained together, which makes it easy to write code that handles multiple asynchronous operations.

// Here are three methods of promise:

// then() method: The then() method is used to handle the successful completion of a promise. It takes two arguments: a callback function that is called when the promise is fulfilled, and a callback function that is called when the promise is rejected.

// catch() method: The catch() method is used to handle the failure of a promise. It takes a single callback function that is called when the promise is rejected.

// finally() method: The finally() method is used to execute a callback function regardless of whether the promise is fulfilled or rejected.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("The promise was fulfilled!");
//   }, 1000);
// });

// promise
//   .then((result) => {
//     console.log(result); // Output: The promise was fulfilled!
//   })
//   .catch((error) => {
//     console.log(error); // Error: The promise was rejected!
//   });

// Promise using finally:

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The promise was fulfilled!");
  }, 1000);
});

promise
  .then((result) => {
    console.log(result); // Output: The promise was fulfilled!
  })
  .finally(() => {
    console.log("This code will always run!");
  });
