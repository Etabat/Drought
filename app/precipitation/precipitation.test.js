var expect = require('Chai').expect;
var request = require('request');

describe('View precipitation graph', function () {
  it('Populates the graph with relevant data', function (done) {
    request(
      'http://localhost:1337/precipitation',
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  })
});