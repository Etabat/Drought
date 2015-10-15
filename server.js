var express = require('express');
var app = express();

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/app/chart-app', express.static(__dirname + '/app/chart-app'));
app.use(express.static(__dirname + '/public/dist'));

app.listen(1337);
console.log('Connected!');

// ONLY ADD PUBLIC/DIST to the GIT REPOSITORY
// APP HOLDS THE ANGULAR AND D3 CODE
// PUBLIC JS HOLDS REGULAR JS FILES
// VENDOR FILES CAN BE DOWNLOADED VIA BOWER.json