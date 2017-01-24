var express = require('express');
var app = express();
var mongoose = require('./db/connection');
var Poem = mongoose.model("Poem");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, function(){
  console.log("I'm Aliveee");
});
//Root/index/all Poems
app.get("/api/poems/", function(req,res){
Poem.find({})
  .then(function(poems){
    res.json(poems)
  });
});
//New
app.post("/api/poems/", function(req,res){
  Poem.create(req.body.poem).then(function(poem){
    res.json(poem).catch(function(err){
      console.log(err);
    });
    // res.redirect("/poem/" + poem._id);
  });
});
//Show
app.get("/api/poems/:id", function(req,res){
  var desiredPoem = req.params.id;
  Poem.findById(desiredPoem).then(function(poemFromDB){res.json(poemFromDB)})
});
