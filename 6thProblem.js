// write a program to  Calculate the sum of numbers within an array
const array = [1, 2, 3, 4, 5];
// let sum = 0;
// const result = array.map((x) =>
//     sum = sum + x);
// console.log(result)

//
const result = array.reduce((sum, num) => sum += num);
console.log(result)