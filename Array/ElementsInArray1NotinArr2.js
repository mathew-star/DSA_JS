let arr1=[1,2,3,4,5,6,7];
let arr2=[4,5,6,7,8,9,10];

const array2_set= Set(arr2);
const result=arr1.filter(x=>!array2_set.has(x));
console.log(result);

