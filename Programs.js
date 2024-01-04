// // Custom function to create title of  topics
const createTitle = (topic) => {
  console.log(`-------------${topic.toUpperCase()}-------------`);
};

// // Map - Celsius to Fahrenheit
createTitle("Map");
const celsiusTemperatures = [0, 25, 100, -5, 10];

const fahrenheitTemperatures = celsiusTemperatures.map((temp) => {
  return temp * (9 / 5) + 32;
});
console.log("Fahrenheit: ", fahrenheitTemperatures);

// // forEach - custom greeting for user
createTitle("ForEach");
const users = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "David" },
];

users.forEach((user) => console.log(`Hey, ${user.name}!`));

// // Promises
createTitle("Promises");
const fetchPosts = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    console.log("Promises data: ", jsonData);
  } catch (err) {
    console.log("An error occurred!", err);
  }
};
fetchPosts();

// // Callbacks
createTitle("Callbacks");

const sendMessage = (userId, message, callback) => {
  setTimeout(() => {
    console.log("Sending message to: ", userId);
    console.log("Message: ", message);
    callback("Success", null);
  }, 1);
};

sendMessage("123", "Sample Message", (msg, err) => {
  if (msg) {
    return console.log("Msg: ", msg);
  }
  console.log("Error: ", err);
});

// // Destructuring
createTitle("Destructuring");
const task = {
  id: 1,
  title: "Complete project proposal",
  description: "Write and submit the project proposal by Friday.",
  status: "In Progress",
  priority: "High",
};

const displayTaskInfo = ((task) => {
  const { title, status } = task;
  console.log("Title: ", title, " status: ", status);
})(task);

// // Rest operator
createTitle("Rest Operator");
const basePrice = 100;
const discount1 = 10;
const discount2 = 5;

const calculateTotalPrice = (base, ...discounts) => {
  const totalDiscount = discounts.reduce((acc, curr) => acc + curr);
  return base - totalDiscount;
};
const totalPrice = calculateTotalPrice(basePrice, discount1, discount2);
console.log("Total Price: ", totalPrice);

// // Default parameter of function
createTitle("Default Params");

const displayUserProfile = (name, age = 25, country = "India") => {
  console.log("Name: ", name, " Age: ", age, " Country: ", country);
};
displayUserProfile("John", 30, "USA");
displayUserProfile("Alice");

// // setInterval
const startTimer = (count) => {
  let timeRemaining = setInterval(() => {
    if (count == 0) {
      console.log("Time out!");
      clearInterval(timeRemaining);
    } else {
      console.log(`Time remaining: ${count} Second${count > 0 ? "s" : ""}`);
    }
    count--;
  }, 1000);
};
startTimer(5);

// // Extra program - find frequency of letters

// const wordArray = [
//   "apple",
//   "Banana",
//   "Cherry",
//   "date",
//   "Grape",
//   "Kiwi",
//   "Lemon",
//   "orange",
//   "Pear",
//   "watermelon",
// ];

// const frequencies = wordArray.reduce((freq, letter) => {
//   for (let c of letter) {
//     if (freq[c.toLowerCase()]) {
//       freq[c.toLowerCase()]++;
//     } else {
//       freq[c.toLowerCase()] = 1;
//     }
//   }
//   return freq;
// }, {});
// console.log("Frequencies: ", frequencies);

// PDF Programs
createTitle("Program 1");
// Write a program to compare two objects and return true or false.

const obj1 = { hair: "long", beard: "true" };
const obj2 = { hair: "long", beard: "false" };
const obj3 = { beard: "false", hair: "long" };
const obj4 = { beard: "true", hair: "none" };

const compareObjects = (o1, o2) => {
  const k1 = Object.keys(o1).sort();
  const k2 = Object.keys(o2).sort();
  if (k1.length !== k2.length) {
    return false;
  }
  for (let ind in k1) {
    if (k1[ind] !== k2[ind]) {
      console.log("first: ", k1[ind]);
      console.log("sec: ", k2[ind]);
      return false;
    }
  }
  for (let key of k1) {
    if (o1[key] !== o2[key]) {
      return false;
    }
  }
  return true;
};
console.log("Result of 1");
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj3, obj2));
console.log(compareObjects(obj3, obj4));

createTitle("Program 2");
// Write a program to convert string to a 2D array of objects. The first row of the string is used as the title.
const inputString = "col1,col2\na,b\nc,d";
const data = inputString.split("\n");
console.log(data);
const keys2 = data[0].split(",");
let arr = [];
for (let i = 1; i < data.length; i++) {
  const values = data[i].split(",");
  let obj = {};
  for (let i in values) {
    obj[[keys2[i]]] = values[i];
  }
  arr.push(obj);
}
console.log("Result of 2: ", arr);

createTitle("Program 3");
// // Write a program to convert an array of objects to a string. That contains dynamic columns and de​limiter​ specified
const inputString1 = [
  {
    col1: "a",
    col2: "b",
  },
  {
    col1: "c",
    col2: "d",
  },
];

let result = Object.keys(inputString1[0]).join(",");

for (let obj of inputString1) {
  const values = Object.values(obj).join(",");
  result += "\n" + values;
}
console.log("Result of 3: ", result);

createTitle("Program 4 is remainging");
// Write a program to combine the numbers of a given array into an array containing all combinations. (​reduce​)

createTitle("Program 5");
// // Write a program to replace the names of multiple object keys.
const obj = { name: "JJ", job: "Programmer", age: 22 };
const renameKey = { name: "firstName", job: "Role" };
const newObj = {};
for ([key, value] of Object.entries(obj)) {
  if (renameKey[key] !== undefined) {
    newObj[renameKey[key]] = obj[key];
  } else {
    newObj[key] = obj[key];
  }
}
console.log("Result of 5: ", newObj);

createTitle("Program 6");
// // Write a program to filter out the non-unique values in an array.
const input = [1, 1, 2, 2, 3, 4, 5];
const freq = {};
for (let i of input) {
  if (freq[i]) {
    freq[i]++;
  } else {
    freq[i] = 1;
  }
}
const resultArray = [];
for (let e of input) {
  if (freq[e] === 1) {
    resultArray.push(e);
  }
}
console.log("Result of 6: ", resultArray);

createTitle("Program 7");
// // Write a program that will return true if the string is y/yes or false if the string is n/no
const input7 = "y";

console.log("Result of 7:");
if (input7.search(/^(yes)|(y)/) === 0) {
  console.log(true);
} else if (input7.search(/^(no)|(n)/) === 0) {
  console.log(false);
} else {
  console.log("None of them");
}

createTitle("Program 8 remaining");
// // Write a program to get a sorted array of objects ordered by properties and orders.

createTitle("Program 9");
// write a program to remove the key-value pairs from the given object
const obj9 = { a: 1, b: 2, c: 3 };
const remove = ["a"];

const keys9 = Object.keys(obj9);
for (let key of keys9) {
  if (remove.includes(key)) {
    delete obj9[key];
  }
}
console.log("Result of 9:", obj9);

createTitle("Program 10");
// // Write a program to convert time 24 hours to 12 hours.
const i101 = [0, 12, 23, 17];

console.log("Result of 10");
for (let e of i101) {
  const postfix = e >= 12 ? "PM" : "AM";
  const hours12 = e % 12 === 0 ? 12 : e % 12;
  console.log(hours12, postfix);
}
