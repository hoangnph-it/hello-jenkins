var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('Hi Everybody, welcome to my blog :) !!! [Updated on 25/02/2020]', done);
  });
});
