const prompt = require('prompt-sync')();

function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        return "Input out of range! Enter temperature between 0°C and 100°C.";
    }
    return (degC * 9/5) + 32;
}

function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        return "Input out of range! Enter temperature between 32°F and 212°F.";
    }
    return (degF - 32) * 5/9;
}

let choice = prompt("Choose conversion: 1) Celsius to Fahrenheit 2) Fahrenheit to Celsius: ");
switch (choice) {
    case "1":
        let degC = parseFloat(prompt("Enter temperature in Celsius: "));
        console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(degC)}°F`);
        break;
    case "2":
        let degF = parseFloat(prompt("Enter temperature in Fahrenheit: "));
        console.log(`Temperature in Celsius: ${fahrenheitToCelsius(degF)}°C`);
        break;
    default:
        console.log("Invalid choice!");
}
