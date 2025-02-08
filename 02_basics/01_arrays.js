// array
// arrays in JS are resizable
// can be mix of datatypes

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Batman", "Kal-El"]

const myArr2 =  new Array(1, 2, 3, 4, 5)
console.log(myArr[0])

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(69)
// myArr.shift()

// console.log(myArr.includes(69));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// splice manipulates original array while slice doesn't