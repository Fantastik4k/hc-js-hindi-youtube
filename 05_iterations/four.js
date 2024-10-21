const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
// console.log(key) => js, cpp, rb, swift
// console.log(myObject[key]) => javascript, C++, ruby, swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// output 0 1 2 3 4 hoga, yhi issue h for in loop k sath in case of arrays, for of loop to seedha values utha k de deta tha, jb k for in loop keys de deta hy

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// kuch bhi ni aye ga, q k map iteratable ni hein. kuch tariqy hien I think iterate krny k but.
