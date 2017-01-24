var mongoose = require("mongoose");
var mongo = require("mongodb").MongoClient;
// replaces mongoose promises
mongoose.Promise = global.Promise;

var PoemSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
});

mongoose.model('Poem', PoemSchema);
mongoose.connect("mongodb://localhost/poemDb");
module.exports = mongoose;
