const Person = {
    firstName: "John",
    lastName: "Kimi",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(Person.fullName());