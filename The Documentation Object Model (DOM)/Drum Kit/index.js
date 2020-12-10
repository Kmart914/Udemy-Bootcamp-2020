
var numberOfDrums = document.querySelectorAll(".drum").length;


for ( var i = 0; i<numberOfDrums; i++)   {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {


    console.log(this.id);

    var audio = new Audio("sounds/" + this.id + ".mp3");
    audio.play();



  });

}








//
// var crash = document.getElementById("crash").addEventListener("click", playCrash);
// var kick = document.getElementById("kick").addEventListener("click", playKick);
// var snare = document.getElementById("snare").addEventListener("click", playSnare);
// var tom1 = document.getElementById("tom1").addEventListener("click", playTomOne);
// var tom2 = document.getElementById("tom2").addEventListener("click", playTomTwo);
// var tom3 = document.getElementById("tom3").addEventListener("click", playTomThree);
// var tom4 = document.getElementById("tom4").addEventListener("click", playTomFour);
//
// function playCrash() {
//
// var audio = new Audio("sounds/crash.mp3");
// audio.play();
//
// }
//
//
// function playKick() {
//
// var audio = new Audio("sounds/kick-bass.mp3");
// audio.play();
//
// }
//
// function playSnare() {
//
// var audio = new Audio("sounds/snare.mp3");
// audio.play();
//
// }
//
// function playTomOne() {
//
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
//
// }
//
// function playTomTwo() {
//
// var audio = new Audio("sounds/tom-2.mp3");
// audio.play();
//
// }
//
// function playTomThree() {
//
// var audio = new Audio("sounds/tom-3.mp3");
// audio.play();
//
// }
//
// function playTomFour() {
//
// var audio = new Audio("sounds/tom-4.mp3");
// audio.play();
//
// }
