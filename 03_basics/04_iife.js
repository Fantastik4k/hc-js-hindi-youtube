// Immediately Invoked Function Expressions (IIFE)
// 2 use cases for IIFE. 1.  jub bhi hmary app start ho, hum chahty hein k forun hi database k sath connection ho jaye. 2. global scope mein jo variables defined hein, wo block scope waly na mangein, agr hum block walon ko pehly hi execute rk dein. I THINK, I AM CONSUED, SEE VIDEO AGAIN. CONCEPT IS KNOWN AS globab pollution.
// global scope ki pollution sy kai baar problem hoti hy, us pollution ko htany k liye/us sy bchny k liye, hum IIFE ka use krty hein.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // idhr semi colon lgana bhut zaroori hy.

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

