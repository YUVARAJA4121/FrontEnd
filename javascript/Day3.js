// 1️⃣ Print Numbers 1 to 10
console.log("1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2️⃣ Print Numbers 10 to 1
console.log("\n10 to 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 3️⃣ Print Even Numbers (1 to 20)
console.log("\nEven Numbers (1–20):");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// 4️⃣ Print Odd Numbers (1 to 20)
console.log("\nOdd Numbers (1–20):");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) console.log(i);
}

// 5️⃣ Sum of First 10 Numbers
let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  sum1 += i;
}
console.log("\nSum of 1–10:", sum1);

// 6️⃣ Multiplication Table (5)
console.log("\nMultiplication Table of 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 7️⃣ Count Numbers (1 to 50)
let count = 0;
for (let i = 1; i <= 50; i++) {
  count++;
}
console.log("\nCount from 1–50:", count);

// 8️⃣ Sum of Even Numbers (1 to 20)
let sum2 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) sum2 += i;
}
console.log("\nSum of even numbers (1–20):", sum2);

// 9️⃣ Square of Numbers (1 to 10)
console.log("\nSquares (1–10):");
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

// 🔟 Print Stars Pattern
console.log("\nStars Pattern:");
for (let i = 1; i <= 5; i++) {
  console.log("*");
}

// ➕ Numbers divisible by 3 (1 to 30)
console.log("\nNumbers divisible by 3 (1–30):");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) console.log(i);
}