// 1. Simple Callback Execution
function process(callback) {
    callback();
}

function sayHello() {
    console.log("Callback executed");
}

process(sayHello);


// 2. Add Using Callback
function addNumbers(a, b, callback) {
    return callback(a, b);
}

function sum(x, y) {
    return x + y;
}

var result = addNumbers(5, 10, sum);
console.log(result);


// 3. Multiply Using Callback
function multiplyNumbers(a, b, callback) {
    callback(a, b);
}

function multiply(x, y) {
    console.log(x * y);
}

multiplyNumbers(4, 5, multiply);


// 4. Even Check Callback
function checkNumber(num, callback) {
    callback(num);
}

function evenOrOdd(n) {
    if (n % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkNumber(6, evenOrOdd);


// 5. Greeting Callback
function greet(name, callback) {
    callback(name);
}

function welcome(n) {
    console.log("Welcome " + n);
}

greet("John", welcome);


// 6. Array Callback (forEach)
var arr = [10, 20, 30];

arr.forEach(function(value) {
    console.log(value);
});


// 7. Filter Callback
var numbers = [1, 2, 3, 4, 5];

var evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);



// 🔐 CLOSURE TASKS

// 8. Simple Counter
function counter() {
    var count = 0;

    return function() {
        count = count + 1;
        console.log(count);
    };
}

var c = counter();
c();
c();


// 9. Private Variable
function secretHolder() {
    var secret = 100;

    return function() {
        console.log(secret);
    };
}

var show = secretHolder();
show();


// 10. Add Closure
function add(a) {
    return function(b) {
        return a + b;
    };
}

console.log(add(5)(10));


// 11. Multiply Closure
function multiplyClosure(a) {
    return function(b) {
        return a * b;
    };
}

console.log(multiplyClosure(5)(10));


// 12. Message Closure
function messageStore(msg) {
    return function() {
        console.log(msg);
    };
}

var message = messageStore("Hello World");
message();


// 13. User Login Closure
function userLogin(username) {
    return function() {
        console.log("User " + username + " logged in");
    };
}

var login = userLogin("Alice");
login();


// 14. Counter with Reset
function createCounter() {
    var count = 0;

    return {
        increment: function() {
            count = count + 1;
            console.log(count);
        },
        reset: function() {
            count = 0;
            console.log("Counter reset");
        }
    };
}

var counterObj = createCounter();
counterObj.increment();
counterObj.increment();
counterObj.reset();


// 15. Data Storage Closure
function dataStorage() {
    var data = [];

    return function(value) {
        data.push(value);
        console.log(data);
    };
}

var store = dataStorage();
store(10);
store(20);
store(30);