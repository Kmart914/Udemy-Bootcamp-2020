
  var buttonColors = ["red", "green", "yellow", "blue"];

  var gamePattern = [];
  var userClickedPattern = [];

  var level = 0;
  var gameStarted = false;

  $("body").keypress(function(event){
    if (gameStarted === false){
      nextSequence();
      gameStarted = true;
      console.log(gamePattern)
    };

  });


  function nextSequence(){

      userClickedPattern = [];

      level ++;
      $("h1").text("Level " + level);

      var randomNumber = Math.floor(Math.random()* Math.floor(4));
      var randomColor = buttonColors[randomNumber];
      gamePattern.push(randomColor);
      $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

      var audio = new Audio("sounds/" + randomColor + ".mp3");
      audio.play();


  };

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
   if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function(){
      nextSequence();
    }, 1000);
  }
} else {

$("body").css("background-color", "red");
$("h1").text("Wrong, try again!")
setTimeout("location.href = 'index.html'",2000);
}

}


$(".redButton").click(function(){
  var audio = new Audio("sounds/red.mp3");
   audio.play();
  $(".redButton").fadeOut(100).fadeIn(100);
  userClickedPattern.push($(this).attr("id"));
  checkAnswer(userClickedPattern.length-1);

});

$(".blueButton").click(function(){
  var audio = new Audio("sounds/blue.mp3");
   audio.play();
   $(".blueButton").fadeOut(100).fadeIn(100);
   userClickedPattern.push($(this).attr("id"));
   checkAnswer(userClickedPattern.length-1);

});

$(".greenButton").click(function(){
  var audio = new Audio("sounds/green.mp3");
   audio.play();
   $(".greenButton").fadeOut(100).fadeIn(100);
   userClickedPattern.push($(this).attr("id"));
   checkAnswer(userClickedPattern.length-1);

});

$(".yellowButton").click(function(){
  var audio = new Audio("sounds/yellow.mp3");
   audio.play();
   $(".yellowButton").fadeOut(100).fadeIn(100);
   userClickedPattern.push($(this).attr("id"));
   checkAnswer(userClickedPattern.length-1);

});
