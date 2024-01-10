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
