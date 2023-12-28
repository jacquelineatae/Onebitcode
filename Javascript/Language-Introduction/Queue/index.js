let patients = [];
let menu;

// Function to display the list of patients
function displayPatientList() {
    console.log("PATIENT LIST");
    for (let i = 0; i < patients.length; i++) {
        console.log(patients[i]);
    }
}

while (true) {
    // Display the patient list if there are patients in the list
    if (patients.length > 0) {
        displayPatientList();
    }

    // Prompt the user for menu options
    menu = prompt("1) New Patient\n2) Consult Patient\n3) Exit");

    switch (menu) {
        case "1":
            let newPatient;
            // Prompt for a new patient's name in uppercase
            do {
                newPatient = prompt("Enter patient's name:").toUpperCase();
            } while (!/^[a-zA-Z]+$/.test(newPatient));

            // Add the new patient to the list
            patients.push(newPatient);
            break;

        case "2":
            // Remove a patient from the list if there are patients
            if (patients.length > 0) {
                let removedPatient = patients.shift();
                console.log("Removed patient: " + removedPatient);
            } else {
                console.log("The patient list is empty.");
            }
            break;

        case "3":
            console.log("Exiting the program...");
            break;

        default:
            console.log("Invalid option. Please choose a valid option.");
    }

    // Exit the loop when the user chooses to exit
    if (menu === "3") {
        break;
    }
}




