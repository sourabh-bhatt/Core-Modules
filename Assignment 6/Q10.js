// The super keyword in JavaScript is used to access the properties and methods of the parent class. It is a special keyword that is only available in classes that inherit from other classes.

// The super keyword can be used in two ways:

// To call the constructor of the parent class.

// For example

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name); // Call the parent class's constructor
//     this.age = age;
//   }
// }

// const child = new Child("John", 10);
// console.log(child.name);
// console.log(child.age);

// To access the properties and methods of the parent class.

// For example

class Parent {
  sayHello() {
    console.log("Hello from Parent class");
  }
}

class Child extends Parent {
  sayHello() {
    super.sayHello();
    console.log("Hello from Child class");
  }
}

const child = new Child();
child.sayHello();
