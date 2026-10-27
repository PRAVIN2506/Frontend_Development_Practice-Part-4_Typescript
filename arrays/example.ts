//Array of numbers
var arrayOfNum: number[] = [1, 2, 3, 4, 5];

//Array of strings
var arrayOfStrings: string[] = ["a", "b", "c", "d", "e"];

//Array of booleans
var arrayOfBooleans: boolean[] = [true, false, true, false, true];

//Array of objects
var arrayOfObjects: object[] = [{ name: "John", age: 22, isStudent: false }, { name: "Jane", age: 23, isStudent: true }];

//Below examples show the error
//arrayOfNum = [1, 2, 'ab', 4, 5];  // Error: Type 'string' is not assignable to type 'number'
//arrayOfStrings = [1, 2, 3, 4, 5]; // Error: Type 'number' is not assignable to type 'string'
//arrayOfBooleans = [1, 2, 3, 4, 5]; // Error: Type 'number' is not assignable to type 'boolean'
//arrayOfObjects = [1, 2, 3, 4, 5]; // Error: Type 'number' is not assignable to type 'object'
