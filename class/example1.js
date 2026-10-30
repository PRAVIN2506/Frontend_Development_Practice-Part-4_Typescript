"use strict";
class User {
    firstname;
    lastname;
    age;
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getName() {
        return `${this.firstname} ${this.lastname}`;
    }
    getAge() {
        return `${this.age}`;
    }
}
var user1 = new User("Pravin", "B", 22);
console.log(user1.getName());
console.log(user1.getAge());
