// Javascript Program to Solve Quadratic Equation
let a = 1;
let b = -6;
let c = 9;
let root1, root2;
let discriminant = Math.pow(b, 2) - 4 * a * c;
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`Root1 ${root1} Root2 ${root2}`);

}
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`Root1 ${root1} Root2 ${root2}`);
}
else {
    console.log("Terminate")
}