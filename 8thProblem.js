const num1 = 10;
const num2 = 10;
const sum = num1 + num2;
console.log("The sum is:", sum);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        const num3 = parseInt(num1);
        const num4 = parseInt(num2);

        if (!isNaN(num3) && !isNaN(num4)) {
            const sum1 = num3 + num4;
            console.log('The sum is:', sum1);
        } else {
            console.log('Please enter valid numbers.');
        }

        rl.close();
    });
});