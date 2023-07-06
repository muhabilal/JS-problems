var values = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'e', 'g'];
var newValues = values.map((vale) => { return vale });
console.log(newValues);

var remove = [...new Set(newValues)]
console.log(remove);

//without using function
var uniqueValues = [];
for (var i = 0; i < values.length; i++) {
    if (!uniqueValues.includes(values[i])) {
        uniqueValues.push(values[i]);

    }
}
console.log("unique", uniqueValues)