//////////////////////////////////////////////////
///*   Provided Code - Please Don't Edit   */
//////////////////////////////////////////////////
'use strict';
// Completed by Aaron Krueger WDI Chicago

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt('CHOICES: rock - paper - scissors - (two hidden choices)');
}
//this enables a menu to play or not to play
function toPlay(){
    console.log('Would you like to play a game??');
    return confirm('Would you like to play a game? '+'Press [Okay] to start! (be sure to have an opened console)');
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.25) {
        return "rock";
    } else if (randomNumber < 0.50) {
        return "paper";
    }else if (randomNumber < 0.75){
        return 'rope';
    }else{
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
    if ( (playerMove === 'spock' && computerMove === 'rock') || (playerMove === 'spock' && computerMove === 'scissors') || (playerMove === 'spock' && computerMove === 'paper') || (playerMove === 'rope' && computerMove === 'rock') || (playerMove === 'rope' && computerMove === 'paper') ||  (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'rope') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'rock' && computerMove === 'scissors')) {
        winner = "player";
    }else if ((playerMove === 'spock' && computerMove === 'rope') || (playerMove === 'rope' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rope') || (playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'rock' && computerMove === 'rope') || (playerMove === 'scissors' && computerMove === 'rock') ) {
        winner = "computer";
    }else if (playerMove === computerMove) {
        winner = "tie";
    //}else if((playerMove != 'spock') || (playerMove != 'rope') || (playerMove != 'rock') || (playerMove != 'paper') || (playerMove != 'scissors')){
    //    console.log('Please use a reasonable move.');
    //    winner = 'player error';
    }else{
        console.log('ERROR');
        winner = 'computer error';
    }


    return winner;
}

 //function playToFive() {
 //    console.log("Let's play Rock, Paper, Scissors");
 //    var playerWins = 0;
 //    var computerWins = 0;
 //    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
 //    /* YOUR CODE HERE */
 //    while(playerWins < 5 && computerWins < 5){
 //        getWinner();
 //        var computerMove = getComputerMove(randomPlay());
 //        var playerMove = getPlayerMove(getInput());
 //        var winner = getWinner(playerMove, computerMove);
 //        console.log("You played " + playerMove + "." + " The computer played " + computerMove +".");
 //        if (winner === 'player') {
 //            console.log('Player won that round.');
 //            playerWins ++;
 //        }else if(winner === 'computer'){
 //            console.log('Computer won that round.');
 //            computerWins ++;
 //        }else if (winner === 'tie'){
 //            console.log('It was a tie. No points were added.');
 //        }else{
 //            console.log('Error: something went wrong. Try typing the correct spelling of your choice in the prompt window.')
 //        }
 //        console.log('Player Score: '+playerWins+ " |||| "+"Computer Score: "+computerWins);
 //
 //    }
 //
 //    return [playerWins, computerWins];
 //}


 //play to a number specified below
function playTo(numOfWins){

        console.log("Let's play Rock, Paper, Scissors");
        var playerWins = 0;
        var computerWins = 0;

        while(playerWins < numOfWins && computerWins < numOfWins){
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
            }else if (winner === 'tie') {
                console.log('It was a tie. No points were added.');

            }else if(winner === 'computer error'){
                console.log('Error: something went wrong. Try typing the correct spelling of your choice in the prompt window.');

            }
            console.log('PLAYING TO: '+numOfWins+' |||| '+'Player Score: '+playerWins+ " |||| "+"Computer Score: "+computerWins);

        }

        return [playerWins, computerWins];
}

//executes the game
function executeGame(){
    var play = toPlay();
        if (play === true) {
            var numOfWins = prompt('Play to how many wins?', '5');
            playTo(numOfWins);
        } else if (play === false) {
            console.log('Bye!')
        } else {
            console.log("oh well. next time.");
        }
}
executeGame();



