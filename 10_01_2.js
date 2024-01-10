// Inserting data [db: task, collection: items]
db.items.insertMany([
  {
    orderDate: ISODate("2023-01-15T12:30:00Z"),
    items: [
      { product: "Laptop", quantity: 2, price: 1000 },
      { product: "Mouse", quantity: 1, price: 20 },
      { product: "Keyboard", quantity: 1, price: 100 },
      { product: "MousePad", quantity: 1, price: 10 },
      { product: "Ipad", quantity: 2, price: 700 },
      { product: "Dot", quantity: 1, price: 200 },
      { product: "Monitor", quantity: 1, price: 850 },
      { product: "Speakers", quantity: 2, price: 90 },
    ],
  },
  {
    orderDate: ISODate("2023-02-10T14:45:00Z"),
    items: [
      { product: "Smartphone", quantity: 3, price: 800 },
      { product: "Charger", quantity: 1, price: 15 },
      { product: "Tablet", quantity: 1, price: 500 },
      { product: "Headphones", quantity: 2, price: 100 },
      { product: "Speaker", quantity: 1, price: 50 },
    ],
  },
  {
    orderDate: ISODate("2023-03-05T09:15:00Z"),
    items: [
      { product: "Camera", quantity: 1, price: 1200 },
      { product: "Lens", quantity: 2, price: 300 },
      { product: "Tripod", quantity: 1, price: 50 },
    ],
  },
  {
    orderDate: ISODate("2023-04-20T16:30:00Z"),
    items: [
      { product: "Bookshelf", quantity: 1, price: 150 },
      { product: "Books", quantity: 5, price: 30 },
      { product: "Desk", quantity: 1, price: 200 },
      { product: "Chair", quantity: 2, price: 80 },
    ],
  },
  {
    orderDate: ISODate("2023-05-12T11:00:00Z"),
    items: [
      { product: "Gaming Console", quantity: 1, price: 400 },
      { product: "Controller", quantity: 2, price: 60 },
      { product: "Games", quantity: 3, price: 50 },
    ],
  },
]);

// Write a query to find the total revenue generated on a specific date, considering the quantity and price of each item.
db.items.aggregate([
  {
    $unwind: "$items",
  },
  {
    $group: {
      _id: "$orderDate",
      "Revenue Generated": {
        $sum: {
          $multiply: ["$items.quantity", "$items.price"],
        },
      },
    },
  },
]);
