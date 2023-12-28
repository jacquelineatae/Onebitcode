let deck = []; // Array to store cards in the deck
let menu;

do {
    // Prompt the user for menu options
    menu = prompt("Cards in the deck: " + deck.length + "\n1) Add a card\n2) Pull a card\n3) Exit");

    switch (menu) {
        case "1":
            // Prompt the user for a new card
            const newCard = prompt("What is the card?");
            deck.push(newCard);
            break;

        case "2":
            // Pull a card from the deck
            const pulledCard = deck.pop();
            if (!pulledCard) {
                console.log("There are no cards in the deck!");
            } else {
                console.log("You pulled a " + pulledCard);
            }
            break;

        case "3":
            console.log("Exiting the program...");
            break;

        default:
            console.log("Invalid option. Please choose a valid option.");
    }

} while (menu !== "3");