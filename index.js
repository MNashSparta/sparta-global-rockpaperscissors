// Variables
var gameLoop = true;
var playerChoice = 0;
var computerChoice = 0;
var playerScore = 0;
var computerScore = 0;

function playerTurn() {
  playerChoice = parseInt(prompt("Pick your poison. (1) Rock (2) Paper (3) Scissors"));
}

function computerTurn() {
  computerChoice = Math.floor(Math.random() * 3);
}

function decideWinner() {
  if (playerChoice === computerChoice) {
    gameLoop = confirm("It's a draw. W:" + playerScore + " L:" + computerScore + " \n Play again?");
  } else if ((playerChoice === 0 && computerChoice === 1) || (playerChoice === 1 && computerChoice === 2) || (playerChoice === 2 && computerChoice === 0)) {
    playerScore++;
    gameLoop = confirm("You win! W:" + playerScore + " L:" + computerScore + " \n Play again?");
  } else {
    computerScore++;
    gameLoop = confirm("You lost. W:" + playerScore + " L:" + computerScore + " \n Play again?");
  }
}

function scoreCounter() {
  var score = 0;
  return function() {
    score++;
    return score;
  }
}

// Game Loop
while (gameLoop) {
  playerTurn();
  computerTurn();
  decideWinner();
}
