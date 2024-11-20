const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
const PlayerChoice = prompt("Enter rock, paper or scissors (or q to quit): ");
if (PlayerChoice.toLowerCase() === "q") {
    break;
}

if (
    PlayerChoice !== "rock" && 
    PlayerChoice !== "paper" && 
    PlayerChoice !== "scissors"
) {
    console.log("Please enter a valid choice.");
    continue;
}

const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.round(Math.random() * 2);
const computerChoice = choices[randomIndex];

console.log("The computer chose:", computerChoice);

if (computerChoice === PlayerChoice) {
    console.log("Draw!");
    ties++;
} else if ((PlayerChoice === "paper" && computerChoice === "rock") || 
           (PlayerChoice === "rock" && computerChoice === "scissors") || 
           (PlayerChoice === "scissors" && computerChoice === "paper")
        ) {
    console.log("Won!");
    wins++;
} else {
    console.log("Lost!");
    losses++;
}
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties);