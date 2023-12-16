var today = new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"]
console.log("Today is : ", dayList[day]);
var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var prepand = (hour >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;
console.log("Current time : ", hour, prepand, min, sec);