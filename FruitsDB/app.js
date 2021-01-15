const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    // required: [true, "Please check your entry, no name specified"]
  },
  rating : {
    type: Number,
    max: 10,
    min: 0
  },
  review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

  rating: 7,
  review: "Tastes great!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Tastes great!"
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Tastes great!"
});

const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Tastes great!"
});


// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log("Error");
//   }else{
//     console.log("Success!");
//   }
// })


// fruit.save();




// Fruit.deleteOne({name: "Apple"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success!");
//   }
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

Person.updateOne({_id: "6000c39308c09e55b48638d3"}, {favoriteFruit: kiwi}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("success");
  }
})

const pineapple = new Fruit({
  name: "pineapple",
  score: 8,
  review: "Love it!"
});

// pineapple.save();

const person = new Person({
  name: "Katelyn",
  age: 28,
  favoriteFruit: pineapple
})



// const person = new Person({
//   name: "Kevin",
//   age: 28
// });


// person.save();



Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
      }
});
