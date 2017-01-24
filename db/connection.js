var mongoose = require("mongoose");
var mongo = require("mongodb").MongoClient;
mongoose.Promise = global.Promise;
console.log("hit the promise line");

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
