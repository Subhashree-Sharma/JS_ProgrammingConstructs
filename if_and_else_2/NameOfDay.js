const readlineSync = require("readline-sync"); // Import readline-sync

let dayNumber = readlineSync.question("Enter a number (0-6): ");

switch (dayNumber) {
    case "0": console.log("Sunday"); break;
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    default: console.log("Invalid input! Enter a number between 0 and 6.");
}
