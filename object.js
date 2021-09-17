const Person = {
  firstName: "Muhammad",
  lastName: "Ilham",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(Person.fullName())
