// data and variables
let numberOne = parseFloat(prompt("Enter the first number:"))
let numberTwo = parseFloat(prompt("Enter the second number:"))
let sum, subtraction, multiply, division;

if (isNaN(numberOne) || isNaN(numberTwo)) {
    console.log("Please insert valid numbers.");
    } else {
        // math operations
        sum = numberOne + numberTwo
        subtraction = numberOne - numberTwo
        multiply = numberOne * numberTwo
    
        // check if the second number is not zero before division
        division = numberTwo !== 0 ? numberOne / numberTwo : "Zero division is not allowed.";
    }
    
// result 
console.log(
    "Sum:", sum,
    "Subtraction:", subtraction,
    "Multiply:", multiply,
    "Division:", division
  );