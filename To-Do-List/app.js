//jshint esversion:6

const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser');

const app = express();

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var weekday = new Date();

var day = daysOfWeek[weekday.getDay()];

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();

var currentMonth = monthNames[d.getMonth()];

var dayOfMonth = new Date().getDate();

var dateDisplay = day + ", " + currentMonth + " " + dayOfMonth;

app.set('view engine', 'ejs');


app.use(express.static("public"));


app.get("/", function(req, res){
  res.render('list', {kindOfDay: dateDisplay});

});

  app.listen(3000, function(){
    console.log("Server is running on 3000");
    console.log(day);
    console.log(currentMonth);
  });
