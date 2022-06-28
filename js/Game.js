/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// Created a class named Game with a constructor that holds 3 properties
class Game {
  constructor() {
    this.missed = 0; //missed property will track number of missed guesses
    this.phrases = [
       new Phrase ( "Hello World") ,
       new Phrase ("Pull yourself together" ),
       new Phrase ( "That is the last straw" ),
       new Phrase ( "Time flies when you are having fun" ),
       new Phrase ( "We will cross that bridge when we come to it" ),
    ]; // phrase property will hold an array of objects
    this.activePhrase = null; // The activePhrase property will hold the current
  }


  // Created a method named getRandomPhrase() which produces a random phrase from the this.phrase property
  getRandomPhrase() {
    const ranNum = Math.floor(Math.random() * this.phrases.length);//Used Math.random and multiplied it with the length of this.phrase property and used Math.floor on it and plugged it into a variable. 
    const randomPhrase = this.phrases[ranNum];// Created a variable that would hold the random phrase generated
    return randomPhrase;// Returned a random phrase
  }

  //Created a startGame() method that initializes the game with a new phrase
  startGame() {
    const overLay = document.getElementById("overlay");//Created a variable that held an element witht the id 'overlay'
    overLay.style.display = "none";// Set the style.display on the overlay variable to none
    this.activePhrase = new Phrase(this.getRandomPhrase().phrase);//Plugged a new random phrase in the this.activePhrase property
    this.activePhrase.addPhraseToDisplay();// Displayed the random active phrase
  }


// Created a method named handleInteractions() that passes in an argument(button)
  handleInteraction(button) {
    // console.log(button)
    let buttonPressed = button.textContent;// Captured the text.Content of the button element and plugged it into variable
    button.disabled = "true";// disabled the button

    // Created an if statement which checked to see if the active phrase included the letter/button being pressed
    if (this.activePhrase.phrase.includes(buttonPressed)) {
      button.classList.add("chosen");// added a class name of chosen to the button/letter pressed 
      this.activePhrase.showMatchedLetter(buttonPressed);// Showed the letter/button pressed that was in the active phrase
      if (this.checkForWin()) {// Created an if statment that checked to see if the player has won
        this.gameOver(true);// If this was true the game was over
      }
    } else if (!this.activePhrase.phrase.includes(buttonPressed)) {// Created an if else statement that checked to see if the active phrase did not include a letter/button being pressed
      button.classList.add("wrong");//added a class name of wrong to the button/letter being pressed
      this.removeLife();//Removed a life from the score board
    }
  }

  // Created a method named resetGame() 
  resetGame() {
    // Created variables for the elements required 
    let scoreBoard = document.querySelectorAll("img");
    const getDiv = document.getElementById('phrase')
    const ul = getDiv.querySelector('ul');
    let buttons = document.querySelectorAll('.key');

    // Created a forEach loop that looped through each button being pressed and changed any with the class name 'chosen' or 'wrong' to 'key' also I set the disabled property on the button to false
    buttons.forEach(button => {
     button.classList.remove('chosen');
     button.classList.remove('wrong');
     button.classList.add('key');
     button.disabled = false;

    })
   
    // Created a forEach loop that would loop through the element scoreBoard and set all the src attribute to images/liveHeart.png
    scoreBoard.forEach(score => {
      score.src = "images/liveHeart.png";
    });
  
  }


  // Created a method named checkForWin() 
  checkForWin() {
    let show = document.getElementsByClassName("show"); //Grab the element with a class name .show
    let newPhrase = this.activePhrase.phrase; // Grab the active phrase and plug it into a new variable
    let noSpace = newPhrase.replace(/\s+/g, ""); // Used replace() to remove any spaces in my newPrase variable
    //  console.log(noSpace.length)

    //   console.log(show.length)
    if (noSpace.length === show.length) {
      // Created an if statment that checked to see if the length of my noSpace variable matched the length of the show variable.
      return true; // Returned true if the above condition was met
    } else {
      return false; // Return false if the above condition was not met
    }
  }

  // Created a method named removeLife()
  removeLife() {
    let scoreBoard = document.querySelectorAll("img"); //Created a variable that held all img and named it scoreBoard
    if (this.missed < 4) { // Created an if statement that checked if the this.missed property was less than 4
      scoreBoard[this.missed].src = "images/lostHeart.png"; // Plugged in the this.missed property in the scoreBoard variable and set the src attribute to "images/lostHeart.png"
      this.missed += 1; // added one to the this.missed property everytime a letter was missed 
    } else { 
      this.gameOver();//If the this.missed property was greater than 4 the game called the  gameOver() method
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */


  // Created a method named gameOver() that passed in an argument named gameWon
  gameOver(gameWon) {
    const overLay = document.getElementById("overlay"); // Created a variable that captured the element with the id overlay

    // Created an if/else statment that checked
    //if the gameWon then the innerHTMl of the element with the id of "game-over-message" would display "You win, please play again!"
    // Set the overlay element a class name of win
    // Set the overlay element display style to none;
    //Else if the game lost then the innerHTMl of the element with the id of "game-over-message" would display "You lose, please try again!"
    //  Set the overlay element display style to none;
    if (gameWon) {
      document.getElementById("game-over-message").innerHTML = "You win, please play again!";
      overLay.className = "win";
      overLay.style.display = "";
    } else {
      document.getElementById("game-over-message").innerHTML = "You lose, please try again!";
      overLay.className = "lose";
      overLay.style.display = "";
    }
  }
}
