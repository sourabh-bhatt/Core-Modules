// A constructor is a special type of function that is used to create new objects.
// It is called when an object is created using the new keyword.

// The constructor is responsible for initializing the object's properties and methods.
// It can also be used to perform any other necessary initialization tasks.

// For example:-

function person(name, age) {
  this.name = name;
  this.age = age;
}
const student = new person("Sourabh", 20);
console.log(student.name);
console.log(student.age);
