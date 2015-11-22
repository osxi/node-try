'use strict';

import { expect } from 'chai';
import nodeTry from '../index';

const fooBarObject = {
  foo: {
    bar: true
  }
};

const emptyObject = {};

const objectWithMethod = {
  foo(message) {
    if (!!!message) {
      return 'foo';
    }

    return `foo${message}`;
  }
};

describe('node-try', () => {
  it('returns request if it exists', () => {
    expect(fooBarObject.foo.nodeTry('bar')).to.eql(true);
  });

  it('returns {} when request is undefined', () => {
    expect(emptyObject.nodeTry('foo')).to.be.an('object');
  });

  it('existing chained request works', () => {
    expect(fooBarObject.nodeTry('foo').nodeTry('bar')).to.eql(true);
  });

  it('returns {} for undefined while deep chaining', () => {
    let result = emptyObject.nodeTry('foo').nodeTry('bar');

    expect(result).to.be.an('object');
    expect(result).to.be.empty;
  });

  it('evaluates method when tried', () => {
    expect(objectWithMethod.nodeTry('foo')).to.eql('foo');
  });

  it('evaluates method with passed arguments', () => {
    expect(objectWithMethod.nodeTry('foo', 'bar')).to.eql('foobar');
  });
});
