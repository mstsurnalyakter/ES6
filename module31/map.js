const numbers = [1, 2, 3, 4, 5];


// Using map to double each number in the array
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);// Output: [2, 4, 6, 8, 10]

// Converting an array of strings to uppercase:
const words = ["hello", "world", "javascript"];
const capitalizedWords = words.map(word => word.toUpperCase());
console.log(capitalizedWords);//Output: ['HELLO', 'WORLD', 'JAVASCRIPT']

//Mapping an array of objects to extract a specific property:

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
];


const usersIds = users.map(user => user.id);
console.log(usersIds);//// Output: [1, 2, 3]

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const abbreviatedDays = days.map((day,index)=> `${index + 1}.${day.slice(0,3)}`);

console.log(abbreviatedDays);

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedMatrix = matrix.map(subArray => subArray.map(num => num*2));
console.log(flattenedMatrix);