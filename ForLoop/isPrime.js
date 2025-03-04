const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number: "));
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(`${num} is ${isPrime ? "a prime number" : "not a prime number"}`);
