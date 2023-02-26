// array power
const power = (arr) => {
    const result = arr.map((num) => Math.pow(num, 2));
    return result;
}
console.log(power([1, 2, 3, 4]));