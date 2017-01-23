var express = require('express');
var app = express();
var mongoose = require('./db/connection');
var Poem = mongoose.model('Poem');

app.listen(3000, function(){
 console.log("I'm Aliveee");
});

//Root/index/all Poems
app.get("/api/poems/", function(req,res){
 res.send(Poem.find({})
 .then(function(poems){
   res.send(poems.title)
 })
);
});
//New
app.post("/api/poems/", function(req,res){
 Poem.create(req.body.poem).then(function(poem){
   res.redirect("/poem/" + poem._id);
 });
});
//Show
app.get("/api/poems/:id", function(req,res){
 res.send(req.params.id);
});
