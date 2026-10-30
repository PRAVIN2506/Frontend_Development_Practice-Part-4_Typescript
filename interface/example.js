"use strict";
function greetUser(user) {
    return `Hello ${user.firstname} ${user.lastname}`;
}
function logUserDetails(user) {
    console.log(`User details: ${user.firstname} ${user.middlename} ${user.lastname}, Age: ${user.age}`);
}
let user1 = {
    firstname: 'John',
    middlename: 'D',
    lastname: 'Doe',
    age: 30
};
console.log(greetUser(user1));
console.log(logUserDetails(user1));
let user2 = {
    firstname: 'pravin',
    lastname: 'B',
    age: 22
};
console.log(greetUser(user2));
console.log(logUserDetails(user2));
