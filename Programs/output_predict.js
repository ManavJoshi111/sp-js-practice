// Program 1
var a = 1;
let b = 2;
const c = 3;
const func = () => {
  const a = 10;
  console.log("a", a); //------------------------------------------------------ 10
  let d = 4;
  console.log("i", i); //------------------------------------------------------ undefined
  if (d > 3) {
    const e = 5;
    if (true) {
      var f = 6;
      console.log("f", f); //------------------------------------------------------ 6
    }
    let g = 7;
    console.log("g", g); //------------------------------------------------------ 7
    d = 10;
    console.log("h", h); //------------------------------------------------------ undefined
  }
  console.log("f", f); //------------------------------------------------------ 6
  console.log("g", g); //------------------------------------------------------ error
  var h = 8;
  var i = 9;
  console.log("d", d); //------------------------------------------------------ this won't be printed
};

// Program 2

console.log(null == undefined); //------------------------------------------------------ true
console.log(NaN == NaN); //------------------------------------------------------ false
console.log([1, 2, 3] == "1,2,3"); //------------------------------------------------------ true (type coercion)
console.log({} == false); // ------------------------------------------------------ false
console.log("" == false); // //------------------------------------------------------ true
if ([]) {
  console.log("Will empty array return true?"); //------------------------------------------------------ this will be printed
}
console.log("2" + 2); // ------------------------------------------------------ 22
console.log(typeof null); // ------------------------------------------------------ object
let a = 1;
const b = a++;
console.log("b => ", b); // ------------------------------------------------------ 1
const c = ++a;
console.log("c => ", c); // ------------------------------------------------------ 3
console.log("a => ", a); // ------------------------------------------------------ 3

// Program 3:

console.log(true + false); // ------------------------------------------------------ 1
console.log([] == ![]); // ------------------------------------------------------ true
console.log("helloWorld2" > "helloworld1"); // ------------------------------------------------------ false
console.log(1 / 0); // // ------------------------------------------------------ infinity
console.log(parseInt("hello")); // NaN
console.log(undefined + 1); // // ------------------------------------------------------ NaN
console.log(typeof typeof 42); // ------------------------------------------------------ string

// Program 4:
// For which of the data types, switch case will work fine?
// 1. arrays
// 2. numbers
// 3. boolean
// 4. strings
// 5. objects
// Answer: switch will work fine for numbers, boolean and string

// Which of the following string methods do affect the original string
// 1. trim - yes
// 2. slice - no
// 3. replace - yes
// 4. concat - yes
// 5. toUpperCase - yes
// 6. split - no
// 7. substring - no

// Different ways to join two strings - concat, +, template literal

// Number of ways I can convert a string to a number?
//  4 ways - parseInt, +(variable_name), using * and /, using -(-(variable_name))
