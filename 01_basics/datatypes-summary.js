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
