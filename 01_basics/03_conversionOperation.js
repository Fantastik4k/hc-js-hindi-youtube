let score = "hitesh"

//console.log(typeof score); if 33 then number, if "33" then string
//console.log(typeof(score)); if 33 then number, if "33" then string

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); it will give us number, say score = "33"", will give us number if score = "33abc". Nan bhi aik special type hi, jub aap iski type check krty hein to wo number hi ati hy.
//console.log(valueInNumber); it will give us Nan if score = '33abc', but if we check its type, like in the above line, as expected, it will give us number. if score = null, then above line will give us number and this line will give us 0. if score = undefined, then this line will give us Nan and above line still number. if score = true, then this line gives us 1 and above line as expected number. if score = false, then this line will give us 0. if score = 'ahmad', then this will give us Nan and above line still number.

/*
let score = '33abc' // or 'abc33)
let valueInNumber = Number(score)
console.log(valueInNumber)
NaN
console.log(typeof valueInNumber)
number
*/

/*
let score = null
let valueInNumber = Number(score)
console.log(valueInNumber)
0
console.log(typeof valueInNumber)
number
*/

/*
the same happens if score = 'ahmad' // meaning string
let score = undefined;
let valueInNumber = Number(score)
console.log(valueInNumber)
NaN
console.log(typeof valueInNumber)
number
*/

/*
let score = true //if false then, below will be 0, and number(as usual) respectively
let valueInNumber = Number(score)
console.log(valueInNumber)
1
console.log(typeof valueInNumber)
number
*/


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh" 

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); if isLoggedIn = 1, then this line gives us true. well in case of "hitesh", like now, it gives us true, but if "", meaning empty string, it will give us false.

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); output 33
// console.log(typeof stringNumber); output string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); output -3


basic math operations 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); output hello hitesh
// sirf add hi kr skty hein, khein yeh na smjh lein k strings ko minus bhi kr skty hein.

// console.log("1" + 2); output 12
// console.log(1 + "2"); output 12
// console.log("1" + 2 + 2); output 122
// console.log(1 + 2 + "2"); output 32

// console.log( (3 + 4) * 5 % 3); PLEASE DO NOT WRITE CODE LIKE IN ABOVE 3/4 LINES. WRITE CODE LIKE IN THIS LINE.

// console.log(+true); output 1
// console.log(+""); output 0 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// also about prefix and postfix increment on mdn docs
