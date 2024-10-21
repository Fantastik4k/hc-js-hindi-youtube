const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) --output  [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// ab jo dosra map hy us mein num ki values pehly map ki resulted values hoon gi.

console.log(newNums); 

