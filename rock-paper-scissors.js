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

  switch (true) {
    case (humanChoice === computerChoice):
      console.log(`It's a tie! Both chose ${humanChoice}.`);
      break;

    case (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'rock')
    ):
      console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`);
      humanScore++; 
      break;

    default:
      console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`);
      computerScore++; 
      break;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
