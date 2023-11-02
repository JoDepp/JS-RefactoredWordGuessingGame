const guessedLetters = document.querySelector(".guessed-letters"); //ul list where the players guessed letters will appear
const guessLetterButton = document.querySelector(".guess");  
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress"); //empty paragraph where the word in progress will appear
const remainingGuesses = document.querySelector(".remaining ");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message"); //empty paragraph where messages will appear when the player guesses a letter
const playAgainBtn = document.querySelector("play-again hide"); //prompt to play again
const word = "magnolia";

      //function to update the paragraph's innerText for the "words in progress" letters with circle symbols

const placeholder = (word) => {     //word is a parameter
    const placeholderLetters = [];  //creates an array as the placeholder for correct letters guessed
        for (const letter of word) {  //iterates through each letter of the word
            console.log(letter);  //logs each letter to the console
          placeholderLetters.push("●"); //pushes the dot into the array
        }
wordInProgress.innerText = placeholderLetters.join("");  // joining the array to the string
    };
    placeholder(word); //calling the function and pass the word variable as the argument

//Event Listener for the button
guessButton.addEventListener("click", function(e) {
    e.preventDefault();  //prevents page from reloading
    const inputValue = letterInput.value; //capture the value of the input
    console.log(inputValue); //log out value of the variable capturing the input
    letterInput.value=" "; //empty the value of the input
});