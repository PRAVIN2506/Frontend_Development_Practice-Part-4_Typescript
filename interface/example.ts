interface User {
    firstname: string;
    middlename?: string;
    lastname: string;
    age: number;
}

function greetUser(user: User) {
    return `Hello ${user.firstname} ${user.lastname}`;
}

function logUserDetails(user: User) {
    console.log(`User details: ${user.firstname} ${user.middlename} ${user.lastname}, Age: ${user.age}`);
}

let user1: User = {
    firstname: 'John',
    middlename: 'D',
    lastname: 'Doe',
    age: 30
}

console.log(greetUser(user1));

console.log(logUserDetails(user1));

let user2: User = {
    firstname: 'pravin',
    lastname: 'B',
    age: 22
}

console.log(greetUser(user2));

console.log(logUserDetails(user2));