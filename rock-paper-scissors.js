// Create a function named getComputerChoice
function getComputerChoice() {
  // Create the variable "randomNum" and store the Math.random() method in it.
  // The Math.random method returns a random number that’s greater than or equal to 0 and less than 1.
  // This created number is therefore stored in randomNum. 
  let randomNum = Math.random();
  // if randomNum returns a number <= 1/3 return “rock”
  // if randomNum returns a number > 1/3 and <= 2/3 return “paper”
  // if randomNum returns a number > 2/3 return "scissors"
  if (randomNum <= 1 / 3) {
    return "rock";
  } else if (randomNum > 1 / 3 && randomNum <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Create a new function named getHumanChoice
// Write the code so that getHumanChoice 
// will return one of the valid choices 
// depending on what the user inputs.
function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice (Rock, Paper or Scissors):");
  return humanChoice;
}
// Test the function
console.log(getHumanChoice());