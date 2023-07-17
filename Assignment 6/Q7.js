// Inheritance is the ability of one object to inherit the properties and methods of another object. This means that a new object can be created that has all of the properties and methods of the object that it inherits from.

// In JavaScript, inheritance is implemented using the extends keyword.
// For example: the following code defines a class called Animal and a subclass called Dog:

class Animal {
  name = "Animal";
  speak() {
    return "I am an animal";
  }
}

class Dog extends Animal {
  breed = "Golden Retriever";
  speak() {
    return "Woof!";
  }
}

// The Dog class inherits the name and speak() properties and methods from the Animal class. In addition, the Dog class also has its own breed property and speak() method.

// The purpose of inheritance is to allow code to be reused. By inheriting from an existing class, you can avoid having to write code that already exists. This can make code more concise and easier to maintain.
