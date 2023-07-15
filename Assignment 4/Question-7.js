// The map() and forEach() methods are both used to iterate over arrays in JavaScript.
// However, they have different purposes and behave in different ways.

// The map() method returns a new array with the results of calling a callback function on each element of the original array. The callback function takes two arguments: the current element of the array and the index of the element.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((x) => x * x);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// The map() method does not modify the original array. It creates a new array with the results of the callback function.

// Whereas the forEach() method iterates over the elements of an array and calls a callback function on each element. The callback function takes one argument: the current element of the array.

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((x) => console.log(x));

// The main difference between map() and forEach() is that map() returns a new array, while forEach() does not. map() is also more efficient than forEach(), as it does not have to iterate over the entire array each time the callback function is called.

// map() can be used to transform the elements of an array, while forEach() cannot
