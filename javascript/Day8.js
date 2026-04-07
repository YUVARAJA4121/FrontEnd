// 1. Arrow Function
function add(a, b) {
    return a + b;
}

// Arrow function
var addArrow = (a, b) => {
    return a + b;
};

console.log(addArrow(5, 10));


// 2. let & const
let x = 10;
const y = 20;

x = 15; // allowed
// y = 25; // ❌ not allowed (const cannot be changed)

console.log(x);
console.log(y);


// 3. Template Literals
var name = "Rere";
var age = 25;

console.log(`Hello ${name}, your age is ${age}`);


// 4. Default Parameter
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Rere");
greet();


// 5. Ternary Operator
var num = 6;

var result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);


// 6. Array Destructuring
var arr = [10, 20, 30];

var a = arr[0];
var b = arr[1];

console.log(a, b);


// 7. Object Destructuring
var person = { name: "Rere", age: 25 };

var pname = person.name;
var page = person.age;

console.log(pname, page);


// 8. Spread Operator (Array)
var arr1 = [1, 2];
var arr2 = [3, 4];

var merged = [...arr1, ...arr2];
console.log(merged);


// 9. Spread Operator (Object)
var obj = { name: "Rere", age: 25 };

var newObj = { ...obj, city: "Chennai" };
console.log(newObj);


// 10. Rest Operator (Function)
function sumAll(...numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4));


// 11. Rest with Destructuring
var arr3 = [1, 2, 3, 4];

var first = arr3[0];
var rest = arr3.slice(1);

console.log(first);
console.log(rest);


// 12. Optional Chaining
var user = {};

console.log(user?.name);


// 13. Nullish Coalescing
var value = null;

var result2 = value ?? "Default Value";
console.log(result2);


// 14. Short Property
var name2 = "Rere";
var age2 = 25;

var obj2 = { name2, age2 };

console.log(obj2);