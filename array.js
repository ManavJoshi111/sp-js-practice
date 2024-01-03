const arr = [1, 2, 3, 4, 55, 66, 77, 88, 99, 100, 1];
//
arr.forEach((val) => {
  console.log(val);
});

console.log(arr.indexOf(100));
console.log(arr.lastIndexOf(1));
console.log(arr.includes(23));
console.log(arr.includes(100));
console.log(arr.find((e) => e > 18));
console.log(arr.findIndex((e) => e > 18));

const g18 = arr.filter((e) => e > 18);
console.log(g18);

const m2 = arr.map((e) => e * 2);
console.log(m2);

const sorted = arr.sort((a, b) => a - b);
console.log(sorted);

console.log(arr.reverse());

console.log(arr.join(" "));

const sumArr = arr.reduce((acc, curr) => acc + curr);
console.log("sum: ", sumArr);

const reverseString = arr.reduceRight((acc, curr) => acc + "" + curr);
console.log(reverseString);

console.log(arr.every((ele) => ele > 0));
console.log(arr.some((ele) => ele > 18));

const a = [1, 2, 3, 4, 55, 66, 77, 88, 99, 100, 1];
const reversedStringarr = a.reduceRight((acc, curr) => {
  return acc + "" + curr;
}, "");
console.log("reverses: ", reversedStringarr);
