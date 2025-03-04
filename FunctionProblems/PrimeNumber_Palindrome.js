// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
  }
  return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}

const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter a number: "));

if (isPrime(num)) {
  console.log(`${num} is Prime.`);
  let palindrome = getPalindrome(num);
  console.log(`Palindrome of ${num} is ${palindrome}.`);
  if (isPrime(palindrome)) {
      console.log(`The palindrome ${palindrome} is also Prime!`);
  } else {
      console.log(`The palindrome ${palindrome} is NOT Prime.`);
  }
} else {
  console.log(`${num} is NOT Prime.`);
}
