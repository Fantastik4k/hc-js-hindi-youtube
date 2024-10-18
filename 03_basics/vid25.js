js execution context ka basically matlub yeh h k jo bhi js file apny bnai hy, js usko execute/reun kesy kre gi. js apky program ko 2 phase mein run krti hy. 1st. Memory Creation Phase/Creation Phase. 2. Execution Phase
jo bhi apny vars ya kuch aur declare kiye hein, un k liye jga allocate hoti hy, unko execute ni kia jata. 

eval execution context. not very important. yeh apny aap mein global object ki property hota hy.

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
  let total = num1 + num2
  return total
}
let result1 = addNum(val2, val2)
let result2 = addNum(10, 2)

1- Glocal Execution/Global Environment. yeh to hona hi hona hy. isko this mein allocate kia jata hy. 
2- Memory Phase. val1 -> undefined, val2 -> undefined, addNum -> dfinition, result1 -> undefined, result2 -> undefined
3- Execution Phase. 


/*
1.JS creates Global excution context 
2.Next it creates memory phase
3.Memory phase - In this phase,the variables are set to undefined 
  until the execution phase(next phase) and the functions are set to their definitions.
4.Next it creates the execution phase
5.Execution phase - In this phase,the variables are initialsed to given values and 
  when the function s are called,it creates a memory phase and execution phase for the function 
  just like the main one.

Returned value is passed to the global environment
Execution context gets deleted as well
*/



jitni baar bhi yeh functions execute hoty hein, utni baar apky liye new box create hota hy, jisko bolty hein new executional context.(new variable environment+ execution thread). iss executional context ka jb work/kaam complete hota hy to yeh delete bhi ho jata hy. 
