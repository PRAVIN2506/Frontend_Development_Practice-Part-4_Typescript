"use strict";
let user1 = { firstname: "Pravin", lastname: "B", age: 22 };
let user2 = { firstname: "Bebe", lastname: "Mine", age: 22 };
function greetUser(user) {
    return `Hello ${user.firstname} ${user.lastname}`;
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(user1));
console.log(getUserAge(user2));
