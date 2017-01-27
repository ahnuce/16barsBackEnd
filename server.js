var express = require('express');
var app = express();
var mongoose = require('./db/connection');
// importing model
var Poem = mongoose.model("Poem");
var User = mongoose.model("User");
// for parsing body - form
var bodyParser = require("body-parser");
//passport-facebook
var passport = require('passport'),
FacebookStrategy = require('passport-facebook').Strategy;
//Middleware Statements
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Passport Middleware
passport.use(new FacebookStrategy({
    clientID: 1443386915732607,
    clientSecret: "2b9c7d8122492852cc866569beaa07e4",
    callbackURL: "localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(User, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

//listen statment
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



// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
