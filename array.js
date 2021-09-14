let sourFruits = ["lime", "orange", "lemon"];

console.log(sourFruits);

let first = sourFruits[1]

console.log(first)

let last = sourFruits[sourFruits.length -1]

console.log(last)

let newLength = sourFruits.push("starfruit")

let removeEndItemLeght = sourFruits.pop()

let removeFirstItemLeght = sourFruits.shift()

let newFirstLength = sourFruits.unshift("Strawberry")

sourFruits.forEach(function(item, index, array){
    console.log(item, index)
})

console.log(sourFruits.indexOf("orange"))


let vegetables = ['spinach', 'broccoli', 'cauliflower', 'carrot']
console.log(vegetables)


let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)

console.log(vegetables)


console.log(removedItems)
