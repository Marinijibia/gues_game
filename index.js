var name = window.prompt("Whats tour name");
var greeting = document.getElementById("welcome").innerHTML = `Hi! ${name} welcome to JK guess game`;
window.alert(`${greeting}`);

var mes1 = document.getElementById('mes1');
var mes2 = document.getElementById('mes2');
var mes3 = document.getElementById('mes3');

var answer = Math.floor(Math.random()*2) + 1;
var numOfGuesses = 0;
var guessedNums = [];

function guess() {
    var userGuess = document.getElementById("user-input").value;
    if (userGuess < 1 || userGuess > 2){
        alert(`kindly guess a range between 1 and 2`);
    }
    else{
        guessedNums.push(userGuess);
        numOfGuesses += 1;

        if(userGuess < answer){
            mes1.textContent = `Your answer is too low.`;
            mes2.textContent = `No. of guesses: ${numOfGuesses}`;
            mes3.textContent = `Guessed numbers are: ${guessedNums}`;
        }
        else if (userGuess > answer){
            mes1.textContent = `Your answer is too high.`;
            mes2.textContent = `No. of guesses: ${numOfGuesses}`;
            mes3.textContent = `Guessed numbers are: ${guessedNums}`;
        }
        else if (userGuess == answer){
            mes1.textContent = `Yesss you have win ${name}`;
            mes2.textContent = `The number was: ${answer}`;
            mes3.textContent = `You guessed it in ${numOfGuesses} guesses`
            document.getElementById('btn').disabled = true;
        }
    }
}



