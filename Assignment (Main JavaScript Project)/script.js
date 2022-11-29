function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice){
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Scissors';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
    }
    return computerChoice;
}

// create global
let playerScore;
let computerScore;

// one round
function playRound(playerSelection, computerSelection){
    if((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
       (playerSelection == 'Paper' && computerSelection == 'Rock') || 
       (playerSelection == 'Scissors' && computerSelection == 'Paper')){
        // wins
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else if(playerSelection == computerSelection){
        // draw
        playerScore += 0.5;
        computerScore += 0.5;
        return "It's a draw."
    } else {
        // computer wins
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

// to match the document string example capitalize playerSelection
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// gameOn
function game(){
    // reset to 0 for every new game
    playerScore = 0;
    computerScore = 0;
    let winner;
    for (let i = 0; i < 5; i++) {
        // change computer choice each loop
        let computerSelection = computerPlay();
        let playerSelection;
        // keep asking user for input until input is valid
        while(true){
            playerSelection = prompt("Rock, paper, scissors: Choose your weapon!").toLowerCase();
            playerSelection = capitalizeFirstLetter(playerSelection);
            if(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors"){
                break;
            } else {
                alert("Invalid choice. Please pick one of the following: rock, paper, or, scissors.");        
            }
        }
        console.log(`Round ${i+1}:`,playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        winner = "You, CONGRATULATIONS.";         
    } else if( playerScore == computerScore) {
        winner = "No-one. It's a draw. So close.";
    } else {
        winner = "The Computer. Better luck next time.";
    }
    console.log(`Annnnd the WINNER is... ${winner} Click refresh on the browser to play again.`);
}

game();