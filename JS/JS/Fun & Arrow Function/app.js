// ==============================================
// STEP : 1 NORMAL FUNCTION 
// ==============================================

// SYNTAX:
//function functionName(parameters){
//  return value;
//}

// template literals
let name = "Atul"
console.log(`Hello ${name}!`); // Output: Hello Atul!


function addNumbersFunction(a1, b1) {
    return a1 + b1; // sum
}

console.log("Normal Function:", addNumbersFunc(2,3)); // Output: 5
console.log(`normal function: &(addNumbersFunc(5,7))`); // Output: 12

// simple function expression example 
// function expression : function ko variable main store karna
//SYNATX:
// const functionName = function(parameters) {
//  return value;
// }

const greetExp = function() {
    return "Hello Students!";
};


console.log(greetExp()); // Output: Hello Students!