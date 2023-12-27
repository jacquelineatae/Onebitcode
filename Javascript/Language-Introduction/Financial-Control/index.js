// Get the initial value from the user
let value = parseFloat(prompt("Initial value:"));
let choice;
let plus, minus;

// Start a loop for financial control
do {
    // Display current balance to the user
    alert("Financial Control\nYour current balance is $" + value);
    
    // Ask the user for their choice
    choice = prompt("1) Add money\n2) Remove money\n3) Exit");

    // Use a switch statement to handle different choices
    switch (choice) {
        case "1":
            // If the user chooses to add money
            plus = parseFloat(prompt("How much to add:"));
            value += plus;
            break;
        case "2": 
            // If the user chooses to remove money
            minus = parseFloat(prompt("How much to remove:"));
            value -= minus;
            break;
        case "3": 
            // If the user chooses to exit, break out of the loop
            break;            
        default:
            // If the user enters an invalid option, provide feedback
            alert("Invalid option. Please try again.");
    }
} while (choice !== "3");

// Display the final balance to the user
console.log("Final balance: $ " + value);


