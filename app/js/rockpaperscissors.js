////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
-'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
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
    
    pM = playerMove;
    cM = computerMove;
    // to account for input that doesn't match exactly, could write a switch()/case statement?
    // can it take 2 args?

    if (pM === cM) {
        winner = 'tie';
        return winner;
    } else if (pM === 'rock' && cM === 'paper') {
        winner = 'computer';
        return winner;
    } else if (pM === 'rock' && cM === 'scissors') {
        winner = 'player';
        return winner;
    } else if (pM === 'paper' && cM === 'scissors') {
        winner = 'computer';
        return winner;
    } else if (pM === 'paper' && cM === 'rock') {
        winner = 'player';
        return winner;
    } else if (pM === 'scissors' && cM === 'paper') {
        winner = 'player';
        return winner;
    } else if (pM === 'scissors' && cM === 'rock') {
        winner = 'computer';
        return winner;
    }
    
    while ((pM === '') || (pM === undefined)) {
        pM = getPlayerMove();
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
        
    while ((playerWins < 5) && (computerWins < 5)) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
        
        if (winner === 'player') {
            playerWins += 1; 
            console.log("Player won. Player has " + playerWins + " wins.");
        } 
        else if (winner === 'computer') {
            computerWins += 1;
            console.log("Computer won. Computer has " + computerWins + " wins.");
        } 
        else {
            console.log("There was a tie.");
        }
    }
    console.log("Player has " + playerWins + " wins and computer has " + computerWins + " wins.");
    return [playerWins, computerWins];
}

playToFive();