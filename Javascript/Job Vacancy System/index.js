const vacancies = [];

// Function to list available jobs with their names and the number of applicants
function listAvailableJobs() {
  // Create a formatted text representation of available vacancies
  const vacanciesText = vacancies.reduce((finalText, vacancy, index) => {
    finalText += index + ". ";
    finalText += vacancy.name;
    finalText += " (" + vacancy.applicants.length + " applicants)\n";
    return finalText;
  }, "");

  alert(vacanciesText);
}

// Function to create a new vacancy
function createNewVacancy() {
  // Prompt the user for information about the new vacancy
  const name = prompt("Enter a name for the vacancy:");
  const description = prompt("Enter a description for the vacancy:");
  const deadline = prompt("Enter a deadline (dd/mm/yyyy) for the vacancy:");

  // Confirm the creation of the new vacancy with the provided information
  const confirmation = confirm(
    "Do you want to create a new vacancy with this information?\n" +
    "Name: " + name + "\nDescription: " + description + "\nDeadline: " + deadline
  );

  // If confirmed, create the new vacancy and add it to the array
  if (confirmation) {
    const newVacancy = { name, description, deadline, applicants: [] };
    vacancies.push(newVacancy);
    alert("Vacancy created.");
  }
}

// Function to view details of a specific vacancy
function viewVacancy() {
  // Prompt the user for the index of the vacancy to view
  const index = prompt("Enter the index of the vacancy you want to view:");
  const vacancy = vacancies[index];

  // Create a formatted text representation of the selected vacancy and its applicants
  const applicantsText = vacancy.applicants.reduce((finalText, applicant) => finalText + "\n - " + applicant, "");

  // Display the formatted text in an alert
  alert(
    "Vacancy # " + index +
    "\nName: " + vacancy.name +
    "\nDescription: " + vacancy.description +
    "\nDeadline: " + vacancy.deadline +
    "\nNumber of applicants: " + vacancy.applicants.length +
    "\nApplicants:" + applicantsText
  );
}

// Function to register a candidate for a specific vacancy
function registerCandidate() {
  // Prompt the user for the candidate's name and the index of the vacancy
  const candidate = prompt("Enter the name of the candidate:");
  const index = prompt("Enter the index of the vacancy for which the candidate wants to apply:");
  const vacancy = vacancies[index];

  // Confirm the registration of the candidate for the selected vacancy
  const confirmation = confirm(
    "Do you want to register the candidate " + candidate + " for vacancy " + index + "?\n" +
    "Name: " + vacancy.name + "\nDescription: " + vacancy.description + "\nDeadline: " + vacancy.deadline
  );

  // If confirmed, add the candidate to the applicants list of the vacancy
  if (confirmation) {
    vacancy.applicants.push(candidate);
    alert("Application submitted.");
  }
}

// Function to delete a specific vacancy
function deleteVacancy() {
  // Prompt the user for the index of the vacancy to delete
  const index = prompt("Enter the index of the vacancy you want to delete:");
  const vacancy = vacancies[index];

  // Confirm the deletion of the selected vacancy
  const confirmation = confirm(
    "Are you sure you want to delete vacancy " + index + "?\n" +
    "Name: " + vacancy.name + "\nDescription: " + vacancy.description + "\nDeadline: " + vacancy.deadline
  );

  // If confirmed, remove the vacancy from the array
  if (confirmation) {
    vacancies.splice(index, 1);
    alert("Vacancy deleted.");
  }
}

// Function to display the menu and get user input
function showMenu() {
  const option = prompt(
    "1. List available vacancies\n" +
    "2. Create a new vacancy\n" +
    "3. View a vacancy\n" +
    "4. Register a candidate for a vacancy\n" +
    "5. Delete a vacancy\n" +
    "6. Exit"
  );

  return option;
}

// Function to run the main program
function run() {
  let menu;

  // Main program loop
  do {

    menu = showMenu();

    // Switch statement to execute code based on the user's chosen option
    switch (menu) {
      case "1":
        listAvailableJobs();
        break;
      case "2":
        createNewVacancy();
        break;
      case "3":
        viewVacancy();
        break;
      case "4":
        registerCandidate();
        break;
      case "5":
        deleteVacancy();
        break;
      case "6":
        alert("Exiting the program...");
        break;
      default:
        alert("Invalid option. Please choose a valid option.");
        break;
    }
  } while (menu !== "6");
}

// Call the run function to start the program
run();
