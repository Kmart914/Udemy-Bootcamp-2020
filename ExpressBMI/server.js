const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res) {
  res.sendFile("/index.html", { root : __dirname});
});


app.post("/", function(req, res) {

  var height = Number(req.body.height)/39.37;
  var heightSquared = height * height;
  var weight = Number(req.body.weight)/2.205;
  var result = weight/heightSquared;

  res.send("Your BMI is " + result);

});



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
