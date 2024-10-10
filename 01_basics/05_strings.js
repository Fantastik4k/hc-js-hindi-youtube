const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]); // output h
// console.log(gameName.__proto__); // output {}
 

// console.log(gameName.length); // 8
// console.log(gameName.toUpperCase()); // HITESH -- oringnal wali value change ni whi kq heap hi wja sy.
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2 

const newString = gameName.substring(0, 4) // idhr hum agr 0 ki jgh -8 likh dein, to substring usko ignore kr dey ga, aur 0 sy hi skiru kry ga.
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove starting/ending spaces.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // false

console.log(gameName.split('-'));
