/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Created a class named Phrase that held a constructor that passes in an argument named phrase
// The constructor holds on property that changes all the letters in the phrase to lower case
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Created a method named addPhraseToDIsplay()
  addPhraseToDisplay() {
    // Captured the elements required and plugged them into a variable
    const getDiv = document.getElementById("phrase");
    const ul = getDiv.querySelector("ul");
    //Set the ul element innerHTNL to an empty string
    ul.innerHTML = "";

    // Created a variable that split the phrase
    const letters = this.phrase.split("");
    // Created a forEach loop that looped through each letter
    letters.forEach((letter) => {
      // if the letter chosen was an empty space an li element was plugged in with the class name 'space'
      if (letter === " ") {
        ul.innerHTML += `<li class="space"> </li>`;

        //else if the letter chosen was a letter an li element was plugged in with the classname 'hide' and interpolation would reveal the letter
      } else {
        ul.innerHTML += ` <li class="hide letter ${letter}">${letter}</li>`;
      }
    });
  }

  // Created a method named checkLetter() that passed in the argument letter
  checkLetter(letter) {
    // Created an if/else statement that if this.phrase included the letter then return true else false
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }


  // Created a method named showMatchedLetter() that passed in the argument letter
  
  showMatchedLetter(letter) {
    let liElement = document.getElementsByClassName(letter);//Captured the element with the className letter and named it liElement
    // console.log(liElement);

    // Created a for loop that looped through the liElement 
    for (let i = 0; i < liElement.length; i++) {
      // console.log(liElement[i].textContent);
      // If the liElement[i] textContent equaled the letter
      if (liElement[i].textContent === letter) {
        //The liElement would remove the 'hide' class
        liElement[i].classList.remove("hide");
        //The liElement would add the "show" class
        liElement[i].classList.add("show");
      }
    }
  }
}
