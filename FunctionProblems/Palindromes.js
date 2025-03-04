function isPalindrome(num) {
  let reversed = parseInt(num.toString().split('').reverse().join(''));
  return num === reversed;
}

const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

console.log(isPalindrome(num1) ? `${num1} is a Palindrome` : `${num1} is not a Palindrome`);
console.log(isPalindrome(num2) ? `${num2} is a Palindrome` : `${num2} is not a Palindrome`);
