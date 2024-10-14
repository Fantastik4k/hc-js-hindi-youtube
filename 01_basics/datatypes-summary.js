//  Primitive  -- yeh jo primitive and non-primitve mein types of difference kia hwa hy, yeh iss base py kia hwa hy k in data types of aap memory mein kis treh sy store krty ho aur kis trh sy access kr skty ho.
// yeh jo primitives hoty hein yeh 'call by value' hoty hein.

// js is a dynamically typed language.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // In JavaScript, the Symbol is a primitive data type introduced in ES6. It is created using the `Symbol()` function, which returns a unique symbol value each time it is called. 
const anotherId = Symbol('123')

console.log(id === anotherId); // output false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// in early langs like c, memeory ko reserve krna aur free krna apka hi kaam hota that.

// 2 types of memory. stack and heap. 

// primitve mein sub jgh stack use hoti hy. aur jitny bhi non-primitive types hein, udhr heap memory use hoti hy.
// yeh yaad rkhna jub stack memory use hoti hy, jo bhi var apny declare kia, apko uska copy milta hy.

// Stack (Primitve), Heap (Non-Primitive)

let name = 'ahmad'

let othername = name; // idhr apko name ki copy di jati hy.
othername = 'azhar' // idhr hum copy ko change kr rhy hein to orignal to change ni hogi. wesy sense bhi nhi bnta k name ki value ko change hona chahye.

console.log(name) // output ahmad
console.log(othername) // output ahmad if we don't change value of othername. output azhar if we change value like above.

// heap k andar jo bhi jata hy uska reference hi milta hy.

let userOne = {
    name: 'ahmad',
    email: 'ahmad@gmail.com'
};

let userTwo = userOne;

userTwo.email = 'hitesh@google.com'

console.log(userOne.email) // output hitesh@google.com
console.log(userTwo.email) // output hitesh@google.com













