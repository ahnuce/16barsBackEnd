var mongoose = require('./connection');
var seedData = require('./seeds');
var Poem = mongoose.model('Poem');


Poem.remove({}).then(function(){
  Poem.collection.insert(seedData).then(function(){
    process.exit();
  })
  .catch(function(err){
    console.log(err);
  })
});
