var should = require('chai').should();
var princessNames = require('../src/lib/index.js');

describe('princess-names', function () {
  it('should contains at least 10 items', function () {
    var enoughNames = Object.keys(princessNames.all).length > 9;
    enoughNames.should.equal(true);
  });

  it('should return a princess name', function () {
    var princess = princessNames.random();
    var enoughLength = princess.length > 2;
    princess.should.be.a('string');
    enoughLength.should.equal(true);
  });

  it('should return Aire', function () {
    var allNames = princessNames.all;
    should.equal(allNames[0], 'Adora');
  });

  it('should return undefined', function () {
    var allNames = princessNames.all;
    should.equal(allNames[10000], undefined);
  });
});

var rewire = require('rewire');
var pNRewire = rewire('../src/lib/index.js');

describe('princess-names-rewire', function () {
  it('should throw an exception', function () {
    (function () {
      pNRewire.__set__('princessNames', {});
      pNRewire.random();
    }).should.throw('Expected an array');
  });
});
