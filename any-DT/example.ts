//Array of mixed types
var arrayOfMixedTypes: any[] = [1, "hello", true, { name: "John", age: 22, isStudent: false }];

arrayOfMixedTypes = [1, 2, 3, 4, 5];

// If we try to assign a different type to the array, we will get an error
// arrayOfMixedTypes = true;
// arrayOfMixedTypes = { name: "John", age: 22, isStudent: false };