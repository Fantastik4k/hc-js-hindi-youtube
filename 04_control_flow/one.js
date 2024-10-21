// if
// ab tk jo hum code likh rhy hein, wo sara execute ho rha hy, aesa nhi hon chahye. kehta ka matlub yeh h k conditional code execute hona chahye. agr koi login hy to koi aur code run hona chahye, agr koi login ni hy to koi aur code run hona chahye.
// {} => isko scope bolty hein. matlub if likhty hein, usky baad condition likhty hein, aur usky baad scope open ho jata hy.
// true ya false inside () ksi condition sy evaluate hoon gy, k q literal true ya false likhny ka koi faida hi ni, yaani phir conditions ko use krny ka kia faida.
/*
if (2 == "2") {
    console.log("executed")
}
*/
// oper wala code execute hoga, yaani condition true ho jaye gi. haalan k yeh true ni hona chahye. 2 number 2 string k kesy equal ho skta hy. tu iss treh jb data types ko bi check krna ho to hum string equal yaani === ka use krty hein.

 
const isUserloggedIn = true
const temperature = 41
 
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); --idhr error aye ga, qk jo variables score k andar define hoty hein, wo aap ko bahir accessible ni hoty. but as you know agr hum power var ko inside scope var keyword ki madad sy define krty to issue hota q k phir hmary code mein error bhi na ata aur code bhi execute ho jata jo k wrong ghalt baat hy. "var ka scope completly global hy"


// const balance = 1000

// implicit scope. multiple lines bhi likh skty hein, 2nd console ko hm nechy wali line py bhi le ja skty hein, comma phir bhi lgana hy first console k baad, aur semi colon 2nd console k baad lgana zaroori hy, but yeh bhut unreadable code hy.
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
