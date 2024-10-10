// singleton -- jb contructor k thru object ko create krein gy to singleton bny ga. jub literal k thru object ko create krein to singleton ni bny ga.
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) -- [] this notation is prefered instead of dot notation. 2 disadvantages of dot notation. we can't access "full name" with dot notation and we can't acces symbol with dot notation. so adopt the habit of using bracket notation.

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) -- iska yeh matlab he k ab aap JsUser ki values ko change ni kr skty. like below line will not happen, though it will not give us an error.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // [ Function (anonymous)]
console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Hitesh
