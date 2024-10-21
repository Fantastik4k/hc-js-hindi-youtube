// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}
// console.log(i) -- error aye ga, aur ana bhi chahye, q k yeh loop k andar define hwa hy, bahire accessible ni ho ga.
// console.log(element); -- errror

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let  j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length); -- nechy condition check krty hwy agr hum ny <= likh dein to hmy sary elements print krwany k baad underined bhi mily ga, jo k shi cheez nhi hy. qk length 3 hy jb k indexing 0 sy start hoti hy.
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// output
/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
*/

// continue ka hum iss truh bhi keh skty hein k aik dfa maafi kr do.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

// output
/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
////////////  7
till 20
*/
