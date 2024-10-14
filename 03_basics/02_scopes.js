//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); --idhr a ki value 10 hi hogi, aur outside of this block, a ki value 300 hogi.
    
}

//console.log(c) --suppose var c = 30 is defined inside {} of if. output on this line would be 30 which should not have been. if we has defined c with let or const in {}, we would have gotten an error as appropriately. EVEN AGR APP SIRT var = 30 bhi likh dein instead of var c = 30 inside {}, tb bhi yeh problem aye gi.
// output in above line would still be 30, although another progrmmer wrote var c = 300 outside of if block.
// jo {} k andar likhty hein, we block scope hota hy, inky bahir global scope hota hy.
// global scope wali values, block scope k andar available hoti hein, aur block wali values bahir ni hoti, aur na hi honi chahye, EXCEPT IN CASE OF VAR. THAT'S WHY WE ARE FORBIDDEN TO USE VAR TO DECLARE VARIABLES.

// console.log(a); -- output 10 if var a = 10, no problem, simple straightforward
// console.log(b); -- output 20 if var b = 20, no problem, simple straightforward
// console.log(c); -- output 30 if var c = 30, no problem, simple straightforward

***************************************************************

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one() -- chota(two()) bry(one()) sy ice cream maan skta hy aur koi issue bi ni ho ga. but agr bra choty sy ice cream mangy ga to bura lgy ga.
// basic closure ki bhi yhi defintion hy k inside nested functions, js child fun, parent ky variable ko access kr sky. NOTE YEH SIRF BASIC DEF HY AUR CLOSURE ISS SY BRH KR AUR CHEEZ  BHI HY. LATER LEARN KREIN GY. AGR JALDI HY TO ENG WALY CHANNEL PY VIDEO HY, USKO DEKH LEIN.

 
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); -- yeh bi error dey ga
}

// console.log(username); ---- yeh bi error dey ga


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // output 6

function addone(num){
    return num + 1
}



addTwo(5) // output error -- concept 'Hoisting'
const addTwo = function(num){
    return num + 2
}
