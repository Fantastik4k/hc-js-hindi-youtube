// const tinderUser = new Object()
const tinderUser = {}
// oper objects dono tariqon sy define hwy hein. in case of anyone, agr hum console.log krein gy to koi diff ni hoga, empty object hi print hoga. bus diff itna hi hy k jb Object keyword k sath tinderUser define hoga to wo singelton object hoga, aur jb object literal k sath define hoga to wo non-singleton object hoga.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // whi array wali problem. output {obj1: {1: "a", 2: "b"}, obj2: {3: "a", 4: "b"}}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // agr yeh({}) nhi bhi dein go, tb bhi result same hi aye ga, but behtur hy k yeh dein.


/*
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

Object.assign() overwrites properties in the target object with properties from the source object(s) if they have the same key.
*/


const obj3 = {...obj1, ...obj2} 
// console.log(obj3); 


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // I think idhr hum bracket notation use ni kr skty. CHECK YOURSELF.
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); -- yeh hmy keys ko aik array k andar return kry ga. output ['id', 'name', 'isLoggedIn']
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); -- arrays(key,value) inside an array.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // output true  

// destructuring objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // simple form const {courseInstructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

