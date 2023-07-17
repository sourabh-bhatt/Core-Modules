// The this keyword in JavaScript is a special keyword that refers to the current context of execution.
// It refers to the object that is currently executing the code.
// It is used in methods to refer to the object that the method belongs to.-

const obj = {
  name: "World",
  sayHello: function () {
    console.log("Hello, " + this.name);
  },
};

obj.sayHello(); // Output: Hello, World

// The usage of the "this" keyword allows for more flexible and reusable code by providing a way to access and manipulate object properties within the context of the current object. It plays a crucial role in object-oriented programming in JavaScript.
