const express = require("express");
const app = express();


app.get('/',function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});



//
// var firstNumber = document.getElementById("#firstNumber").value;
// var secondNumber = document.getElementById("#secondNumber").value;
