// write a js program to get the extension of filename
const getExtension = (str) => str.slice(str.lastIndexOf('.'))
console.log(getExtension('first.js'));
console.log(getExtension('second.file.html'));