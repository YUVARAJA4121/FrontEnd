// 1. Add Element
var arr1 = [10, 20, 30];
arr1.push(40);
console.log(arr1);

// 2. Remove Last Element
var arr2 = [10, 20, 30, 40];
var removed = arr2.pop();
console.log(removed);

// 3. Add at Beginning
var arr3 = [20, 30];
arr3.unshift(10);
console.log(arr3);

// 4. Remove First Element
var arr4 = [10, 20, 30];
arr4.shift();
console.log(arr4);

// 5. Double Values
var arr5 = [1, 2, 3, 4];
var doubled = arr5.map(function(num) {
    return num * 2;
});
console.log(doubled);

// 6. Filter Even Numbers
var arr6 = [1, 2, 3, 4, 5, 6];
var even = arr6.filter(function(num) {
    return num % 2 === 0;
});
console.log(even);

// 7. Find First Greater Value
var arr7 = [5, 10, 15, 20];
var found = arr7.find(function(num) {
    return num > 10;
});
console.log(found);

// 8. Check Value Exists
var arr8 = [10, 20, 30];
var exists = arr8.includes(20);
console.log(exists);



// 📝 ARRAY LOOPING TASKS

// 9. Print All Elements
var arr9 = [10, 20, 30, 40];
for (var i = 0; i < arr9.length; i++) {
    console.log(arr9[i]);
}

// 10. Sum of Array
var arr10 = [10, 20, 30];
var sum = 0;
for (var i = 0; i < arr10.length; i++) {
    sum = sum + arr10[i];
}
console.log(sum);

// 11. Count Even Numbers
var arr11 = [1, 2, 3, 4, 5, 6];
var countEven = 0;
for (var i = 0; i < arr11.length; i++) {
    if (arr11[i] % 2 === 0) {
        countEven = countEven + 1;
    }
}
console.log(countEven);

// 12. Find Largest Number
var arr12 = [10, 50, 20, 80];
var largest = arr12[0];
for (var i = 1; i < arr12.length; i++) {
    if (arr12[i] > largest) {
        largest = arr12[i];
    }
}
console.log(largest);

// 13. Reverse Array Using Loop
var arr13 = [10, 20, 30];
var start = 0;
var end = arr13.length - 1;

while (start < end) {
    var temp = arr13[start];
    arr13[start] = arr13[end];
    arr13[end] = temp;

    start++;
    end--;
}
console.log(arr13);

// 14. Print Odd Numbers
var arr14 = [1, 2, 3, 4, 5];
for (var i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 !== 0) {
        console.log(arr14[i]);
    }
}

// 15. Count Elements Greater Than 10
var arr15 = [5, 15, 25, 3];
var count = 0;
for (var i = 0; i < arr15.length; i++) {
    if (arr15[i] > 10) {
        count = count + 1;
    }
}
console.log(count);