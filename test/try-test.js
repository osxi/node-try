var assert  = require('assert');
var nodeTry = require('../index.js');

var fooBarObject = {
  foo: {
    bar: true
  }
};

var emptyObject = {};

describe('node-try', function() {
  it('test suite works', function() {
    assert.equal(true, true);
  });

  it('returns request if it exists', function() {
    assert.equal(fooBarObject.foo.nodeTry('bar'), true);
  });

  it('returns {} when request is undefined', function() {
    assert.equal(emptyObject.nodeTry('foo').constructor.name, 'Object');
  });

  it('existing chained request works', function() {
    assert.equal(fooBarObject.nodeTry('foo').nodeTry('bar'), true);
  });

  it('returns {} for undefined while deep chaining', function() {
    var result = emptyObject.nodeTry('foo').nodeTry('bar');

    assert.equal(result.constructor.name, 'Object');
    assert.equal(Object.keys(result), 0);
  });
});
