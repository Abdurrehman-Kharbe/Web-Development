// 1. Object Creation & Update
console.log("----- 1. Object Creation & Update -----");
let citizen = {
  name: "Alex",
  age: 22,
  occupation: "Developer",
};
console.log(`Updated age is: ${citizen.age}`);
citizen.age += 3;
console.log(`Age after +3 is: ${citizen.age}`);
citizen.city = "Mumbai";
for (let key in citizen) {
  console.log(`${key}: ${citizen[key]}`);
}
console.log("\n");

// 2. Function Conversion
console.log("----- 2. Function Conversion -----");
function isOlder(age1, age2) {
  return age1 > age2;
}
const olderResult = isOlder(30, 25);
console.log(`Is first person older? ${olderResult}`);
console.log("\n");

// 3. Arrow Function – String Empty Check
console.log("----- 3. Arrow Function – String Empty Check -----");
const isEmptyString = (str) => str.length === 0;
console.log(`Is "Hello" empty? ${isEmptyString("Hello")}`);
console.log(`Is "" empty? ${isEmptyString("")}`);
console.log("\n");

// 4. String to Object
console.log("----- 4. String to Object -----");
const stringToObject = (str) => ({
  length: str.length,
  uppercase: str.toUpperCase(),
});

console.log(stringToObject("javascript"));
console.log("\n");

// 5. Number Analysis
console.log("----- 5. Number Analysis -----");
const analyzeNumber = (num) => ({
  isPositive: num > 0,
  isNegative: num < 0,
});

console.log(analyzeNumber(10));
console.log(analyzeNumber(-7));
console.log("\n");

// 6. Rest Parameter Practice
console.log("----- 6. Rest Parameter Practice -----");
const logValues = (first, second, ...rest) => {
  console.log(`First value: ${first}`);
  console.log(`Second value: ${second}`);
  console.log(`Remaining values:`, rest);
};

logValues(1, 2, 3, 4, 5);
console.log("\n");

// 7. Spread Operator – Arrays (Keep Order)
console.log("----- 7. Spread Operator – Arrays (Keep Order) -----");
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log("\n");

// 8. Spread Operator – Arrays (Order Change)
console.log("----- 8. Spread Operator – Arrays (Order Change) -----");
const mergeArraysReverse = (arr1, arr2) => [...arr2, ...arr1];

console.log(mergeArraysReverse([1, 2, 3], [4, 5, 6]));
console.log("\n");

// 9. Spread Operator – Objects (No Mutation)
console.log("----- 9. Spread Operator – Objects (No Mutation) -----");
const addProperty = (obj, key, value) => ({
  ...obj,
  [key]: value,
});

const person = { name: "Sam", age: 25 };
const updatedPerson = addProperty(person, "city", "Delhi");

console.log("Original object:", person);
console.log("New object:", updatedPerson);
console.log("\n");

// 10. Object Destructuring (Real-World)
console.log("----- 10. Object Destructuring (Real-World) -----");
const describeFruit = ({ name, color, available }) => {
  console.log(`Fruit: ${name}, Color: ${color}, Available: ${available}`);
};

describeFruit({
  name: "Apple",
  color: "Red",
  available: true,
});
console.log("\n");
