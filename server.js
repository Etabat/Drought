var express = require('express');
var app = express();

app.get('/precipitation', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname + '/app/precipitation/json/precipitation.data.json');
  console.log('testing sample data')
});

app.get('/reservoirs', function (req, res) {
  res.sendFile(__dirname + '/app/reservoirs/json/reservoirs.data.json');
  console.log('testing sample data')
});

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public/dist'));
app.use('/app/chart-app/', express.static(__dirname + '/app/chart-app/'));
app.use('/app/precipitation/', express.static(__dirname + '/app/precipitation/'));
app.use('/app/reservoirs/', express.static(__dirname + '/app/reservoirs/'));

app.listen(1337);
console.log('Connected!');