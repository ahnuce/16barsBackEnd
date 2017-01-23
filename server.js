var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log("I'm Aliveee");
});

//Root
app.get("/api/", function(req,res){
  res.send("Root/Index");
});
//wildcard
app.get("/api/:id", function(req,res){
  res.send(req.params.id);
});
