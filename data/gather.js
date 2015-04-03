var request = require('request');
var api = require('./secrets');
var BIG_OVEN_API = process.env.BIG_OVEN_API;

// default BIG OVEN API Example
module.exports = function () {
  var apiKey = BIG_OVEN_API;
  var titleKeyword = "thai";
  var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
            + titleKeyword
            + "&api_key="+apiKey;
  request(url, function(err, res, body){
      console.log(err);
      console.log('response is ');
      console.log(res);
      console.log('body is ' + body)
  });
}
