// 1️⃣ Even or Odd
let num = 7;
if (num % 2 === 0) {
    console.log("1. Even");
} else {
    console.log("1. Odd");
}

// 2️⃣ Positive / Negative / Zero
let num2 = -5;
if (num2 > 0) {
    console.log("2. Positive");
} else if (num2 < 0) {
    console.log("2. Negative");
} else {
    console.log("2. Zero");
}

// 3️⃣ Greater Number
let a = 10, b = 20;
if (a > b) {
    console.log("3. a is greater");
} else if (b > a) {
    console.log("3. b is greater");
} else {
    console.log("3. Both are equal");
}

// 4️⃣ Simple Calculator
let num1 = 10, num3 = 5;
console.log("4. Addition:", num1 + num3);
console.log("4. Subtraction:", num1 - num3);
console.log("4. Multiplication:", num1 * num3);
console.log("4. Division:", num1 / num3);

// 5️⃣ Age Eligibility
let age = 18;
if (age >= 18) {
    console.log("5. Eligible to vote");
} else {
    console.log("5. Not eligible");
}

// 6️⃣ Pass or Fail
let marks = 35;
if (marks >= 40) {
    console.log("6. Pass");
} else {
    console.log("6. Fail");
}

// 7️⃣ Largest of Three Numbers
let x = 10, y = 25, z = 15;
if (x >= y && x >= z) {
    console.log("7. x is largest");
} else if (y >= x && y >= z) {
    console.log("7. y is largest");
} else {
    console.log("7. z is largest");
}