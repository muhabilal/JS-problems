// factorial of a number
function getFactorial(num) {
    if (num == 1) {
        return 1;
    }
    else if (num == 0 || num < 0) {
        return 0;
    }
    else {
        return num * getFactorial(num - 1);
    }
}
console.log(getFactorial(5))