const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) -- this will put actual dc_heros array insdie marvel_heros array. we may think that result will be the collected elements of both of these arrays, but no.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) -- here, output would be like we expect. push existing array py hi kaam krtna hy, menawhile concat new array return krtna hy.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // dono glass toot gye.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // depth 1, ya 2, ya 3 ya infinity
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // ['H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting -- will return us empty array. hmy btana pry ga k keys ka array bnana hy ya values. more in next videos on thsi.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //output [100, 200, 300]  -- Array.from ka alternative
