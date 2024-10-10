// array -- arrrays in js are resizeable and can contain a mix of different data types.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myarr) -- [0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9) -- adds 9 at the start of array, but it is not efficient, assume 1 million enteries in array, all have to be taken to one place further.
// myArr.shift() -- first wali ko remove kr dey ga.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); -- if 3 is in array, it will give us its first occurrence index. if no 3, then it gives us -1

// const newArr = myArr.join()

// console.log(myArr); [0, 1, 2, 3, 4, 5]
// console.log( newArr); 0, 1, 2, 3, 4, 5 --if we check its type, we get string.


// slice, splice -- 

const ahmArr = [0, 1, 2, 3, 4, 5]

console.log("A ", ahmArr);

const myn1 = ahmArr.slice(1, 3)

console.log(myn1);
console.log("B ", ahmArr);


const myn2 = mahmArr.splice(1, 3) // idhr 1, 3 ka matlub yeh h k 1 index sy ley kr 3(including) index values ko myn2 mein daal do.  AUR AB MAIN DIFFERENCE B/W SLICE AND SPLICE. AB JUB YEH myn2 MEIN DAAL DIYE TO AB YEH KRO K ORIGNAL ARRAY, YAANI ahmArr KO MANIPULATE KR DO, YAANI JO BAQI VALUES HEIN Wo ahmArr MEIN DAAL DO.
console.log("C ", ahmArr); // output C [0, 4, 5]
console.log(myn2); [1, 2, 3]
