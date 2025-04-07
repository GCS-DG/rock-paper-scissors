let humanScore = 0;
let computerScore = 0;

// Function for computer player to choose rock, paper, or scissors
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 100 + 1);
    switch(true) {
        case randNum > 66:
            choice = "rock";
            break;
        case randNum > 33:
            choice = "paper";
            break;
        case randNum >= 0:
            choice = "scissors";
    };
    return choice;
}

// Function to ask human player to choose rock, paper, or scissors
function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors.").toLowerCase()
    return choice;
}

function playRound() {
    var roundResult
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    switch(true) {
        case humanChoice === "rock":
            if (computerChoice === "rock") {
                roundResult = "You both chose rock. It is a tie.";
            } else {
                if (computerChoice === "paper") {
                    roundResult = "You chose rock and the computer chose paper. You lose.";
                    computerScore++;
                } else {
                    roundResult = "You chose rock and the computer chose scissors. You win!"
                    humanScore++;
                }
            };
            break;
        case humanChoice === "paper":
            if (computerChoice === "paper") {
                roundResult = "You both chose paper. It is a tie.";
            } else {
                if (computerChoice === "scissors") {
                    roundResult = "You chose paper and the computer chose scissors. You lose";
                    computerScore++;
                } else {
                    roundResult = "You chose paper and the computer chose rock. You win!"
                    humanScore++;
                }
            };
            break;
        case humanChoice === "scissors":
            if (computerChoice === "scissors") {
                roundResult = "You both chose scissors. It is a tie.";
            } else {
                if (computerChoice === "rock") {
                    roundResult = "You chose scissors and the computer chose rock. You lose";
                    computerScore++;
                } else {
                    roundResult = "You chose scissors and the computer chose paper. You win!"
                    humanScore++;
                }
            };
    };
    console.log(roundResult)
    console.log("You: " + humanScore + ", CPU: " + computerScore)
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) {
        console.log("You won the match!")
    } else {
        if (humanScore = computerScore) {
            console.log("The match was a tie.")
        } else {
            console.log("You lost the match.")
        }
    };
}

playGame()