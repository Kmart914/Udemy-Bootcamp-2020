
const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day = today.toLocaleDateString("en-us", options)





mongoose.connect("mongodb+srv://kmart914:KAm9141992@cluster0.8w6nh.mongodb.net/TasksDB?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})

const taskSchema = {
  name: String
};

const Task = mongoose.model("task", taskSchema);


const task1 = new Task({
  name:"Welcome to your To Do List!"
});

const task2 = new Task({
  name: "Hit the + to add a task"
});

const task3 = new Task({
  name:"<--- Click here when you finished that task"
});

const defaultItems = [task1, task2, task3];

const listSchema = {
  name: String,
  items: [taskSchema]
}

const List = mongoose.model("List", taskSchema);






app.get("/", function(req, res){

  Task.find({}, function(err, foundItems){

    if (foundItems.length === 0){
      Task.insertMany(defaultItems, function(err){
        if(err){
          console.log(err);
        }else{
          console.log("Success!");
        }
      });
      res.redirect("/");
    } else {
      res.render('list', {kindOfDay: "Today", addedTasks: foundItems});
    }
  });



});

// app.get("/:customListName", function(req, res){
//    const customListName = req.params.customListName;

//    List.find({name: customListName}, function(err, foundList){
//      if(!err){
//        if(!foundList){
//          //Create a new List
//             const list = new List({
//               name: customListName,
//               items: defaultItems
//             });
//              list.save();
//        }else{
//          //Show existing list
//          res.render("list", {kindOfDay: foundList.name, addedTasks: foundList.items});
//        }
//      }
//    })
//
// });


app.post("/", function(req, res) {
  var addTask = req.body.newTask;

  const task = new Task({
    name: addTask
  });

    task.save();
    res.redirect("/");

})

app.post("/delete", function(req, res) {
const checkedId = req.body.checkbox;

Task.deleteOne({_id:checkedId}, function(err){
  if(err){
    console.log(err);
  }else{
    res.redirect("/");
    }
  })
})


app.listen(process.env.PORT || 3000, function(){
});
