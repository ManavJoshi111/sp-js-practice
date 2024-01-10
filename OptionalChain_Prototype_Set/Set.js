const unique = new Set([1, 2, 3, 3, 4, 4]);
unique.add({ name: "Manav" });
console.log("Unique: ", unique);
console.log("Has 4:", unique.has(4));
console.log("Delete 4: ", unique.delete(4));
console.log("Delete 0: ", unique.delete(0));
console.log("Clear the set: ", unique.clear());
console.log("Unique:", unique);
