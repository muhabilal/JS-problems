var values = [1, 1, 2, 2, 1, 1];
console.log("original values: " + values);
var reversedValues = [];
for (var i = values.length - 1; i >= 0; i--) {
    reversedValues.push(values[i]);
}
console.log("Reversed values:", reversedValues);