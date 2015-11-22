var expect  = require('chai').expect;
var nodeTry = require('../index.js');

var fooBarObject = {
  foo: {
    bar: true
  }
};

var emptyObject = {};

describe('node-try', function() {
  it('returns request if it exists', function() {
    expect(fooBarObject.foo.nodeTry('bar')).to.eql(true);
  });

  it('returns {} when request is undefined', function() {
    expect(emptyObject.nodeTry('foo')).to.be.an('object');
  });

  it('existing chained request works', function() {
    expect(fooBarObject.nodeTry('foo').nodeTry('bar')).to.eql(true);
  });

  it('returns {} for undefined while deep chaining', function() {
    var result = emptyObject.nodeTry('foo').nodeTry('bar');

    expect(result).to.be.an('object');
    expect(result).to.be.empty;
  });
});
