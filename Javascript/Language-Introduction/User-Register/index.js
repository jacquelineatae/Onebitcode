// user input
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let studyField = prompt("Enter your field of study:");
let birthYear = parseInt(prompt("Enter your birth year:"));

// get current year
let currentYear = new Date().getFullYear();

// print
console.log(
    `\nRecruit's full name: ${firstName} ${lastName}`,
    `\nStudy field: ${studyField}`,
    `\nAge: ${age}`
  );