var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hi Everybody, welcome to my blog :) !!! [Updated on 26/02/2020 17:00]');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
