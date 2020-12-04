

var randomNumberOne = Math.floor((Math.random() * 6) + 1);
var randomNumberTwo = Math.floor((Math.random() * 6) + 1);



function randomOne () {
  if ( randomNumberOne === 1) {
    document.getElementsByClassName("playerOneDice")[0].src = "images/dice1.png";
  } else if ( randomNumberOne === 2) {
    document.getElementsByClassName("playerOneDice")[0].src = "images/dice2.png";
  } else if ( randomNumberOne === 3) {
    document.getElementsByClassName("playerOneDice")[0].src = "images/dice3.png";
  } else if ( randomNumberOne === 4) {
    document.getElementsByClassName("playerOneDice")[0].src = "images/dice4.png";
  } else if ( randomNumberOne === 5) {
    document.getElementsByClassName("playerOneDice")[0].src = "images/dice5.png";
  } else if ( randomNumberOne === 6) {
    document.getElementsByClassName("playerOneDice")[0].src = "images/dice6.png";
  }
}

function randomTwo () {
  if ( randomNumberTwo === 1) {
    document.getElementsByClassName("playerTwoDice")[0].src = "images/dice1.png";
  } else if ( randomNumberTwo === 2) {
    document.getElementsByClassName("playerTwoDice")[0].src = "images/dice2.png";
  } else if ( randomNumberTwo === 3) {
    document.getElementsByClassName("playerTwoDice")[0].src = "images/dice3.png";
  } else if ( randomNumberTwo === 4) {
    document.getElementsByClassName("playerTwoDice")[0].src = "images/dice4.png";
  } else if ( randomNumberTwo === 5) {
    document.getElementsByClassName("playerTwoDice")[0].src = "images/dice5.png";
  } else if ( randomNumberTwo === 6) {
    document.getElementsByClassName("playerTwoDice")[0].src = "images/dice6.png";
  }
}

randomOne();
randomTwo();
