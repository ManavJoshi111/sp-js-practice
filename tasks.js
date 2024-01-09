1;
let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};
// Using a for loop, console.log all of the numbers in the primeNumbers array.
for (let number of nestedData.innerData.numberData.primeNumbers) {
  console.log("number: ", number);
}
// Using a for loop, console.log all of the even Fibonnaci numbers.
for (let number of nestedData.innerData.numberData.fibonnaci) {
  if (number % 2 === 0) {
    console.log("Even fibonacci number: ", number);
  }
}
// Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1]);
// Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack("chocolate");
console.log("Snacks array: ", nestedData.innerData.snacks);
// Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
console.log("The keyword this will be referring to the innerdata object");

2;
let nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: "Hola",
      },
      french: {
        hello: "Bonjour",
      },
    },
  },
};
// Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
nestedObject.addSpeaker = function (speaker) {
  this.speakers.push({ name: speaker });
};
nestedObject.addSpeaker("Manav");
console.log("Speakers: ", nestedObject.speakers);

// Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
nestedObject.addLanguage = function (language, helloObject) {
  this.data.languages[language] = helloObject;
};
nestedObject.addLanguage("Hindi", { hello: "Namaste" });
console.log("Languages: ", nestedObject.data.languages);

// Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
nestedObject.addCountry = function (country) {
  this.data.continents.europe.countries[country.name] = {
    capital: country.capital,
    population: country.population,
  };
};
nestedObject.addCountry({
  name: "UK",
  capital: "London",
  population: 67961439,
});
console.log("Countries: ", nestedObject.data.continents.europe);

// 09-01-2024
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

console.log("1, USING MAP");
const map = new Map();
arr1.forEach((ele) => {
  map.set(ele, map[ele] === undefined ? 1 : map[ele]++);
});
mostoccurred = undefined;
let freqOfMostOccurred = 0;
map.forEach((ele, freq) => {
  console.log("ele: ", ele);
  console.log("freq: ", freq);
});

// 2. Write a JavaScript program to find the largest element in a nested array.
// input : [[1,5],[[3,4,6],[8]],[0,7]]
// output : 8

// 3. Given two strings, return true if they are anagrams of one another (ignore case)
// example: "pools" is an anagram of "loops", "Mary" is an anagram of "Army"
// input1: "Hello"
// input2: "Holla"
// output: false

// 4. Given an array containing numbers from 1 to N, with one number missing, find the missing number.
// input: [1,2,4,5]
// output: 3

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
