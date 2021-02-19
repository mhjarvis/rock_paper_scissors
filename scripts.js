//game();

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

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".";
    } else if(playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
        return "Tie!";
    } else {
        return "You loose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".";
    }
}

//function tracks number of games played and who is winning
function game() {

    let count = 0;      //track who is winning (negative - comp wins)
    let i = 0;          //number of games played

    do {
        let playerSelection = prompt("Please enter a pick (rock, paper, or scissor: ");
        playerSelection = playerSelection.toLowerCase();

        let result = playRound(playerSelection, computerPlay());
        console.log(result);

        if (result.indexOf("You win") >= 0) {
            count++;
        }
        else if (result == "Tie!") {
        }
        else {
            count--;
        }
        console.log(count);
        i++;   

    } while (i < 5);

    if (count > 0)
        console.log("You win the game.");
    else if (count == 0)
        console.log("You tie!");
    else
        console.log("You loose the game.")
}