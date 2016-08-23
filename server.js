var express = require('express');
var app = express();
var path = require('path');
var jsonServer = require('json-server')

var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', jsonServer.router(__dirname + '/db.json'));

app.listen(port, function() {
    console.log('The tasks server has been started on port ' + port);
});