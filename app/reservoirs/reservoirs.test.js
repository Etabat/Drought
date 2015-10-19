var expect = require('Chai').expect;
var request = require('request');

describe('View all reservoirs un California', function () {
  it('Populates the graph with relevant data', function (done) {
    request(
        'http://localhost:1337/reservoirs',
        function(error, response) {
          expect(response.statusCode).to.equal(200);
          done();
        }
    );
  })
});