//Flatten array of arrays using JavaScript reduce


function flattenArr(arr) {
    const result = arr.reduce((sum, num) => sum.concat(num));
    return result;
}
console.log(flattenArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));