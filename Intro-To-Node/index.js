var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperName = superheroes.random();
var myVillainName = supervillains.random();

console.log(mySuperName + " is fighting " + myVillainName);
