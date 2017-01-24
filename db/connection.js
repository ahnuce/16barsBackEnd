var mongoose = require("mongoose");
var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:3000/poemDb";
mongoose.Promise = global.Promise;

var PoemSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
});

mongoose.model('Poem', PoemSchema);
mongoose.connect("mongodb://localhost/poemDb");
module.exports = mongoose;
// var seedData = require("./seed.json")
// module.exports = {
//   poems: seedData
// }
