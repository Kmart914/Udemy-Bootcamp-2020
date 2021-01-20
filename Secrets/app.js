//jshint esversion:6


const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));








app.listen(process.env.PORT || 3000, function(){
});
