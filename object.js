const Person = {
  firstName: "Muhammad",
  lastName: "Ilham",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 67,
  height: 175,
  isWeightIdeal: function () {
    const heightMinus100 = this.height - 100;

    return heightMinus100 - (heightMinus100 * 10) / 100 < this.weight;
  },
};

console.log(Person.fullName());
console.log(Person.isWeightIdeal());

const university = {
  UI: {
    Fakultas: ["Ilmu Bahasa", "Ilmu Budaya", "Teknik"],
    Teknik: ["Informatika", "Mesin", "Kapal"],
  },
  ITB: {},

  UGM: {},
};

console.log(university?.UI?.Teknik ?? "Tidak Ditemukan");
