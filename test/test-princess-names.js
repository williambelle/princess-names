const should = require('chai').should();
const princessNames = require('../src/lib/index.js');

describe('princess-names', function () {
  it('should contains at least 10 items', function () {
    const enoughNames = Object.keys(princessNames.all).length > 9;
    enoughNames.should.equal(true);
  });

  it('should return a princess name', function () {
    const princess = princessNames.random();
    const enoughLength = princess.length > 2;
    princess.should.be.a('string');
    enoughLength.should.equal(true);
  });

  it('should return Aire', function () {
    const allNames = princessNames.all;
    should.equal(allNames[0], 'Adora');
  });

  it('should return undefined', function () {
    const allNames = princessNames.all;
    should.equal(allNames[10000], undefined);
  });
});

const rewire = require('rewire');
const pNRewire = rewire('../src/lib/index.js');

describe('princess-names-rewire', function () {
  it('should throw an exception', function () {
    (function () {
      pNRewire.__set__('princessNames', {});
      pNRewire.random();
    }).should.throw('Expected an array');
  });
});
