const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter value of n: "));
let harmonic = 0.0;

for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
    console.log(`H(${i}) = ${harmonic.toFixed(4)}`);
}

console.log(`The ${n}th harmonic number is: ${harmonic.toFixed(4)}`);
