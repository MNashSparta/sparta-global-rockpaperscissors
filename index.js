// Variables
gameLoop = true;
playerChoice = 0;
computerChoice = 0;
playerScore = 0;
computerScore = 0;

function playerTurn() {
  playerChoice = parseInt(prompt("Pick your poison. (1) Rock (2) Paper (3) Scissors"));
}

function computerTurn() {
  computerChoice = Math.floor(Math.random() * 3);
}

function decideWinner() {
  if (playerChoice === computerChoice) {
    console.log("W:"+playerScore+" L:"+computerScore)
    gameLoop = confirm("It's a draw. Play again?");
  }
  else if ((playerChoice === 0 && computerChoice === 1) || (playerChoice === 1 && computerChoice === 2) || (playerChoice === 2 && computerChoice === 0))
  {
    playerScore ++;
    console.log("W:"+playerScore+" L:"+computerScore)
    gameLoop = confirm("You win! Play again?");
  }
  else
  {
    computerScore ++;
    console.log("W:"+playerScore+" L:"+computerScore)
    gameLoop = confirm("You lost. Play again?");
  }
}

// Game Loop
while (gameLoop) {
  playerTurn();
  computerTurn();
  decideWinner();
}
