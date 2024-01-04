// Custom function to create title of  topics
const createTitle = (topic) => {
  console.log(`-------------${topic.toUpperCase()}-------------`);
};

// Map - Celsius to Fahrenheit
createTitle("Map");
const celsiusTemperatures = [0, 25, 100, -5, 10];

const fahrenheitTemperatures = celsiusTemperatures.map((temp) => {
  return temp * (9 / 5) + 32;
});
console.log("Fahrenheit: ", fahrenheitTemperatures);

// forEach - custom greeting for user
createTitle("ForEach");
const users = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "David" },
];

users.forEach((user) => console.log(`Hey, ${user.name}!`));

// Promises
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

// Callbacks
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

// Destructuring
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

// Rest operator
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

// Default parameter of function
createTitle("Default Params");

const displayUserProfile = (name, age = 25, country = "India") => {
  console.log("Name: ", name, " Age: ", age, " Country: ", country);
};
displayUserProfile("John", 30, "USA");
displayUserProfile("Alice");

// setInterval
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
