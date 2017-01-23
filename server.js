var express = require('express');
var app = express();
var mongoose = require('./db/connection');
var Poem = mongoose.model('Poem');

app.listen(3000, function(){
  console.log("I'm Aliveee");
});

//Root
app.get("/api/", function(req,res){
  Poem.find()
  .then((poems) =>{
    res.send(poems)
  })
});
//wildcard
app.get("/api/:id", function(req,res){
  res.send(req.params.id);
});
