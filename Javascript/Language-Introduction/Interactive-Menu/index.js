// Declare a variable to store the user's option
let option;

// Do-while loop to repeatedly prompt the user for an option
do {
    // Prompt the user to choose an option
    option = prompt("Choose an option:\n 1) Option 1\n 2) Option 2\n 3) Option 3\n 4) Option 4\n 5) Close");

    // Switch statement to execute code based on the user's chosen option
    switch (option) {
        case "1":
            console.log("You selected option 1");
            break; 
        case "2":
            console.log("You selected option 2");
            break;
        case "3":
            console.log("You selected option 3");
            break;
        case "4":
            console.log("You selected option 4");
            break;
        case "5":
            console.log("Closing...");
            break;
        default:
            console.log("Invalid option. Please choose a valid option."); 
    }
} while (option != "5");

// The loop exits when the user chooses option "5"


