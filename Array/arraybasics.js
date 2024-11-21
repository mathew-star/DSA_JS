let arr = [1, 2, 3];

// Push (add to the end)
arr.push(4); // [1, 2, 3, 4]

// Pop (remove from the end)
arr.pop(); // [1, 2, 3]

// Unshift (add to the beginning)
arr.unshift(0); // [0, 1, 2, 3]

// Shift (remove from the beginning)
arr.shift(); // [1, 2, 3]


let arr1=[1,2,3,4]
// Slice (creates a new array)
let subArray = arr.slice(1, 4); // [2, 3, 4]

// Splice (modifies the original array)
arr.splice(2, 1); // Removes 1 element at index 2
console.log(arr); // [1, 2, 4, 5]

// Splice to insert
arr.splice(2, 0, 3); // Inserts 3 at index 2
console.log(arr); // [1, 2, 3, 4, 5]

let arr = [1, 2, 3];
let squared = arr.map(num => num * num);
console.log(squared); // [1, 4, 9]

//map
let arr = [10, 20, 30, 40, 50];
let filtered = arr.filter(num => num > 25);
console.log(filtered); // [30, 40, 50]

//filter
let arr = [5, 10, 15, 20];
let found = arr.find(num => num > 10);
console.log(found); // 15


//reduce
let foundIndex = arr.findIndex(num => num > 10);
console.log(foundIndex); // 2


//find and findindex 
let arr = [5, 10, 15, 20];
let found = arr.find(num => num > 10);
console.log(found); // 15

let foundIndex = arr.findIndex(num => num > 10);
console.log(foundIndex); // 2


//Sorting >>
let arr = [30, 10, 50, 20];
arr.sort((a, b) => a - b); // Ascending order
console.log(arr); // [10, 20, 30, 50]

// Descending order
arr.sort((a, b) => b - a);
console.log(arr); // [50, 30, 20, 10]
