"use strict";
//Array of mixed types
var arrayOfMixedTypes = [1, "hello", true, { name: "John", age: 22, isStudent: false }];
arrayOfMixedTypes = [1, 2, 3, 4, 5];
// Below examples show the error we will get if we try to assign a different type to the array
arrayOfMixedTypes = true;
arrayOfMixedTypes = { name: "John", age: 22, isStudent: false };
