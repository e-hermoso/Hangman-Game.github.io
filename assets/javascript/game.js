var wins = 0;
var guessesLeft = 3;
var guesses = 0;
var guessesSoFar = [];
var userGuess = null;
var lettersGuessed = lettersMatched = '';
var numLettersMatched = 0;

var words = ["blue", "green", "red",]
// var availableLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wordChoice = words[Math.floor(Math.random() * words.length)];

// we are storing the tag <ul> into the variable letters by calling its id = letters.
var letters = document.getElementById("letters");

// we are creating a tag <li>. We use javascript in order to access. The <ul> tag in order to access
// the <ul> tag in order to create a list tag.
// we want to be able to change the tag and add the <li> tag after looping it.
letters.innerHTML = '<li class="current-word">Current word:</li>';
console.log(letters);
// Store the <li> tag of every single letter in that word (wordChoice)
var wordLetter;
var i;
for (i = 0; i < wordChoice.length; i++) {
    wordLetter = '<li class="letter letter' + wordChoice.charAt(i).toLowerCase() + '">' + wordChoice.charAt(i).toLowerCase() + '</li>';
    // want to make sure its in the div before the last one.
    // [element.insertAdjacentHTML(position,text)].
    // we want it after the last child (child is the li).
    // note that the parent tag is <ul>.
    // beforened means right after the last child <li> So you are adding the tag.

    letters.insertAdjacentHTML('beforeend', wordLetter);
    // console.log(wordLetter);
}
// wordChoice.split("");
// var split = wordChoice.split("");
// var element3 = document.getElementById("p3");
//     element3.innerHTML = wins;
    // console.log(split)

    function reset() {console.log("game over");
    wordChoice = words[Math.floor(Math.random() * words.length)];
    letters.innerHTML = '<li class="current-word">Current word:</li>';
    console.log(letters);
    for (i = 0; i < wordChoice.length; i++) {
        wordLetter = '<li class="letter letter' + wordChoice.charAt(i).toLowerCase() + '">' + wordChoice.charAt(i).toLowerCase() + '</li>';
        // want to make sure its in the div before the last one.
        // [element.insertAdjacentHTML(position,text)].
        // we want it after the last child (child is the li).
        // note that the parent tag is <ul>.
        // beforened means right after the last child <li> So you are adding the tag.

        letters.insertAdjacentHTML('beforeend', wordLetter);
        console.log(wordLetter);
    }
    guessesLeft = 3;
    // console.log(wordChoice);
    userGuess = guessesSoFar;
    guessesSoFar = [];
    // console.log(guessesSoFar);
  }

  var player = document.onkeyup = function(event){
  var userGuess = event.key.toLowerCase();
  var element1 = document.getElementById("p2");
      element1.innerHTML = userGuess;
      // console.log(userGuess);

  if (wordChoice.indexOf(userGuess) === -1) {
    guessesSoFar.push(userGuess)
    guessesLeft--;
    var element2 = document.getElementById("p1");
        element2.innerHTML = guessesLeft;

    var element1 = document.getElementById("p2");
        element1.innerHTML = guessesSoFar;
  //   console.log(guessesSoFar);
    // console.log("nice try");
  //   console.log(guessesLeft);
  }
  else {
    console.log("good job")
    if (wordChoice.indexOf(userGuess) > -1) {
        var lettersToShow = document.querySelectorAll(".letter" + userGuess.toLowerCase());
        // returns all elements in a a documnet that matches a css selector[ class or id].

        for (var i = 0; i < lettersToShow.length; i++) {
            lettersToShow[i].classList.add("correct");
            }
            console.log();
            /* check to see if letter appears multiple times */
            for (var j = 0; j < wordChoice.length; j++) {
                if (wordChoice.charAt(j) === userGuess) {
                    numLettersMatched = numLettersMatched + 1;
                  }
              }
        }
        // console.log(lettersToShow[i]);
  }
  if(guessesLeft <= 0){
          reset();
        }
}
