var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  var k = fs.readFileSync('index.html', 'utf-8');
  response.send(k);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
