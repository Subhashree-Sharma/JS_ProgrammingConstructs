const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.): "));

if (num === 1) console.log("Unit");
else if (num === 10) console.log("Ten");
else if (num === 100) console.log("Hundred");
else if (num === 1000) console.log("Thousand");
else if (num === 10000) console.log("Ten Thousand");
else if (num === 100000) console.log("Lakh");
else console.log("Invalid input! Enter 1, 10, 100, 1000, etc.");
