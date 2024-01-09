function Outer() {
  this.outerVar = "I am from outer";

  this.innerFunction = function () {
    console.log(this.outerVar);

    const arrowFunction = () => {
      console.log(this.outerVar);
    };

    arrowFunction();
  };
}

const outerInstance = new Outer();
outerInstance.innerFunction();

const regularFunction = outerInstance.innerFunction;
regularFunction();
