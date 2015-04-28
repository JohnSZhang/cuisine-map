var request = require('request');
var api = require('./secrets');
var config = require('./config');
var MongoClient = require('mongodb').MongoClient;
var libxmljs = require("libxmljs");
var BIG_OVEN_API = process.env.BIG_OVEN_API;
var DB = process.env.DB_URL;

// for testing
var fs = require('fs');
var fileName = 'thai.txt'

var saveResponse = function (data) {
  MongoClient.connect(url, function(err, db) {
    insertDocuments(db, function() {
      var collection = db.collection('recipes');
      data.forEach(function(recipe){
        collection.insert({
          id : recipe.id
        })
      })
      db.close();
   });
 });
};

var parseResponse = function (res) {
  var response = JSON.parse(res.body).body;

  fs.writeFile(fileName, JSON.stringify(res), function (err) {
    if (err) { throw err; }
    console.log(response);
  });
};

// default BIG OVEN API Example
module.exports = getRecipes =  function (keyword) {
  var apiKey = BIG_OVEN_API;
  var options = {};
  options.url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
            + keyword + "&api_key=" + apiKey;
  options.headers = { 'Accept': 'application/json' }
  request(options, function(err, res, body){
    if (err) {
      throw err
    }
    var data = parseResponse(res);
  });
}
// Sample Recipe get
getRecipes('thai');
