// The this keyword in JavaScript is a special keyword that refers to the current context of execution.
// It refers to the object that is currently executing the code.
// It is used in methods to refer to the object that the method belongs to.

const obj = {
  name: "World",
  sayHello: function () {
    console.log("Hello, " + this.name);
  },
};

obj.sayHello(); // Output: Hello, World
