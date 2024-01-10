// Inserting data [db: task, collection: cities]
db.cities.insertMany([
  {
    name: "Idar",
    location: {
      type: "Point",
      coordinates: [73.0006, 23.8395],
    },
  },
  {
    name: "Himmatnagar",
    location: {
      type: "Point",
      coordinates: [72.963, 23.5969],
    },
  },
  {
    name: "Ahmedabad",
    location: {
      type: "Point",
      coordinates: [72.5714, 23.0225],
    },
  },
  {
    name: "Gandhinagar",
    location: {
      type: "Point",
      coordinates: [72.6369, 23.2156],
    },
  },
]);

// Write a query to find the closest cities to a given location (specified by longitude and latitude).

// STEP 1:  create a 2dsphere index on the data
db.cities.createIndex({ "2dsphere": 1 });

// find the closest cities using the $near operator
/*
Here we are providing the coords of Vadodara [73.1812, 22.3072], hence it will return the result in the following order:
Ahmedabad, Gandhinagar, Himmatnagar & Idar
 */
db.cities.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [73.1812, 22.3072],
      },
    },
  },
});

/*
Here we are providing the coords of Khedbrahma [73.041389,24.028334], hence it will return the result in the following order:
Idar, Himmatnagar, Gandhinagar & Ahmedabad
*/

db.cities.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [73.041389, 24.028334],
      },
    },
  },
});
