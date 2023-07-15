// There are two types of destructuring: object destructuring and array destructuring.

// 1. Object destructuring allows you to extract the properties of an object into variables. For example, the following code will destructure the object person into three variables: name, age, and city:

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;

console.log(name); // John Doe
console.log(age); // 30
console.log(city); // New York

// The { name, age, city } syntax is called a destructuring pattern. The name, age, and city variables are bound to the corresponding properties of the person object.

// 2. Array destructuring allows you to extract the elements of an array into variables. For example, the following code will destructure the array [1, 2, 3] into three variables: a, b, and c:

const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// The [a, b, c] syntax is also a destructuring pattern. The a, b, and c variables are bound to the corresponding elements of the numbers array.
