function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection === "rock") &&
        computerSelection === "Scissors"
    ) {
        return "You Win! Rock beats Scissors";
    } else if (
        (playerSelection === "paper") &&
        computerSelection === "Rock"
    ) {
        return "You Win! Paper beats Rock";
    } else if (
        (playerSelection === "scissors") &&
        computerSelection === "Paper"
    ) {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else {
        return "You Lose!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick your poison: ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

