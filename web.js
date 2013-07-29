var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var text = fs.readFileSync('index.html');
var text = text.toString();

app.get('/', function(request, response) {
response.send(text);  
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
});
