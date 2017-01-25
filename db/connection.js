var mongoose = require("mongoose");
var mongo = require("mongodb").MongoClient;
// replaces mongoose promises
mongoose.Promise = global.Promise;

var PoemSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
});

var UserSchema = new mongoose.Schema(
  {
    username:String,
    password:String
  });
//test if branch will change
mongoose.model('Poem', PoemSchema);
mongoose.model('User', UserSchema);
mongoose.connect("mongodb://localhost/poemDb");
module.exports = mongoose;
