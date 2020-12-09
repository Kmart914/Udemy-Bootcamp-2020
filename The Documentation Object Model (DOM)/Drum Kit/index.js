

var crash = document.getElementById("crash").addEventListener("click", playCrash);
var kick = document.getElementById("kick").addEventListener("click", playKick);
var snare = document.getElementById("snare").addEventListener("click", playSnare);
var kick = document.getElementById("kick").addEventListener("click", playKick);
var kick = document.getElementById("kick").addEventListener("click", playKick);
var kick = document.getElementById("kick").addEventListener("click", playKick);

function playCrash() {

var audio = new Audio("sounds/crash.mp3");
audio.play();

}


function playKick() {

var audio = new Audio("sounds/kick-bass.mp3");
audio.play();

}

function playSnare() {

var audio = new Audio("sounds/snare.mp3");
audio.play();

}
