// function definition
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName => Function reference, sayMyName() => Function execution
// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers() output NaN. addTwoNumbers(3, 4) output 7. addTwoNumbers(3, '4') output 34. addTwoNumbers(3, 'a') output 3a. addTwoNumbers(3, null) output 3.
// at time of declaration, number1, numbers2 are parameters. at time of execution/calling, they are arguments.

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    // console.log('ahmad') // yeh kbhi bhi execute ni hoga, qk return is sy pehly hogia hy aur function execute kr chuka hy. NOTE: HUM THI ASSUME KR RHY HEIN K NEECHY WALI LINE NI LIKHI HWI.
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // agr function deined krty waqt console krty instead of return, phir jb hum console.log(result) krein gy to undefined aye ga.

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) -- console.log(loginUserMessage()) output undefined just logged in assuming above fun def doesn't have sam option and also conditional.
// console.log(loginUserMessage("hitesh"))

***********************************************************
/* rest operator
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //output [200, 400, 500, 2000]
*/
    
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) output [500, 2000]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// oper dono tariqon sy object ko as an argument pass kr skty hein. issue tb a skta hy, k jb ho skta hy price k bjaye object define krty waqt key prices ho, ya user pass kr rhy hein, kia wo waqair object h k nahin. iss liye log typescript ko pasand krty hein q k typescript mein yeh checking ho jati hy, wesy js mein bhi ho jati hy, hmein if/else aur conditions ziada lgani prti hein. 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
