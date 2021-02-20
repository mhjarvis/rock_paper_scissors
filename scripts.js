
let player = 0;      //track who is winning (negative - comp wins)
let computer = 0;          //number of games played

game();

function computerPlay() {        //return computer pick

    let pick = "";
    //get random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
        
    switch(randomNumber) {
        case 1:
            pick = "rock";
            break;
        case 2:
            pick = "paper";
            break;
        case 3:
            pick = "scissors";
            break;
        default:
            pick = "Error";
    }
        return pick;
}

//function compares picks and determines winner
function playRound(playerSelection, computerSelection) {

    const outcome = document.querySelector('#outcome');
    const score = document.querySelector('#score');

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        player++;
        outcome.textContent = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".";
    } else if(playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
        outcome.textContent = "Tie!";
    } else {
        computer++;
        outcome.textContent = "You loose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".";
    }

    score.textContent = "Player: " + player + "    " + "Computer: " + computer;
}

//function tracks number of games played and who is winning
function game() {

    const rockButton = document.querySelector('#rock-button');
    const paperButton = document.querySelector('#paper-button');
    const scissorsButton = document.querySelector('#scissors-button');

    rockButton.addEventListener('click', () => {
        playRound("rock", computerPlay());
    });
    paperButton.addEventListener('click', () => {
        playRound("paper", computerPlay());
    });
    scissorsButton.addEventListener('click', () => {
        playRound("scissors", computerPlay());
    });

}