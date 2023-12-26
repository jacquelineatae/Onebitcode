// Receive the value in meters from the user
let value = parseFloat(prompt("Enter the value in meters:"));
let result;

// Do-while loop to repeatedly prompt for a valid choice
do {
    let choice = prompt("1. millimeter (mm)\n2. centimeter (cm)\n3. decimeter (dm)\n4. decameter (dam)\n5. hectometer (hm)\n6. kilometer (km)");

    // Execute the conversion based on the user's choice using a switch statement
    switch (choice) {
        case "1": result = value * 1000; break;
        case "2": result = value * 100; break;
        case "3": result = value * 10; break;
        case "4": result = value / 10; break;
        case "5": result = value / 100; break;
        case "6": result = value / 1000; break;
        default: console.log("Invalid choice. Please select a valid option.");
    }
} while (result === undefined);

// Print the result after a valid choice is made
console.log("Result:", result);