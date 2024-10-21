// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

// suppose krein agr case "march" waly portion mein break lgana bhol jaty, to agy wala sara code execute hoga, except defualt. default wala code execute ni ho ga.

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
