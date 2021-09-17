let vegetables = ["spinach", "broccoli", "cauliflower", "carrot"];
console.log(vegetables);

// for (let index = 0; index < vegetables.length; index++) {
//   const element = vegetables[index];

//   console.log(element);
// }

// let index = 0;
// while (index < vegetables.length) {
//     const element = vegetables[index];
//     console.log(element);
//     index++;
// }

console.log(
  vegetables
    .filter(function (item, index) {
      return item == "broccoli";
    })
    .map(function (item, index) {
      return `${item} adalah sayur ke ${index + 1}`;
    })
);
