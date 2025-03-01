//Get command-line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node dateCheck.js <day> <month>");
    process.exit(1);
}

const day = parseInt(args[0], 10);
const month = parseInt(args[1], 10);

//Create date objects for comparison
const inputDate = new Date(2024, month - 1, day); // Year 2024 (leap year safe), months are 0-based
const startDate = new Date(2024, 2, 20); // March 20
const endDate = new Date(2024, 5, 20); // June 20

const isInRange = inputDate >= startDate && inputDate <= endDate;

console.log(isInRange);
