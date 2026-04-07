// 1. Double Values
var arr1 = [1, 2, 3, 4];
var result1 = arr1.map(function(num) {
    return num * 2;
});
console.log(result1);

// 2. Convert to String
var arr2 = [1, 2, 3];
var result2 = arr2.map(function(num) {
    return num.toString();
});
console.log(result2);

// 3. Add Prefix
var arr3 = ["apple", "banana"];
var result3 = arr3.map(function(item) {
    return "fruit: " + item;
});
console.log(result3);



// 🔹 filter() Tasks

// 4. Even Numbers
var arr4 = [1, 2, 3, 4, 5, 6];
var even = arr4.filter(function(num) {
    return num % 2 === 0;
});
console.log(even);

// 5. Greater Than 50
var arr5 = [10, 60, 30, 80];
var greater = arr5.filter(function(num) {
    return num > 50;
});
console.log(greater);

// 6. Filter Names
var arr6 = ["Ram", "Ravi", "John"];
var names = arr6.filter(function(name) {
    return name.startsWith("R");
});
console.log(names);



// 🔹 find() Tasks

// 7. First Greater Value
var arr7 = [10, 20, 30, 40];
var found = arr7.find(function(num) {
    return num > 25;
});
console.log(found);

// 8. Find User
var users = [
    {name: "A", age: 20},
    {name: "B", age: 30},
    {name: "C", age: 25}
];

var user = users.find(function(u) {
    return u.age > 25;
});
console.log(user);



// 🔹 reduce() Tasks

// 9. Sum of Numbers
var arr9 = [1, 2, 3, 4];
var sum = arr9.reduce(function(total, num) {
    return total + num;
}, 0);
console.log(sum);

// 10. Find Maximum
var arr10 = [10, 50, 20, 80];
var max = arr10.reduce(function(a, b) {
    if (a > b) return a;
    else return b;
});
console.log(max);

// 11. Count Total
var arr11 = [5, 5, 5];
var total = arr11.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log(total);



// 🔹 some() Tasks

// 12. Check Even Exists
var arr12 = [1, 3, 5, 6];
var hasEven = arr12.some(function(num) {
    return num % 2 === 0;
});
console.log(hasEven);

// 13. Age Check
var users2 = [
    {name: "A", age: 20},
    {name: "B", age: 15},
    {name: "C", age: 25}
];

var hasMinor = users2.some(function(u) {
    return u.age < 18;
});
console.log(hasMinor);



// 🔹 every() Tasks

// 14. All Even Check
var arr14 = [2, 4, 6];
var allEven = arr14.every(function(num) {
    return num % 2 === 0;
});
console.log(allEven);

// 15. All Passed
var marks = [50, 60, 70];
var allPassed = marks.every(function(m) {
    return m > 40;
});
console.log(allPassed);



// 🔹 forEach() Tasks

// 16. Print Values
var arr16 = [10, 20, 30];
arr16.forEach(function(num) {
    console.log(num);
});

// 17. Sum Using forEach
var arr17 = [1, 2, 3, 4];
var sum2 = 0;

arr17.forEach(function(num) {
    sum2 = sum2 + num;
});

console.log(sum2);



// 🔥 Mixed Real-Time Tasks

// 18. Product Filter
var products = [
    {name: "Mobile", price: 15000},
    {name: "Mouse", price: 500},
    {name: "Laptop", price: 60000}
];

var costly = products.filter(function(p) {
    return p.price > 1000;
});
console.log(costly);

// 19. User Names
var users3 = [
    {name: "Ram", age: 20},
    {name: "John", age: 30}
];

var namesList = users3.map(function(u) {
    return u.name;
});
console.log(namesList);

// 20. Total Price
var cart = [
    {item: "A", price: 100},
    {item: "B", price: 200}
];

var totalPrice = cart.reduce(function(sum, item) {
    return sum + item.price;
}, 0);

console.log(totalPrice);