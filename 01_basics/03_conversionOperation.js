let score = "true"

console.log(typeof score)
console.log(typeof (score)) // as a method

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN(not a number)
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Rohit" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);