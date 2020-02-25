var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hi Everybody, welcome to my blog :) !!! [Updated on 25/02/2020]');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
