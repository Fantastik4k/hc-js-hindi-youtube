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

const anotherString = gameName.slice(-8, 7) // last sy 8 chas ginon aur udhr sy substring start, start sy 7 tk gino, 6 tk end. output h-
console.log(anotherString);

/*
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19)); // chothy sy start krna hy aur aur 18 tk
// Expected output: "quick brown fox"

console.log(str.slice(-7)); // last sy 7 characters ginon, aur likh do
// Expected output: "zy dog."

console.log(str.slice(-9, -5)); // last sy 9 characters aur 5 characters ginon, aur start 9 sy kro aur stop 5 py kr do
// Expected output: "lazy"

*/

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove starting/ending spaces.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // false

console.log(gameName.split('-'));
