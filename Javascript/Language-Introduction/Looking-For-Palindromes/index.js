// Prompt the user to enter a word
let str = prompt("Word:").toUpperCase();

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Reverse the string
    let rev = str.split("").reverse().join("");

    // Check if the reversed string is equal to the original string
    if (rev === str) {
        return "It's a palindrome";
    } else {
        // If not a palindrome, log the original and reversed strings
        console.log("Original: " + str);
        console.log("Reversed: " + rev);
        return "It's not a palindrome";
    }
}

// Call the function and display the result
console.log(isPalindrome(str));

