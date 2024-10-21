const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values -- empty function bhi truthy value hy.
// "0", 'false', " ", [], {}, function(){}

// array aur object ko check krny ka tariqa k kia wo empty hein k nhi.

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false == 0 --true
// false == "" --ture
// 0 == "" --true


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 -- val1 mein 5 a jaye ga.
// val1 = null ?? 10 -- val1 mein 10 a jaye ga.
// val1 = undefined ?? 15 -- val1 mein 15 a jaye ga
val1 = null ?? 10 ?? 20 -- valu1 mein 10 assign ho jaye ga.

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// you can see last 5 minutes of video number 26 to reivew all the concepts explained in video.
