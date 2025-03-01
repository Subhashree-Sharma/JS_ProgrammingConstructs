//Get command-line arguments
const args = process.argv.slice(2);

//Ensure a year is provided
if (args.length < 1) {
    console.log("Usage: node leapYear.js <year>");
    process.exit(1);
}

const year = parseInt(args[0], 10);

//Validate input: Check if the year is a 4-digit number
if (isNaN(year) || year < 1000 || year > 9999) {
    console.log("Error: Please enter a valid 4-digit year.");
} else {
    //Leap Year Check using if-else
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " is a Leap Year.");
            } else {
                console.log(year + " is NOT a Leap Year.");
            }
        } else {
            console.log(year + " is a Leap Year.");
        }
    } else {
        console.log(year + " is NOT a Leap Year.");
    }
}
