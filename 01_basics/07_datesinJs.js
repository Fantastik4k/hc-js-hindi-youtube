// Dates - jb bhi Dates hogia to 1st jan 1970 sy ley kr present moment tk miliiisecodns mein time calculate ho k a jata hy.

let myDate = new Date() // yeh Date object ka apny instance bna lia.
// console.log(myDate.toString()); output Fri Oct 11 2024 10:50:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); output Fri Oct 11 2024
// console.log(myDate.toLocaleString()); output 10/11/2024 10:51:46 PM
// console.log(typeof myDate); output object 

// let myCreatedDate = new Date(2023, 0, 23) -- month starts from 0 in js, so here 0 means January. output Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) -- 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") -- 1/14/2023 12:00:00 AM
let myCreatedDate = new Date("01-14-2023") -- 1/14/2023 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); -- in seconds.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

