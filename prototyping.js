const Person = function (name, city) {
  this.name = name;
  this.city = city;
};

Person.prototype.printInfo = function () {
  console.log("Name: ", this.name, " City: ", this.city);
};
const p1 = new Person("Manav", "Idar");
console.log("p1: ", p1);
p1.printInfo();
console.log("Properties of p1: ", Object.getOwnPropertyNames(p1));
console.log(
  "Descriptor of printInfo: ",
  Object.getOwnPropertyDescriptor(Person.prototype, "printInfo")
);
console.log(p1 instanceof Person);
console.log("prototype of p1: ", Object.getPrototypeOf(p1));
console.log(p1.__proto__ === Person.prototype); // true

// p1.__proto__=Person
// p1.__proto__.__proto__=Object
// p1.__proto__.__proto__.__proto__=null
