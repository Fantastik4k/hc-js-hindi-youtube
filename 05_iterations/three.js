// idhr hum jo loops prhny ja rhy hein, yeh thory sy array specific hein. I think yeh dosri data structures py bhi lga skty hein, but inka mostly use array k sath hi hota hy. strings/arrays/ object => yeh iterators hein, inn py aap loop lga skty hein.
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); -- amps mein unique values hoti hein, jo order dia hota hy, usi order mein ati hein. idhr ab jb iss map ko print krein gy to ouput mein india sirf aik hi baar aye ga.

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// 'const [key, value] of map', yeh likhny sy hum ny actually mein array ko destruct kr lia hy.
// agr hum sirf "const key of map" print krwaty to ['IN', 'India'] ['USA', 'United States of America'] ['Fr', 'France']

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// idhr error hi aye ga. k myObject is not iterable. q k objects ko iterate krny k liye hum for in loop ka use krty hein
