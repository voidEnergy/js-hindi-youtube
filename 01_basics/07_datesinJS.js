// Dates

let myDate =  new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23) //months go from 0 to 11 in JS
console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3,37)
// (Year,Month(0-based),Date,Hour,Minutes,Seconds)
console.log(myCreatedDate1.toLocaleString())
let myCreatedDate2 = new Date("01-14-2024")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()

console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getHours())
console.log(newDate.getMonth() + 1)

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "narrow"
})