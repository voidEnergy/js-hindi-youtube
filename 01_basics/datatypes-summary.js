// # Primitive(All are call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567809876512345n
//gets converted to bigInt via the 'n'


// Reference Type/Non-Primitive
// Array, Objects, Functions

const heros = ["shaktimaan","naagraj","doga"]
let myObj = {
    name: "Rohit",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof scoreValue)
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof myObj)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "RRisOP"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName)

let user1 = {
    email : "user@google.com",
    upi : "user@ybl"
}

let user2 = user1

user2.email = "rr@google.com"

console.log(user1.email)
console.log(user2.email)