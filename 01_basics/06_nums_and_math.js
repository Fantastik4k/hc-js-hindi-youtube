const score = 400
// console.log(score); output 400

const balance = new Number(100)
// console.log(balance); output [Number: 100]

// console.log(balance.toString().length); kq isko hum ny String mein convert kr lia to ab hum iss py string wala method .length lga skty hein. output 3
// console.log(balance.toFixed(1)); 100.0
// console.log(balance.toFixed(2)); 100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); out 123.9.  output 124 if 3. output 23.9 if 3 and above 23.8966. 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); output 10,00,000. output 1,000,000 if without en-IN

// +++++++++++++ Maths +++++++++++++++++++++++++++++

Math library js ka sath by default ati hy.

// console.log(Math);
// console.log(Math.abs(-4)); output 4. yeh sirf negative sign ko htata hy. aesa ni k 4 dein gy aur yeh isko -4 kr dey ga.
// console.log(Math.round(4.6)); output 5
// console.log(Math.ceil(4.2)); output 5
// console.log(Math.floor(4.9)); output  4
// console.log(Math.min(4, 3, 6, 8)); output 3
// console.log(Math.max(4, 3, 6, 8)); output 8

console.log(Math.random()); // Math.random ki value hmesha 0 aur 1 k darmiyan aati hy.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
