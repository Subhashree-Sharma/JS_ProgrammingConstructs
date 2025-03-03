// Function to generate a random 2-digit number (10-99)
function getRandomTwoDigit() {
    return Math.floor(Math.random() * 90) + 10; 
}

// Generate 5 random two-digit numbers
let num1 = getRandomTwoDigit();
let num2 = getRandomTwoDigit();
let num3 = getRandomTwoDigit();
let num4 = getRandomTwoDigit();
let num5 = getRandomTwoDigit();

// Calculate sum
let sum = num1 + num2 + num3 + num4 + num5;

// Calculate average
let average = sum / 5;

// Debugging messages
console.log(`Generated Numbers: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);
