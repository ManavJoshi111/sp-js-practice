// User data
db.users.insertMany([
  {
    _id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
  },
  {
    _id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 35,
    address: {
      city: "Los Angeles",
      state: "CA",
      country: "USA",
    },
  },
  {
    _id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    age: 22,
    address: {
      city: "Chicago",
      state: "IL",
      country: "USA",
    },
  },
  {
    _id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    age: 30,
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
]);

// Retrieve users who are older than 30 years old.
db.users.find({ age: { $gt: 30 } }).pretty();

//Retrieve the names and email addresses of all users. Exclude the _id field from the result.
db.users.find({}, { _id: 0, name: 1, email: 1 });

// Retrieve all users and sort them by age in descending order.
db.users.find().sort({ age: -1 });

// Retrieve users who live in the state of "CA" (California).
db.users.find({ "address.state": "CA" }).pretty();

// Update Jane Smith's age to 36.
db.users.updateOne({ name: "Jane Smith" }, { $set: { age: 36 } });

// Remove the user with the name "Bob Johnson" from the collection.
db.users.deleteOne({ name: "Bob Johnson" });

// Calculate the average age of all users.
db.users.aggregate([
  {
    $group: {
      _id: "Average age",
      "Average Age": {
        $avg: "$age",
      },
    },
  },
]);

// Retrieve only the users who are older than 25.
db.users.aggregate([
  {
    $match: {
      age: { $gt: 25 },
    },
  },
]);

// Retrieve only the names and addresses (city and state) of all users. Exclude the "_id" field from the result.
db.users.aggregate([
  {
    $project: { name: 1, "address.city": 1, "address.state": 1, _id: 0 },
  },
]);

// Calculate the total count of users.
db.users.aggregate([
  {
    $group: {
      _id: 1,
      "Total Count": {
        $sum: 1,
      },
    },
  },
]);

// Retrieve all users and sort them by age in ascending order.
db.users.aggregate([
  {
    $sort: {
      age: 1,
    },
  },
]);

// Retrieve only the first two users sorted by age in ascending order.
db.users.aggregate([
  {
    $sort: {
      age: 1,
    },
  },
  {
    $limit: 2,
  },
]);

// Retrieve a separate document for each city mentioned in the "address" field.
db.users.aggregate([
  {
    $unwind: "$address.city",
  },
]);

// =============================================
// Sales data
db.sales.insertMany([
  {
    order_id: 1,
    customer: "John Doe",
    items: [
      { product: "Laptop", quantity: 2, price: 1200 },
      { product: "Mouse", quantity: 1, price: 20 },
    ],
  },
  {
    order_id: 2,
    customer: "Jane Smith",
    items: [
      { product: "Smartphone", quantity: 3, price: 800 },
      { product: "Charger", quantity: 1, price: 15 },
    ],
  },
  {
    order_id: 3,
    customer: "Bob Johnson",
    items: [{ product: "Tablet", quantity: 1, price: 500 }],
  },
  {
    order_id: 4,
    customer: "Alice Brown",
    items: [
      { product: "Headphones", quantity: 2, price: 100 },
      { product: "Speaker", quantity: 1, price: 50 },
    ],
  },
]);

// Retrieve a separate document for each item in the "items" array.
db.sales.aggregate([
  {
    $unwind: "$items",
  },
]);

// Calculate the total revenue for each customer.
db.sales.aggregate([
  {
    $unwind: "$items",
  },
  {
    $group: {
      _id: "$customer",
      "Total revenue": {
        $sum: "$items.price",
      },
    },
  },
]);
