// const person = {
//     name: 'Yucel Celik',
//     age: 23
// };
// module.exports = person;

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Benim ismim ${this.name} ve ben ${this.age} yasindayimnode.`);
    }
}

module.exports = Person;