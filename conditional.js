const Person = {
  firstName: "Muhammad",
  lastName: "Ilham",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 80,
  height: 175,
  isWeightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100;
  },

  needDiet: function () {
    const bodyIdeal = this.isWeightIdeal();
    if (bodyIdeal - 5 > this.weight)
      return ("you need more protein " + (bodyIdeal - this.weight) + " Kg");
    else if (bodyIdeal + 5 < this.weight)
      return ("you need fatloss: " + (this.weight - bodyIdeal) + " Kg");
    return "you're have body goals";
  },
};

console.log(Person.fullName());
console.log(Person.isWeightIdeal());
console.log(Person.needDiet());
