// Write a js program to check two
// numbers and return true if one of the number is true or i
// f the sum of two number is 100

const isEquall = (a, b) =>
    a === 100 || b === 100 || (a + b) === 100;

console.log(isEquall(100, 0));
console.log(isEquall(0, 10));
console.log(isEquall(0, 100));
console.log(isEquall(20, 80));
console.log(isEquall(50, 50));


function check(c, d) {
    if (c === 100 || d === 100)
        return true;
    else return false;
}

console.log(check(10, 0));
