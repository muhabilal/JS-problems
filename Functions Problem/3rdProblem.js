//Write a function to find the area and perimeter of a Circle
function find(rad) {
    return `perimeter${2 * Math.PI * rad} , area${Math.PI * rad * rad}`
}
console.log(find(23));