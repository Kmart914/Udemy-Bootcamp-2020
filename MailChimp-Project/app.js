const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile("/index.html", { root : __dirname});
})


app.post("/", function(req, res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us7.api.mailchimp.com/3.0/lists/9ee75bfa11"

  const options = {
    method: "POST",
    auth: "kmart914:fce85985b6219e8ebc0736a7bccf00b4-us7"
  }

const request = https.request(url, options, function(response){


    response.on("data", function(data){
      console.log(JSON.parse(data));
      console.log(response.statusCode);
      if (response.statusCode === 200 ){
        res.sendFile("/success.html", { root : __dirname});
      } else {
        res.sendFile("/failure.html", { root : __dirname});
      }
    })
  })

request.write(jsonData);
request.end();


})


app.post("/failure", function(req, res){
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server is running on 3000");
})


// API Key - fce85985b6219e8ebc0736a7bccf00b4-us7

// List ID - 9ee75bfa11
