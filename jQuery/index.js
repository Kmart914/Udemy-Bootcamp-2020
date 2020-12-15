

$("body").keypress(function(event){
  console.log(event.key);
  $("h1").html(event.key);
})

$("body").on("mouseover", function(){
  $("h1").css("color", "purple")
});
// $("button").click(function(){
//   $("h1").css("color", "red");
// });
