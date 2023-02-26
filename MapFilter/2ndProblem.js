//If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
const input = (arr) => {
    const result = arr.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
    console.log(result);
}
input([1, 2, 3, 4, 5, -6]);