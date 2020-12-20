const express = require("express");
const app = express();

app.get("/", function(req, res){
res.send("Hello World")
});

app.get("/contact", function(req,res){
  res.send("Contact me at kmart914@gmail.com")
})

app.get("/about", function(req,res){
  res.send("My name is Kevin Martzolf")
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
