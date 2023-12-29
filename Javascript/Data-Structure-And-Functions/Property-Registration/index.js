let propertiesCount = 0;
let propertiesList = [];
let menu;

// Infinite loop to keep the program running until the user chooses to exit
while (true) {
    // Display the total number of registered properties
    console.log(`Total properties registered: ${propertiesCount}`);

    // Prompt the user for a menu choice
    menu = prompt("1) Save property\n2) Show all properties\n3) Exit");

    // Switch statement to handle different menu options
    switch (menu) {
        case "1":
            // User chose to save a new property
            let newProperty = {
                owner: prompt("Owner's name:"),
                rooms: parseInt(prompt("Number of rooms:")),
                bathroom: parseInt(prompt("Number of bathrooms:")),
                garage: prompt("Does it have a garage? Yes/No"),
            };

            // Confirm the new property details with the user
            const check = confirm(
                "Save this property?\n" +
                "\nOwner's name: " + newProperty.owner +
                "\nNumber of rooms: " + newProperty.rooms +
                "\nNumber of bathrooms: " + newProperty.bathroom +
                "\nDoes it have a garage? " + newProperty.garage
            );

            // If the user confirms, add the new property to the list
            if (check) {
                propertiesList.push(newProperty);
                propertiesCount++;
            }
            break;

        case "2":
            // User chose to show all properties
            console.log("Property List:");
            for (let i = 0; i < propertiesList.length; i++) {
                console.log(
                    "Property " + (i + 1) +
                    "\nOwner's name: " + propertiesList[i].owner +
                    "\nRooms: " + propertiesList[i].rooms +
                    "\nBathrooms: " + propertiesList[i].bathroom +
                    "\nDoes it have a garage? " + propertiesList[i].garage
                );
            }
            break;

        case "3":
            // User chose to exit the program
            console.log("Exiting the program...");
            break;

        default:
            // User entered an invalid option
            console.log("Invalid option. Please choose a valid option.");
    }

    // If the user chose to exit, break out of the loop
    if (menu === "3") {
        break;
    }
}
