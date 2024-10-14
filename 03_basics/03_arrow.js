// this keyword tells us about current context.

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // idhr hmara current context line 3 sy ley kr line 10 tk hy sirf.
        console.log(this);
    }

}

// user.welcomeMessage() -- output hitest , welcome to website, aur sath mein object bhi print ho jaye ga, jidhr username: 'hitesh' ho ga.
// user.username = "sam" -- idhr hum ny current context ko change kr dia. current context ko change krny ka matlub hey k current context mein values ko change kr dia.
// user.welcomeMessage() -- output sam , welcome to website, aur sath mein object bhi print ho jaye ga, jidhr username: 'sam' ho ga.

// console.log(this); -- output {}. jub aap node k andar kein to current context empty object hey. yaani node env mein this empty object ko refer kr rha hota hy.

// function chai(){
//     let username = "hitesh"
//     console.log(this) --output aik bra sara object, na k empty object. 
//     console.log(this.username); --output undefined. tu hmein yeh pta chla k this jo hy wo object k andar hi iss treh kaam krta hy, iss truh simple standalone function mein kaam ni krta.
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // empty object aye ga, just like jesy hum ney global scope mein this ko console kia tha.
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) -- jub {} ka use krna hy to return statement likhna pry ga, jub () inka use krna hy to return statement ni likhna pry ga.

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
