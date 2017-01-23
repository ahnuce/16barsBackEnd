var mongoose = require('./connection.js')
var seedData = require('./seeds.js')

var Poem = mongoose.model('Poem');

Poem.remove({}).then(function(){
  Poem.collection.insert(seedData).then(function(){
    process.exit();
  });
});
