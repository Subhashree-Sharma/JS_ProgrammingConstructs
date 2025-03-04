const prompt = require('prompt-sync')(); // For user input
let n = parseInt(prompt("Enter a number n: "));
let i = 0;
let power = 1;

while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2;
    i++;
}
