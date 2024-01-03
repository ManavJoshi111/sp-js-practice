const source = { a: 1, b: 2, c: 3 };
const target = { x: 1, y: 2, z: 3 };

const arr = [1, 2, 3, 4];
const newObj = Object.assign(target, source);
console.log(newObj);

const t1 = Object.create(target);
t1.a = 123;
console.log(t1.x);
console.log(t1);
console.log(Object.getPrototypeOf(t1));
Object.defineProperty(target, "name", {
  value: "Manav",
});
console.log(target);
console.log(target.name);
Object.defineProperties(target, {
  company: {
    value: "socialpilot",
    enumerable: true,
  },
  city: {
    value: "ahmedabad",
  },
});
console.log(target.city);
console.log("--------");
console.log(Object.entries(target));

Object.freeze(target);
target.x = 323;
console.log(target);

console.log(
  Object.fromEntries([
    [1, 2],
    [3, 4],
  ])
);
console.log(Object.getOwnPropertyDescriptor(target, "company"));

console.log(Object.getOwnPropertyDescriptors(target));
console.log(Object.getOwnPropertyNames(target));
console.log(Object.getOwnPropertySymbols(target));
console.log(Object.getPrototypeOf(target));
console.log(Object.is(target, t1));
console.log(Object.is({}, []));
console.log(Object.isFrozen(target));
console.log(Object.isSealed(target));

console.log(Object.keys(target));
