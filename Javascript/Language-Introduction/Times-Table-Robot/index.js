// Prompt the user to choose a number between 1 and 20
let number = parseFloat(prompt("Choose a number between 1 and 20"));

// Print the multiplication table for the chosen number
for (let i = 1; i <= 20; i++) {
  // Output each multiplication equation
  console.log(`${i} x ${number} = ${number * i}`);
}