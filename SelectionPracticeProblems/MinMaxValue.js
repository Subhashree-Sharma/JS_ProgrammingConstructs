//using function to generate a random 3-digit number (100 to 999)
function getRandomThreeDigit() {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}

//Generate 5 random numbers and store them in an array
let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(getRandomThreeDigit());
}

console.log("Generated Numbers:", numbers);

// Initialize min and max with the first element
let minValue = numbers[0];
let maxValue = numbers[0];

//loop through the array to find min and max
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minValue) {
      minValue = numbers[i];
  }
  if (numbers[i] > maxValue) {
      maxValue = numbers[i];
  }
}

console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);
