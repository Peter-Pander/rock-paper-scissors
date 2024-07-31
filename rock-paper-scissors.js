let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const THIRD = 1 / 3;
  const TWO_THIRDS = 2 / 3;

  let randomNum = Math.random();
  let choice;

  switch (true) {
    case (randomNum <= THIRD):
      choice = "rock";
      break;
    case (randomNum > THIRD && randomNum <= TWO_THIRDS):
      choice = "paper";
      break;
    default:
      choice = "scissors";
  }

  return choice;
}

function getHumanChoice () {
  let humanChoice = prompt("What's your weapon of choice - rock, paper or scissors?");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
