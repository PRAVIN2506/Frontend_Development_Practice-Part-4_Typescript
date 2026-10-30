class User {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number) {
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