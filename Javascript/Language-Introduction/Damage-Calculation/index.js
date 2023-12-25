// Get information about the attacking character
const attacker = prompt("What is the name of the attacking character?");
const attackPower = parseFloat(prompt("What is their attack power?"));

// Get information about the defending character
const defender = prompt("What is the name of the defending character?");
let healthPoints = parseFloat(prompt("How many health points do they have?"));
const defensePower = parseFloat(prompt("What is their defense power?"));
const hasShield = prompt("Do they have a shield? (Yes/No)");

// Initialize the variable to store the damage dealt
let damageDealt = 0;

// Calculate the damage based on attack and defense powers
if (attackPower > defensePower && hasShield === "No") {
    damageDealt = attackPower - defensePower;
} else if (attackPower > defensePower && hasShield === "Yes") {
    damageDealt = (attackPower - defensePower) / 2;
}

// Update the health points of the defender after the attack
healthPoints -= damageDealt;

// Display the result in alert messages
alert(attacker + " dealt " + damageDealt + " points of damage to " + defender);
alert(
  attacker + "\nAttack Power: " + attackPower + "\n\n" +
  defender + "\nHealth Points: " + healthPoints +
  "\nDefense Power: " + defensePower + "\nHas Shield: " + hasShield
);