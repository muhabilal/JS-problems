//Write a function to reverse a number
function reverse(num) {
    var reverse = 0;
    while (num != 0) {
        reverse = reverse * 10;
        reverse = reverse + num % 10;
        num = Math.trunc(num / 10);
        // return num;
    }
    return reverse;
}
console.log(reverse(123));