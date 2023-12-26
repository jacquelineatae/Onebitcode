// Prompt the user to enter their name and ensure it contains only letters (not numeric)
let name;
do {
    name  = prompt("Please enter your name:");
} while (!/^[a-zA-Z]+$/.test(name)); // Checks if the name contains only letters (not numeric)

// Initialize an empty array to store the cities and a counter for the number of cities visited
let cities = [];
let count = 0;

// Prompt the user with a choice for visiting a city
let ask = prompt("Have you ever visited a city?\n 1) YES\n 2) NO");

// Do-while loop to repeatedly prompt for a valid choice
do {
    // Execute the conversion based on the user's choice using a switch statement
    switch (ask) {
        case "1": 
            count++;
            // Prompt the user to enter the name of the city visited and add it to the array
            cities.push(prompt("City name:"));
            // Prompt the user if they have visited any other cities
            ask = prompt("Have you visited any other cities?\n 1) YES\n 2) NO");
            // No break here, so it falls through to the next case if "1" is chosen
        case "2": 
            break;
    }
} while (ask == "1"); // Continue the loop as long as the user chooses "1"

// Print the result after a valid choice is made
console.log("Tourist:", name);
console.log("Number of cities visited:", count);

// Check if the list of cities is not empty before printing
if (cities.length > 0) {
    console.log("List of cities visited:");
    // Print each city on a new line
    for (let i = 0; i < cities.length; i++) {
        console.log(cities[i]);
    }
}