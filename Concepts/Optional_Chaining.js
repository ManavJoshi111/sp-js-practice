// with optional chaining
const Person = function (name, mname, sname) {
  this.name = name;
  this.middleName = mname;
  this.surName = sname;

  this.printFullName = function () {
    console.log(`FullName: ${this.name} ${this.middleName} ${this.surName}`);
  };
};

const p1 = new Person("Manav", "Harshadkumar", "Joshi");
p1?.printFullName(); // this will print the full name

// without optional chainging
console.log(p1.somethingwhichisnotdefined?.somerandomfunction()); // this will not throw an error bcz of optional chaining instead this will give undefined
console.log(p2?.printFullName()); // this will throw an error bcz we can't use optional chainign on a whole undfined or null thing
