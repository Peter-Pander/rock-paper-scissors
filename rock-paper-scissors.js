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

// Test the function
console.log(getComputerChoice());