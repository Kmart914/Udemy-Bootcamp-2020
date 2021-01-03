//jshint esversion:6

const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser');

const app = express();

const homeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

app.use(express.static("public"));


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(req, res){
res.render('home', {homeContent: homeContent});
});

app.get("/about", function(req, res){
res.render('about', {homeContent: homeContent});
});

app.get("/contact", function(req, res){
res.render('contact', {homeContent: homeContent});
});

app.get("/compose", function(req, res){
res.render('compose');
});

app.post("/", function(req, res) {


})


app.listen(3000, function(){
  console.log("Server is running on 3000");
})
