//Write a program he function should include the input in kilometers and return the answer in miles.
function converter(meter) {
    let miles = 0.62137119;
    let result = meter * miles
    return `${result}miles`;
}
console.log(converter(3));