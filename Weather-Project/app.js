const express = require("express");
const https = require("https");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

  res.sendFile("/index.html", { root : __dirname});


})


app.post("/", function(req, res) {

      var city = (req.body.city);

      const apiKey = "a7388ba3bc8873b5fa1c9709c90dfa20";

      const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + apiKey;


      https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
          const weatherData = JSON.parse(data);
          const temp = weatherData.main.temp;
          const description = weatherData.weather[0].description;
          const icon = weatherData.weather[0].icon;
          const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

          console.log(temp);
          console.log(description);
          console.log(weatherData);


          res.write("<h1> The temperature in " + city + " is currently " + temp + "F.</h1>");
          res.write("<h3> The weather is currently " + description + ".</h3>")
          res.write("<img src=" + imgUrl + ">")
    })
  })
})

app.listen(3000, function(){
  console.log("Server is running on 3000");
})
