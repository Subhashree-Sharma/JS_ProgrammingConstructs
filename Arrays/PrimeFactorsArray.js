const prompt = require('prompt-sync')();

function findPrimeFactors(n) {
    let factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    return factors;
}

let n = parseInt(prompt("Enter a number: "));
let factors = findPrimeFactors(n);
console.log(`Prime factors of ${n} are:`, factors);