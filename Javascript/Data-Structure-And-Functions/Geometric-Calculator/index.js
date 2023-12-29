// Function to calculate the area of a triangle
function triangleArea() {
    // Prompt the user for the triangle's base and height
    let base = parseFloat(prompt("Enter the triangle's base:"));
    let height = parseFloat(prompt("Enter the triangle's height:"));

    // Calculate and return the area of the triangle
    return (base * height) / 2;
}

// Function to calculate the area of a rectangle
function rectangleArea() {
    // Prompt the user for the rectangle's base and height
    let base = parseFloat(prompt("Enter the rectangle's base:"));
    let height = parseFloat(prompt("Enter the rectangle's height:"));

    // Calculate and return the area of the rectangle
    return base * height;
}

// Function to calculate the area of a square
function squareArea() {
    // Prompt the user for the square's side length
    let side = parseFloat(prompt("Enter the square's side length:"));

    // Calculate and return the area of the square
    return side ** 2;
}

// Function to calculate the area of a trapezoid
function trapezoidArea() {
    // Prompt the user for the trapezoid's larger base, smaller base, and height
    let largerBase = parseFloat(prompt("Enter the trapezoid's larger base:"));
    let smallerBase = parseFloat(prompt("Enter the trapezoid's smaller base:"));
    let height = parseFloat(prompt("Enter the trapezoid's height:"));

    // Calculate and return the area of the trapezoid
    return (largerBase + smallerBase) * height / 2;
}

// Function to calculate the area of a circle
function circleArea() {
    // Prompt the user for the circle's radius
    let radius = parseFloat(prompt("Enter the circle's radius:"));

    // Calculate and return the area of the circle
    return 3.14 * (radius ** 2);
}

// Function to display the menu and get user input
function exibirMenu() {
    return prompt(
        "Geometric Calculator\n" +
        "1. Area of triangle\n" +
        "2. Area of rectangle\n" +
        "3. Square area\n" +
        "4. Area of trapezoid\n" +
        "5. Area of circle\n" +
        "6. Close\n"
    );
}

// Function to execute the calculator
function execute() {
    do {
        // Call exibirMenu function to display the menu and get user input
        menu = exibirMenu();

        // Switch statement to execute code based on the user's chosen option
        switch (menu) {
            case "1":
                console.log(`Area of triangle: ${triangleArea()}`);
                break;
            case "2":
                console.log(`Area of rectangle: ${rectangleArea()}`);
                break;
            case "3":
                console.log(`Area of square: ${squareArea()}`);
                break;
            case "4":
                console.log(`Area of trapezoid: ${trapezoidArea()}`);
                break;
            case "5":
                console.log(`Area of circle: ${circleArea()}`);
                break;
            case "6":
                console.log("Closing...");
                break;
            default:
                console.log("Invalid option. Please choose a valid option.");
        }
    } while (menu !== "6");
}

// Call the execute function to start the program
execute();
