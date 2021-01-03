//jshint esversion:6

const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser');

const app = express();

var addTasks = [];

app.use(express.static("public"));


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};


var day = today.toLocaleDateString("en-us", options)




app.get("/", function(req, res){
  res.render('header');
  res.render('list', {kindOfDay: day, addedTasks: addTasks});

});

app.post("/", function(req, res) {
  var addTask = req.body.newTask;

  addTasks.push(addTask);
  res.redirect("/");

})


app.listen(process.env.PORT || 3000, function(){
})
