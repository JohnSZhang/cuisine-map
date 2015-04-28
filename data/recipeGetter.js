var request = require('request');
var api = require('./secrets');
var BIG_OVEN_API = process.env.BIG_OVEN_API;

module.exports = function (recipeId) {
  var apiKey = BIG_OVEN_API;
  var url = "http://api.bigoven.com/recipe/" + recipeId + "?api_key="+apiKey;
  request(url, function(err, res, body){
      console.log(err);
      console.log('response is ');
      console.log(res);
      console.log('body is ' + body)
  });
}
