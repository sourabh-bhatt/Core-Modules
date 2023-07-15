// Default parameter values are a feature of ECMAScript 6 (ES6) that allows you to specify default values for parameters in functions. This can make your code more concise and easier to read.

function greet(name = "World") {
  console.log("Hello, " + name);
}

greet(); // Hello, World
greet("JS"); // Hello, JS

// The greet() function takes a single parameter, name. The default value for the name parameter is "World". If the name parameter is not passed to the function, the default value of "World" will be used.

// If the name parameter is passed to the function, the value of the name parameter will override the default value. For example, the second line of code in the example above calls the greet() function with the parameter "Bard". This overrides the default value of "World" and the greet() function will print "Hello, JS".
