// 1.
let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// Find the frequency of the most occurred element in the array
// input : arr1
// output : a '5 times'
const findFreq = (arr, freqMap) => {
  for (let e of arr) {
    freqMap[e] ? freqMap[e]++ : (freqMap[e] = 1);
  }
};
let freq = 0,
  mostoccurred;
let freqMap = {};
findFreq(arr1, freqMap);
for (let i in freqMap) {
  if (freqMap[i] > freq) {
    freq = freqMap[i];
    mostoccurred = i;
  }
}
console.log("Answer of 1");
console.log(mostoccurred, freqMap[mostoccurred], "times");

let arr2 = [
  [1, 5],
  [[3, 4, 6], [8]],
  [0, 7],
];
const findLargestElement = (arr, largest) => {
  for (let nest of arr) {
    if (Array.isArray(nest)) {
      largest = Math.max(largest, findLargestElement(nest, largest));
    } else {
      if (nest > largest) {
        largest = nest;
      }
    }
  }
  return largest;
};
console.log("Answer of 2: ", findLargestElement(arr2, -Infinity));

// 3. Given two strings, return true if they are anagrams of one another (ignore case)
// example: "pools" is an anagram of "loops", "Mary" is an anagram of "Army"
let input1 = "Hello";
let input2 = "Holla";
// output: false
const areAnagrams = (i1, i2) => {
  return (
    i1.toLowerCase().split("").sort().join() ===
    i2.toLowerCase().split("").sort().join()
  );
};
console.log("Answer of 3 (Hello, Holla):", areAnagrams(input1, input2));
console.log("Answer of 3 (Mary, Army):", areAnagrams("Mary", "Army"));

// 4. Given an array containing numbers from 1 to N, with one number missing, find the missing number.
// input: [1,2,4,5]
// output: 3
const findMissingNumber = (arr) => {
  let n = arr.length;
  const shouldBeSum = ((n + 2) * (n + 1)) / 2;
  const sum = arr.reduce((acc, curr) => curr + acc, 0);
  return shouldBeSum - sum;
};
console.log("Answer of 4: ", findMissingNumber([1, 2, 3, 4, 5, 7, 8]));

// 5. Will the below code return any error? If yes, identify the error.
function fetchData(callback) {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
}
fetchData(function (error, data) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Data:", data);
  }
});
console.log(
  "Answer of 5: \nIf the there is any kind of error is thrown by the fetchData function, the catch block will catch the error. Here, the url 'https://api.example.com/data' is not a real hence it throws an error which will be handled in the callback function passed in the fetchData"
);
