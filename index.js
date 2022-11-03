const userName = prompt(`Welcome!, What is your name?`);

console.log(`It's nice having you ${userName} the game is going to be fun `)

console.log(`Let's roll the ball`)


let levels = 1;
let points = 0;
let maxStage = 10;


for (let u = 2; u < 10; u++) {
  let ranNum = Math.floor(Math.random() * u) + 1;
  let userGuess = parseInt(prompt(`${userName} Guest a number between 1 to ${u}`));
  if (userGuess < ranNum) {
    console.log(`Guess is a bit low`);
    console.log(`your guess is ${userGuess} and computer number is ${ranNum}`);
  }
  else if (userGuess > ranNum) {
    console.log(`Guess is a bit high`);
    console.log(`your guess is ${userGuess} and computer number is ${ranNum}`);
  }
  else {
    console.log(`Yes ${userName} you got it your guess ${userGuess} is exactly as computer number ${ranNum}`);
    points += 1;
    console.log(`You win 1 point your current points is ${points} `)
  }


}