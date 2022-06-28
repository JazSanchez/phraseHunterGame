/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// const phrase = new Phrase();
// const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());


// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// // const phrase = new Phrase(randomPhrase.phrase);
// // phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//Created an empty variable named game
let game ='';
//Created a variable with the element with the id of 'btn_reset' and named it button
const btn = document.getElementById("btn__reset");

//Created an event listener that listened for a click event and a callback function that listened for newGame(), resetGame() and startGame()
btn.addEventListener('click', function() {
 game = new Game()
 game.resetGame();
 game.startGame();

});

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

// Created a variable that store all the elements with the class name 'key'
let buttons = document.querySelectorAll('.key');


//Did a forEach loop to loop through each button 
buttons.forEach(button =>{

    // Did an event listener that listens for a click event and a callback function 
    button.addEventListener('click', function() {

        game.handleInteraction(this)
         
        
        
        })

})

