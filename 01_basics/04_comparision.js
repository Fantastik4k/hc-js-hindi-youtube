// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// oper waly comparisons to simple hein, ya true hoga ya false. problem tub ati hy jub datatypes different hoon. to aap try krein k jb bhi aap comparison kr rhy hoon, confuse result/output sy bchny k liye dono operands ki datatypes same hoon.
// console.log("2" > 1); output true
// console.log("02" > 1); output true

console.log(null > 0); // output false qk null to empty value hy
console.log(null == 0); // output false
console.log(null >= 0); // output true

// The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.



console.log(undefined == 0); // output false
console.log(undefined > 0);  // output false
console.log(undefined < 0); // output false

// ===  i.e strict check

console.log("2" === 2); // output false
