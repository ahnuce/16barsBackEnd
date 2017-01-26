var express = require('express');
var app = express();
var mongoose = require('./db/connection');
// importing model
var Poem = mongoose.model("Poem");
// for parsing body - form
var bodyParser = require("body-parser");
var cors = require('cors')



//Middleware Statements
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, function(){
  console.log("I'm Aliveee");
});
//Root/index/all Poems
app.get("/api/poems/", function(req,res){
Poem.find({})
  .then(function(poems){
    res.json(poems);
  });
});
//New
app.post("/api/poems/", function(req,res){
  console.log(req.body)
  Poem.create(req.body).then(function(poem){
    res.json(poem).catch(function(err){
      console.log(err);
    });
    res.redirect("/poem/" + poem._id);
  });
});
//Show
app.get("/api/poems/:id", function(req,res){
  Poem.findById(req.params.id).then(function(poemFromDB){res.json(poemFromDB)})
  .catch(function(err){
    console.log(err);
  });
});
//Delete
app.delete("/api/poems/:id", function(req, res){
  Poem.findOneAndRemove({_id: req.params.id}).then(function(){
    res.redirect("/api/poems").catch(function(err){
      console.log(err);
    });
  });
});
//Edit
app.put("/api/poems/:id", function(req, res){
  console.log(req.body);
  console.log(req.params.id);
  Poem.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(editedPoem){

  });
});
