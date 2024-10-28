const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// agr humein 2sra object bnana pry to humy dobara user2 = {}, is tariqy sy dubara sara kuch repeat krna pry ga.
// const promiseOne = new Promise()
// const date = new Date()
// new keyword actually mein aik constructor function hy.
// jb bhi new keyword use krty hein, aik empty object create hota hy, jisko instance bola jata hy.

// myusername = username;

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
