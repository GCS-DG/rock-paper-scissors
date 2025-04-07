var comChoice
var randNum

// Function for computer player to choose rock, paper, or scissors
function getComputerChoice(comChoice) {
    randNum = Math.floor(Math.random() * 100 + 1);
    switch(true) {
        case randNum > 66:
            comChoice = "Rock";
            break;
        case randNum > 33:
            comChoice = "Paper";
            break;
        case randNum >= 0:
            comChoice = "Scissors";
    }
    
    return comChoice;
  }
console.log(getComputerChoice(comChoice))