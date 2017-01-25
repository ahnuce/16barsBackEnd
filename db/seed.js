var mongoose = require('./connection');
var seedData = require('./seeds');
var userSeedData = require('./userseeds');
var Poem = mongoose.model('Poem');
var User = mongoose.model('User');
var passport = require('passport');
//Poem Removal & seed
Poem.remove({}).then(function(){
  Poem.collection.insert(seedData).then(function(){
    process.exit();
  })
  .catch(function(err){
    console.log(err);
  });
});
//User Removal & seed
User.remove({}).then(function(){
  User.collection.insert(userSeedData).then(function(){
    process.exit();
  })
  .catch(function(err){
    console.log(err);
  });
});
