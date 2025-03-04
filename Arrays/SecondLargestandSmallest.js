function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        // 3-digit numbers
        numbers.push(Math.floor(Math.random() * 900) + 100); 
    }
    return numbers;
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num != largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num != smallest) {
            secondSmallest = num;
        }
    }

    console.log("Array:", arr);
    console.log("Second Largest:", secondLargest);
    console.log("Second Smallest:", secondSmallest);
}

let randomNumbers = generateRandomNumbers();
findSecondLargestAndSmallest(randomNumbers);