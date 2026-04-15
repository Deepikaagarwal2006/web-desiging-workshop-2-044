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

/// function expression with parameters
const sqaureFunc = function(n) {
    return n * n;
};

console.log("Sqaure with Normal Function:" , sqaureFunc(4)); // Output: 16
 // by template literals
  console.log(`Sqaure with Normal Function: ${sqaureFunc(5)}`); // Output: 25

   // ======================================
   // STEP: 2 ARROW FUNCTION 
   // ======================================

   //SYNTAX:
    // const functionName = (parameters) => expression;

    const addNumbersArrow = (a2 , b2) => a2 + b2;

    console.log("Arrow Function:", addNumbersArrow( 4 , 6)); // Output: 10


    // EXPLANATION :
    // - function keyword hata diya 
    // - => use kiya 
    // - direct return (implicit return)

    // arrow function with no perameters 
    const greetArrow = () => "Hello Students!";

    console.log(greetArrow()); // Output: Hello Students!
    
    // arrow function with one parameter (parantheses optional)
    const squareArrow = n => n * n;

    console.log("Square with Arrow Function:", squareArrow(4)); // Output: 16