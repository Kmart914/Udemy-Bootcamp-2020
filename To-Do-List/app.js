const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser');

const app = express();



app.get("/", function(req, res){
  res.sendFile("/index.html", { root : __dirname});

});

  app.listen(3000, function(){
    console.log("Server is running on 3000");
  });
