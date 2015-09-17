//////////////////////////////////////////////////
///*   Provided Code - Please Don't Edit   */
//////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.25) {
        return "rock";
    } else if (randomNumber < 0.50) {
        return "paper";
    }else if (randomNumber < 0.75){
        return 'rope';
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if ((playerMove === 'spock' && computerMove === 'rock' || computerMove === 'paper' || computerMove === 'scissors')(playerMove === 'rope' && computerMove === 'rock' || computerMove === 'paper') || /*(playerMove === 'rope' && computerMove === 'paper') ||*/ (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'rock' && computerMove === 'scissors')) {
        winner = "player";
    }else if ((playerMove === 'spock' && computerMove === 'rope') || (playerMove === 'rope' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'rock')) {
        winner = "computer";
    }else if (playerMove === computerMove) {
        winner = "tie";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins < 5 && computerWins < 5){
        getWinner();
        var computerMove = getComputerMove(randomPlay());
        var playerMove = getPlayerMove(getInput());
        var winner = getWinner(playerMove, computerMove);
        console.log("You played " + playerMove + "." + " The computer played " + computerMove +".");
        if (winner === 'player') {
            console.log('Player won that round.');
            playerWins ++;
        }else if(winner === 'computer'){
            console.log('Computer won that round.');
            computerWins ++;
        }else if (winner === 'tie'){
            console.log('It was a tie. No points were added.');
        }else{
            console.log('Error: something went wrong. Try typing the correct spelling of your choice in the prompt window.')
        }
        console.log('Player Score: '+playerWins+ " |||| "+"Computer Score: "+computerWins);

    }

    return [playerWins, computerWins];
}
playToFive();

