var express = require('express');
var app = express();
var mongoose = require('./db/connection');
// importing model
var Poem = mongoose.model("Poem");
// for parsing body - form
var bodyParser = require("body-parser");

//Middleware Statements
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, function(){
  console.log("I'm Aliveee");
});
//Root/index/all Poems
app.get("/api/poems/", function(req,res){
Poem.find({})
  .then(function(poems){
    res.send(poems);
    res.json(poems);
  });
});
//New
app.post("/api/poems/", function(req,res){
  Poem.create(req.body.poem).then(function(poem){
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
  Poem.findOneAndUpdate({_id: req.params.id}, req.body.poem, {new: true}).then(function(editedPoem){
    res.redirect("/api/poems/" + req.params.id);
  });
});
