let money = 100;
let bets = 0;
let wins = 0;

while (money > 0 && money < 200) {
    bets++;
    let betResult = Math.random() < 0.5 ? -1 : 1; // 50% win or lose

    if (betResult === 1) {
        wins++;
        money++;
    } else {
        money--;
    }
}

console.log(`Game Over! Final money: Rs ${money}`);
console.log(`Total Bets: ${bets}, Wins: ${wins}`);
