const prompt = require('prompt-sync')();

// 8️⃣ Login Validation
var username = prompt("Enter username:");
var password = prompt("Enter password:");

if (username == "admin" && password == "1234") {
    console.log("8. Login successful");
} else {
    console.log("8. Login failed");
}

// 9️⃣ Grade System
var marks = parseInt(prompt("Enter marks:"));

if (marks >= 90) {
    console.log("9. Grade A");
} else if (marks >= 75) {
    console.log("9. Grade B");
} else if (marks >= 50) {
    console.log("9. Grade C");
} else {
    console.log("9. Fail");
}

// 🔟 Leap Year Check
var year = parseInt(prompt("Enter a year:"));

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("10. Leap Year");
} else {
    console.log("10. Not a Leap Year");
}

// 1️⃣1️⃣ Divisible Check
var num = parseInt(prompt("Enter a number:"));

if (num % 3 == 0 && num % 5 == 0) {
    console.log("11. Divisible by both 3 and 5");
} else if (num % 3 == 0) {
    console.log("11. Divisible only by 3");
} else if (num % 5 == 0) {
    console.log("11. Divisible only by 5");
} else {
    console.log("11. Not divisible by 3 or 5");
}

// 1️⃣2️⃣ Discount Calculation
var price = parseInt(prompt("Enter price:"));

if (price > 1000) {
    var discount = price * 0.10;
    console.log("12. Discount: " + discount);
    console.log("Final Price: " + (price - discount));
} else {
    console.log("12. No discount");
}

// 1️⃣3️⃣ Temperature Check
var temp = parseInt(prompt("Enter temperature:"));

if (temp > 30) {
    console.log("13. Hot");
} else if (temp >= 20 && temp <= 30) {
    console.log("13. Normal");
} else {
    console.log("13. Cold");
}

// 1️⃣4️⃣ Character Check
var ch = prompt("Enter a character:");

if (ch >= 'A' && ch <= 'Z') {
    console.log("14. Uppercase");
} else if (ch >= 'a' && ch <= 'z') {
    console.log("14. Lowercase");
} else {
    console.log("14. Not an alphabet");
}

// 1️⃣5️⃣ Number Range Check
var number = parseInt(prompt("Enter a number:"));

if (number >= 10 && number <= 50) {
    console.log("15. Number is between 10 and 50");
} else {
    console.log("15. Number is NOT between 10 and 50");
}