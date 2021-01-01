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


app.get("/", function(req, res){
res.render('blog', );
});

app.post("/", function(req, res) {


})


app.listen(3000, function(){
  console.log("Server is running on 3000");
})
