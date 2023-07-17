// Polymorphism is the ability of an object to take on different forms. This means that an object can be used in different ways, depending on the context in which it is used.

// In JavaScript, polymorphism can be achieved through method overloading and method overriding.

// Method overloading is when a method has the same name but different signatures. This means that the method can be called with different arguments, and it will behave differently depending on the arguments that are passed to it.

// Method overriding is when a method in a subclass has the same name and signature as a method in its parent class. This means that the method in the subclass will override the method in the parent class.

// For example

class Animal {
  speak() {
    return "I am an animal";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

var animal = new Animal();
var dog = new Dog();
var cat = new Cat();

console.log(animal.speak()); // "I am an animal"
console.log(dog.speak()); // "Woof!"
console.log(cat.speak()); // "Meow!"

// The purpose of polymorphism is to allow objects to be used in different ways, depending on the context in which they are used. This can make code more flexible and reusable.
