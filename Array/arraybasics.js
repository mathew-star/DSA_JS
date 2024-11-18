let arr = [1, 2, 3];

// Push (add to the end)
arr.push(4); // [1, 2, 3, 4]

// Pop (remove from the end)
arr.pop(); // [1, 2, 3]

// Unshift (add to the beginning)
arr.unshift(0); // [0, 1, 2, 3]

// Shift (remove from the beginning)
arr.shift(); // [1, 2, 3]



// Slice (creates a new array)
let subArray = arr.slice(1, 4); // [2, 3, 4]

// Splice (modifies the original array)
arr.splice(2, 1); // Removes 1 element at index 2
console.log(arr); // [1, 2, 4, 5]

// Splice to insert
arr.splice(2, 0, 3); // Inserts 3 at index 2
console.log(arr); // [1, 2, 3, 4, 5]
