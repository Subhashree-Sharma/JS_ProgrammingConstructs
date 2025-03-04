const prompt = require("prompt-sync")();

let a = parseInt(prompt("Enter value for a: "));
let b = parseInt(prompt("Enter value for b: "));
let c = parseInt(prompt("Enter value for c: "));

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

console.log(`Results:
1. a + b * c  = ${op1}
2. a % b + c  = ${op2}
3. c + a / b  = ${op3}
4. a * b + c  = ${op4}`);

// Finding Maximum using if-elseif-else
let max = op1;
if (op2 > max) {
    max = op2;
}
else if (op3 > max) {
    max = op3;
}
else {
    max = op4;
}

// Finding Minimum using if-elseif-else
let min = op1;
if (op2 < min) {
    min = op2;
}
else if(op3 < min) {
    min = op3;
}
else{
    min = op4;
}

console.log(`Maximum value: ${max}`);
console.log(`Minimum value: ${min}`);
