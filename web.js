var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var text = fs.readFileSync('index.html');
var text = text.toString();

console.log(text);
app.get('/', function(request, response) {
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
});
