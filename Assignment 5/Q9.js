// The fetch() method is a modern way to make HTTP requests in JavaScript.
// It is a promise-based API, which means that it returns a promise that resolves to the response object. The response object contains the status code, headers, and body of the response.

// The fetch() method takes a URL as its argument. It can also take an optional options object that specifies the request method, headers, and body.

// For example

fetch("https://api.example.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
  })
  .then((data) => {
    // Process the received data
    console.log("Received data:", data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error:", error);
  });
