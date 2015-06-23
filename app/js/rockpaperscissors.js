////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(playerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
	if (!playerMove) {
		playerMove = getInput();
	}
	return playerMove;
}

function getComputerMove(computerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
	if (!computerMove) {
		computerMove = randomPlay();
	}
	return computerMove;
}

function getWinner(playerMove,computerMove) {
	// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var winner;
    if (playerMove === 'rock') {
    	if (computerMove === 'rock') {
    		winner = 'tie';
    	} else if (computerMove === 'paper') {
    		winner = 'computer'
    	} else {
    		winner = 'player'
    	}
    } else if (playerMove === 'paper') {
    	if (computerMove === 'paper') {
    		winner = 'tie'
    	} else if (computerMove === 'rock') {
    		winner = 'player'
    	} else {
    		winner = 'computer'
    	}
	} else {
		if (computerMove === 'scissors') {
			winner = 'tie';
		} else if (computerMove === 'paper') {
			winner = 'player';
		} else {
			winner = 'computer';
		}
	}
	return winner;
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins <= (x-1) && computerWins <= (x-1)) {
    	playerMove = getPlayerMove();
    	computerMove = getComputerMove();
    	theWinner = getWinner(playerMove, computerMove);
        if (theWinner == 'player') {
            playerWins ++;
        } else {
            computerWins ++;
        }
    	console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
		console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
		// console.log([playerWins, computerWins]);
	}
    return [playerWins, computerWins];
}

